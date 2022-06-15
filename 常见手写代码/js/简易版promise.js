// promise学习地址 https://juejin.cn/post/6844903796129136654#heading-24
// https://juejin.cn/post/6844904077537574919
const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn){
    const that = this
    that.state = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []

    function resolve(value){
        if(that.state === PENDING){
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value){
        if(that.state === PENDING){
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    try{
        fn(resolve,reject)
    }catch(e){
        reject(e)
    }
}

MyPromise.prototype.then = function(onFulfilled,onRejected){
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
    if(that.state === PENDING){
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if(that.state === RESOLVED){
        onFulfilled(that.value)
    }
    if(that.state === REJECTED){
        onRejected(that.value)
    }
}

// Promise.resolve
Promise.resolve = function(param){
    // 如果传入的value本身就是promise对象，那么promise.resolve将不做任何修改，原封不动地返回这个promise对象
    if(param instanceof Promise){
        return param
    }
    return new Promise((resolve,reject) => {
        /* 如果value是个thenable对象，返回的promise会跟随这个thenable的对象，采用它的最终状态
        let p2 = Promise.resolve({
            then: function(resolve, reject) {
                resolve(30);
            }
        });
        */
        if(param && typeof param === 'object' && typeof param.then === 'function'){
            // 它的then会晚于其它的then，所以加定时器
            setTimeout(() => {
                param.then(resolve,reject)
            })
        }else{
            // 其它情况，直接返回以该值为成功状态的promise对象
            resolve(param)
        }
    })
}

// Promise.reject
// Promise.reject的参数会原封不动的作为reject的理由，变成后续方法的参数
Promise.reject = function(reason){
    return new Promise((resolve,reject) => {
        reject(reason)
    })
}

// Promise.prototype.catch
// 用于指定出错时的回调，是特殊的then方法，catch之后，可以继续then
Promise.prototype.catch = function(onRejected){
    return this.then(null.onRejected)
}

// Promise.prototype.finally
// 不管成功还是失败，都会走到finally中，并且finally之后，还可以继续then，并且会原封不动的传递给后面的then
Promise.prototype.finally = function(callback){
    return this.then((value) => {
        return Promise.resolve(callback()).then(() => {
            return value
        })
    },(err) => {
        return Promise.resolve(callback()).then(() => {
            throw err
        })
    })
}

// Promise.all 
// 返回值是一个数组
Promise.all = function(promises){
    promises = Array.from(promises) // 将可迭代对象转为数组
    return new Promise((resolve,reject) => {
        let index = 0
        let result = []
        if(promises.length === 0){
            resolve(result)
        }else{
            function processValue(i,data){
                result[i] = data
                if(++index === promises.length){
                    resolve(result)
                }
            }
            for(let i = 0; i < promises.length; i++){
                // promises[i]可能是普通值
                Promise.resolve(promises[i]).then((data) => {
                    processValue(i,data)
                },(err) => {
                    reject(err)
                    return
                })
            }
        }
    })
}

// Promise.race
Promise.race = function(promises){
    promises = Array.from(promises)
    return new Promise((resolve,reject)=>{
        // 如果传的数组为空，则返回的promise则是永远等待
        if(promises.length === 0){
            return
        }else{
            for(let i = 0;i < promises.length; i++){
                Promise.resolve(promises[i]).then((data) => {
                    resolve(data)
                    return
                },err => {
                    reject(err)
                    return
                })
            }
        }
    })
}