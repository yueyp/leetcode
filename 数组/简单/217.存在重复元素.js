/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 // 法一，循环数组，将元素放进一个对象中，判断之前是否出现过  --综合最高效
 var containsDuplicate = function (nums) {
    let obj  = {}
    for(let i = 0 ; i < nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = true
        }else{
            return true
        }
    }
    return false
};
// 法二,先排序，排序完后循环，看前后元素是否相等
var containsDuplicate = function(nums){
    nums.sort()
    for(let i = 0 ; i < nums.length - 1; i++){
        if(nums[i] === nums[i+1]){
            return true
        }
    }
    return false
}
// 方法三,对数组去重，判断去重后的数组长度与该数组长度是否一致
var containsDuplicate = function(nums){
    let arr = Array.from(new Set(nums))
    return arr.length !== nums.length
}
// 方法四  -- 三次循环，时间复杂度过高，空间复杂度很低
var containsDuplicate = function(nums){
    for(let i = 0 ; i < nums.length - 1; i++){
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
            return true
        }
    }
    return false
}
// @lc code=end

