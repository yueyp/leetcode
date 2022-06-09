/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/*
将 nn 视作一个长为 3232 的二进制串，从低位往高位枚举 nn 的每一位，将其倒序添加到翻转结果 \textit{rev}rev 中。

代码实现中，每枚举一位就将 nn 右移一位，这样当前 nn 的最低位就是我们要枚举的比特位。当 nn 为 00 时即可结束循环。

n & 1 是取最后一位
然后将其左移31-i位
n >>>= 1 是将n无符号右移
|= 相当于相加
rev >>> 0 是保证rev有意义(为数字类型)，且为正整数，在有效的范围内
*/ 
var reverseBits = function (n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i);
        n >>>= 1;
    }
    return rev >>> 0;
};

console.log(reverseBits(00000010100101000001111010011100))
// @lc code=end

