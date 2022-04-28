/**
    给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

    最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

    你可以假设除了整数 0 之外，这个整数不会以零开头

    输入：digits = [1,2,3]
    输出：[1,2,4]
    解释：输入数组表示数字 123。
**/ 

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 方法一,执行用时60ms,内存消耗41.1MB
var plusOne = function(digits) {
    // 进位
    let carryBit = 0
    let len = digits.length - 1
    // 数组最后一位加一
    digits[len] = digits[len] + 1
    // 从末尾开始循环数组
    for(let i = len; i >= 0; i--){
        // 当前数字与进位相加
        digits[i] = digits[i] + carryBit
        // 如果大于10,则当前值保存个位数,进位为1
        if(digits[i] >= 10){
            digits[i] = digits[i] - 10
            carryBit = 1
        }else{
            // 小于10则进位为0,即可停止循环
            carryBit = 0
            break
        }
    }
    // 循环结束后若存在进位,则将进位放置到数组第一项
    if(carryBit === 1) digits.unshift(1)
    return digits
};

// 方法一,执行用时64ms,内存消耗41.1MB
var plusOne = function(digits) {
    // 从后往前循环数组
    for(let i = digits.length - 1; i >=0 ;i--){
        // 当前值加一
        digits[i]++
        // 当前值 = 当前值 % 10 ,若当前值为10,则余数为0,为当前值小于10,则余数等于当前值
        digits[i] = digits[i] % 10
        // 如果当前值不为0 ,则代表没有进位,可以终止循环
        if(digits[i] != 0) return digits
    }
    // 走到这里说明数组首位为0 ,存在进位,所以将进位1加到数组第一项
    digits.unshift(1)
    return digits
};

console.log(plusOne([1,2,3]))
console.log(plusOne([9,9,9]))