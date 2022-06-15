class MyPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";
    constructor(func) {
        // 保存promise的状态
        this.promiseState = MyPromise.PENDING;
        // 保存promise的结果
        this.promiseResult = null;
        // promise状态未改变时先把成功回调保存起来
        this.onFulfilledCallbacks = []
        // promise状态未改变时先把失败回调保存起来
        this.onRejectedCallbacks = []
        // 执行promise接受的函数
        try {
            // 由于resolve和reject是在外面执行的，所以给它绑定好promise的this，不然会是undefined
            func(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            // 函数执行错误的时候，执行reject
            this.reject(error);
        }
    }
    resolve(result) {
        // 当promise的状态是pending时
        if (this.promiseState === MyPromise.PENDING) {
            // resolve是异步的，所以加定时器模拟异步
            setTimeout(() => {
                // 改变promise的状态
                this.promiseState = MyPromise.FULFILLED;
                // 保存promise的结果
                this.promiseResult = result;
                // 执行成功回调里的函数
                this.onFulfilledCallbacks.forEach(fn => {
                    fn(result)
                })
            })
        }
    }

    reject(reason) {
        // 当promise的状态是pending时
        if (this.promiseState === MyPromise.PENDING) {
            // reject是异步的，所以加定时器模拟异步
            setTimeout(() => {
                // 改变promise的状态
                this.promiseState = MyPromise.REJECTED;
                // 保存promise的结果
                this.promiseResult = reason;
                // 执行失败回调里的函数
                this.onRejectedCallbacks.forEach(fn => {
                    fn(reason)
                })
            })
        }
    }

    then(onFulfilled, onRejected) {
        // then的两个参数必须是函数
        // 如果传进来的成功回调参数不是函数，则需要用函数包装它，将它返回
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        // 如果传进来的失败回调参数不是函数，则需要用函数包装它，以错误的形式返回
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {
            throw reason
        }
        // then返回的是一个新的promise
        const promise2 = new MyPromise((resolve, reject) => {
            // 执行then的时候如果promise的状态还未改变，则将回调保存起来，等状态改变之后再调用
            if (this.promiseState === MyPromise.PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    try {
                        // 执行成功回调
                        const x = onFulfilled(this.promiseResult)
                        // 将回调的结果包装成一个新的promise
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        // 回调执行报错时也需要抛出错误
                        reject(e)
                    }
                })
                this.onRejectedCallbacks.push(() => {
                    try {
                        // 执行失败回调
                        const x = onRejected(this.promiseResult)
                        // 将回调的结果包装成一个新的promise
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        // 回调执行报错也需要抛出错误
                        reject(e)
                    }
                })
            }
            // 如果then执行的时候，promise是成功的状态
            if (this.promiseState === MyPromise.FULFILLED) {
                // then也是需要异步执行的，用setTimeout来模拟异步
                setTimeout(() => {
                    try {
                        // 执行成功回调
                        const x = onFulfilled(this.promiseResult)
                        // 将回调的结果包装成一个新的promise
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        // 回调执行报错也需要抛出错误
                        reject(e)
                    }
                });

            }
            // 如果then执行的时候，promise是错误的状态
            if (this.promiseState === MyPromise.REJECTED) {
                // then也是需要异步执行的，用setTimeout来模拟异步
                setTimeout(() => {
                    try {
                        // 执行失败回调
                        const x = onRejected(this.promiseResult)
                        // 将回调的结果包装成一个新的promise
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        // 回调执行报错也需要抛出错误
                        reject(e)
                    }
                });

            }
        })
        // 返回新的promise
        return promise2
    }

}

// 包装promise处理函数
function resolvePromise(promise2, x, resolve, reject) {
    // 如果返回的新的promise与原本的promise相同的话则报错，不允许循环调用
    if (x === promise2) {
        return reject(new TypeError("Chaining cycle detected for promise"))
    } else if (x instanceof MyPromise) {
        // 如果本身就是一个promise的话则按promise的流程继续执行
        if (x.promiseState === MyPromise.PENDING) {
            x.then(y => {
                resolvePromise(promise2, y, resolve, reject)
            }, reject)
        } else if (x.promiseState === MyPromise.FULFILLED) {
            resolve(x.promiseResult)
        } else if (x.promiseState === MyPromise.REJECTED) {
            reject(x.promiseResult)
        }
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 如果是一个对象或者函数，
        try {
            // 下面有then属性
            var then = x.then
        } catch (e) {
            // 没有则抛错
            return reject(e)
        }

        // 并且then是一个可执行函数
        if (typeof then === 'function') {
            let called = false
            try {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    if (called) return
                    called = true
                    reject(r)
                })
            } catch (e) {
                if (called) return
                called = true
                reject(e)
            }
        } else {
            resolve(x)
        }
    } else {
        return resolve(x);
    }
}

MyPromise.deferred = function () {
    let result = {};
    result.promise = new MyPromise((resolve, reject) => {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
}

module.exports = MyPromise