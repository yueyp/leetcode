// 防抖
// func是用户传入需要防抖的函数
// wait是等待时间
function debounce(func, wait = 50) {
    // 缓存一个定时器id
    let timer = 0
    // 这里返回的函数时每次用户实际调用的防抖函数
    // 如果已经设定过定时器了就清空上一次的定时器
    // 开始一个新的定时器，延迟执行用户传入的方法
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, wait)
    }
}

// 节流
// func是用户传入需要防抖的函数
// wait是等待时间
function throttle(func, wait = 50) {
    // 上次执行函数的时间
    let lastTime = 0
    return function (...args) {
        // 当前时间
        let now = +new Date()
        // 将当前时间和上一次执行函数时间对比
        // 如果差值大于设置的等待时间就执行函数
        if (now - lastTime > wait) {
            lastTime = now
            func.apply(this, args)
        }
    }
}
