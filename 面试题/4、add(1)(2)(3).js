/*
实现add(1)(2)(3),add(1,2)(3)

函数柯里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
 
https://www.jianshu.com/p/2975c25e4d71 */

function add() {
    const _args = [...arguments]
    function fn(){
        _args.push(...arguments)
        return fn
    }
    fn.toString = function(){
        return _args.reduce((sum,cur) => sum + cur)
    }
    return fn
}
console.log(add(1,2)(3)(4))