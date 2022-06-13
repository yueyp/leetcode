/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 * 编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为汉明重量）。
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/**
 * n&1 是取最后一位数字
 * n>>>1 是无符号右移
 */ 
// 方法一：执行用时：56ms ,内存消耗：41.4 MB
var hammingWeight = function(n) {
    let num = 0
    for(let i = 0; i < 32 && n > 0; ++i){
        if((n & 1) === 1){
            num++
        }
        n>>>=1
    }
    return num
};

// 方法二：执行用时：64ms ,内存消耗：41.2 MB
/**
 * 我们可以直接循环检查给定整数 n 的二进制位的每一位是否为 1。
   具体代码中，当检查第 i 位时，我们可以让 n 与 2^i
  进行与运算，当且仅当 n 的第 i 位为 1 时，运算结果不为 0。

 */
var hammingWeight = function(n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
      if ((n & (1 << i)) !== 0) {
          ret++;
      }
  }
  return ret;
};

/**
 * 方法三：n & (n-1)会把n的最低为1变成0，所以我们可以反复进行该运算，直至全部为0，运算次数即为1的个数
 */
 var hammingWeight = function(n) {
    let ret = 0;
    while (n) {
        n &= n - 1;
        ret++;
    }
    return ret;
};


// @lc code=end

