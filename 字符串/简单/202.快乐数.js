/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * 快乐数」 定义为：

    对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
    然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
    如果这个过程 结果为 1，那么这个数就是快乐数。
    如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// 方法一，
var isHappy = function(n) {
    let obj = {}
    // 获取每位数平方根的和
    var getNext = function(data){
        let sum = 0
        data  = data + ''
        for(let i = 0 ; i < data.length; i++){
            sum += data[i] * data[i]
        }
        return getReuslt(sum)
    }
    function getReuslt(data){
        // 等于1则为快乐数
        if(data === 1){
            return true
        }else if(!obj[data]){
            // 若当前数obj中不存在，则继续进行逐位求平方根取和计算
            obj[data] = true
            return getNext(data)
        }else{
            // 若obj中已存在该数，说明已经进入了一个循环，该数不为快乐数
            return false
        }
    }
    getReuslt(n)
};
// @lc code=end

// 方法二：快慢指针法，慢指针走一步，快指针走两步，总归会进入一个循环，如果循环的数是1，则代表是快乐数，反之则不是
// 逐位求平方根之和
let getNext = function (n) {
    return n.toString().split('').map(i => i ** 2).reduce((a, b) => a + b);
}
let isHappy = function (n) {
    let slow = n;
    let fast = getNext(n);
    while(fast !== 1 && fast !== slow){
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    return fast === 1;
};