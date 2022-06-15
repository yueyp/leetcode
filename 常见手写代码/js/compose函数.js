/**
 * compose函数是函数式编程中使用较多的一种写法，它把逻辑解耦在各个函数中，通过compose的方式组合函数，
 * 将外部数据依次通过各个函数的加工，生成结果
*/
/*
// 同步
function compose(...funcs) {
    if (funcs.length === 0) {
        return args => args
    }
    if (funcs.length === 1) {
        return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => b(a(...args)))
}
// 测试
// 函数一  保留两位小数向下取整
function fixed(num) {
    return (Math.floor(num * 100) / 100).toFixed(2)
}
// 函数二 千分符转换
function thousand(num){
    return (num + "").replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,')
}
const num = 1234.5678
console.log(thousand(fixed(num)))
console.log(compose(fixed,thousand)(num));
*/

// 异步
function compose(...funcs) {
    if (funcs.length === 0) {
        return args => args
    }
    if (funcs.length === 0) {
        return args => args
    }
    return funcs.reduce((a, b) => async (...args) => b(await a(...args)))
}
function fn1(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arg += '_Promise_fn1'
            console.log('fn1')
            resolve(arg)
        }, 1000)
    })
}
function fn2(arg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            arg += '_Promise_fn2'
            console.log('fn2')
            resolve(arg)
        }, 1000)
    })
}
function fn3(arg) {
    arg += '_fn3'
    return arg;
}
const result = compose(fn1, fn3, fn2)
result(1).then(res => {
    console.log('异步返回', res)
})