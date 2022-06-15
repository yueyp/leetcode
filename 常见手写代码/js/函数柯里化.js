
/**
 * 函数柯里化定义：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数
 * 函数柯里化用途：
 *     1、参数复用，比如说多次调用一个参数，第一个参数始终都是相同的，这种就可以采用函数柯里化，实现第一个参数复用
 *     2、提前确认：比如事件监听兼容函数，每次去调用的时候都要判断兼容性，可以采用函数柯里化，一开始就将兼容性判断好，不需要 每次调用都判断一遍
 *     3、延迟执行：比如我们经常使用的bind函数的实现。
*/
/**
 * 实现一个add方法，使计算结果能够满足如下预期：
 * add(1)(2)(3) = 6;
 * add(1, 2, 3)(4) = 10;
 * add(1)(2)(3)(4)(5) = 15;
 * */

function add() {
    const _args = [...arguments]
    const _adder = function () {
        _args.push(...arguments)
        return _adder
    }
    _adder.toString = function () {
        return _args.reduce(function (a, b) {
            return a + b
        })
    }
    return _adder
}
console.log(add(1, 2)(2)(3).toString())

/**
 * 函数的参数个数可以直接通过函数数的.length属性来访问
 * 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
 * 传入的参数小于原始函数fn的参数个数时则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
 */
const curry = (fn, ...args) => {
    args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args)
}
function add1(x, y, z) {
    return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));
