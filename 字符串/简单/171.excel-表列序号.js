/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
// 方法一,执行用时52ms,内存消耗41.8MB，此题相当于转为26进制
var titleToNumber = function(columnTitle) {
    let len = columnTitle.length 
    let sum = 0
    for(let i = 0; i < len; i++){
        sum += (columnTitle.charCodeAt(len - i - 1) - 64 ) * Math.pow(26,i)
    }
    return sum
};

// 方法二,执行用时76ms,内存消耗41.5MB
// 从左往右遍历的话，后面多一位就相当于原来的数左移了一位，所以乘26，多的那位数相当于在个位的数，所以直接加就行
// 从左往右开始遍历，多一位，则前面的数都需要乘以26，
// 例： 第一次循环:0 * 26 + 26 = 26,第二次循环 26 * 26 + 25
var titleToNumber = function(s) {
    let ans = 0
    let num = 0
    for(let i = 0; i < s.length; i++){
        num = s.charCodeAt(i) - 64
        ans = ans * 26 + num
    }
    return ans
}
console.log(titleToNumber('ZY'))
// @lc code=end

