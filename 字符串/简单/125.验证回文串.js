/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
   说明：本题中，我们将空字符串定义为有效的回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 方法一： 执行用时60ms,内存消耗43.2MB
// var isPalindrome = function(s) {
//     // 将字符串的字母都转为小写，然后去除字符串中除字母和数字之外的字符
//     s = s.toLowerCase().replace(/[^a-z|0-9]/g,"")
//     let len = s.length
//     // 循环字符串，只需要循环到一半位置，
//     for(let i = 0; i < len/2; i++){
//         // 判断前后字符是否相等，只要有不相等的则不是回文字符串
//         if(s[i] !== s[len - i - 1]) return false
//     }
//     return true
// };

// 方法二： 执行用时66ms,内存消耗44.8MB
var isPalindrome = function(s) {
    // 将字符串的字母都转为小写，然后去除字符串中除字母和数字之外的字符
    s = s.toLowerCase().replace(/[^a-z|0-9]/g,"")
    // 将字符串转为数组然后翻转过来再转为字符串
    let s1 = s.split("").reverse().join("")
    // 判断字符串是否与翻转后的字符串相等
    return s === s1
};

console.log(isPalindrome("race a car"))
// @lc code=end

