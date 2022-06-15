// 参考链接 https://juejin.cn/post/6844904164133175309
// 简易版 https://github.com/YvetteLau/Blog/blob/master/JS/Async/generator.js
/* 
    const getData = () => new Promise(resolve => setTimeout(() => {resolve('data')},1000))
    async function test() {
        const data = await getData()
        console.log('data: ', data);
        const data2 = await getData()
        console.log('data2: ', data2);
        return 'success'
    }

    // 这样的一个函数 应该再1秒后打印data 再过一秒打印data2 最后打印success
    test().then(res => console.log(res))
*/

/* 
    // 改用generator来实现
    const getData = () => new Promise(resolve => setTimeout(() => {resolve('data')},1000))

    function* testG() {
        // await被编译成了yield
        const data = yield getData()
        console.log('data: ', data);
        const data2 = yield getData()
        console.log('data2: ', data2);
        return 'success'
    }

    var gen = testG()
    var dataPromise = gen.next()
    dataPromise.value.then((value1) => {
        var data2Promise = gen.next(value1)
        data2Promise.value.then((value2) => {
            var data3Promise = gen.next(value2)
            console.log(data3Promise.value)
        })
    })
*/

/*
    var test = asyncToGenerator(testG)
    test().then(res => console.log(res))
    首先会有函数调用，所以应该返回一个function，然后是then，所以需要返回一个promise
*/
function asyncToGenerator(generatorFunc){
    return function(){
        // 相当于 gen = testG()
        const gen = generatorFunc.apply(this,arguments)
        return new Promise((resolve,reject) => {
            // step用来自执行yield
            // key有next和throw两种取值，分别对应了gen的next和throw方法
            // arg参数则是用来把promise.resolve出来的值交给下一个yield
            function step(key,arg){
                let generatorResult
                // 这个方法需要包裹在try catch中
                // 如果报错了就把promise 给reject掉，外部可以通过.catch可以获取到错误
                try{
                    generatorResult = gen[key](arg)
                }catch(error){
                    return reject(error)
                }
                // gen.next()得到的结果是一个{value,done}的结构
                const {value,done} = generatorResult
                if(done){
                    // 如果已经完成了，就直接resolve这个promise
                    // 这个done是在最后一次调用next才会为true
                    // 这个value也就是generator函数最后的返回值
                    return resolve(value)
                }else{
                    // 除了最后结束的时候外，每次调用gen.next()
                    // 其实是返回了{value：Promise,done:false}的结构
                    // 这里要注意的是Promise.resolve可以接受一个promise为参数
                    // 并且这个promise参数被resolve的时候，这个then才会被调用
                    return Promise.resolve(value).then(val => {
                        step('next',val)
                    },err => {
                        step('throw',err)
                    })
                }
            }
            step("next")
        })
    }
}