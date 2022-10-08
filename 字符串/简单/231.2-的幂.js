/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 * 给你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

   如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // if(n === 1) return true
    // if(Math.floor(n / 2) !== Math.ceil(n / 2)) return false
    if( n <= 0) return false
    while(n){
        if(n % 2 !== 0) return false
        n = n / 2
    }
    return true
};
// @lc code=end

