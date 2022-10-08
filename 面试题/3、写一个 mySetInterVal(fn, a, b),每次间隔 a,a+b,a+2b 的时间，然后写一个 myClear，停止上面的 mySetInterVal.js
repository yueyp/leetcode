// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b 的时间，然后写一个 myClear，停止上面的 mySetInterVal
// 方法一
function mySetInterVal(fn, a, b) {
    let timer = null
    let count = 0
    function loop() {
        timer = setTimeout(() => {
            fn()
            count++
            loop()
        }, a + count * b)
    }
    loop()
    return () => {
        clearTimeout(timer)
    }
}
//测试
const myClear = mySetInterVal(() => { console.log('test') }, 1000, 500);
// 清除定时器
myClear()

// 方法二
function mySetInterVal(fn, a, b) {
    this.a = a;
    this.b = b;
    this.time = 0;
    this.handle = -1;
    this.start = () => {
        this.handle = setTimeout(() => {
            fn();
            this.time++;
            this.start();
            console.log(this.a + this.time * this.b);
        }, this.a + this.time * this.b);
    }

    this.stop = () => {
        clearTimeout(this.handle);
        this.time = 0;
    }
}

var a = new mySetInterVal(() => { console.log('123') }, 1000, 2000);
a.start();
a.stop();