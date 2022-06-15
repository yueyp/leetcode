Function.prototype.myCall = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    // 处理参数和 call 有区别
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    const _this = this
    const args = [...arguments].slice(1)
    // 返回一个函数
    return function F() {
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

function myInstanceof(left, right) {
    let prototype = right.prototype
    left = left.__proto__
    while (true) {
        if (left === null || left === undefined)
            return false
        if (prototype === left)
            return true
        left = left.__proto__
    }
}

function myNew(fn, ...args) {
    let instance = Object.create(fn.prototype)
    let result = fn.call(instance, ...args)
    return typeof result === 'object' ? result : instance
}

// 实现一个Object.create()
Object.myCreate = function(proto,properties){
    function F(){}
    F.prototype = proto
    if(properties){
        Object.defineProperties(F,properties)
    }
    return new F()
}

function fn(){
    this.a = 1
}
let obj2 = new fn()
console.log(obj2)