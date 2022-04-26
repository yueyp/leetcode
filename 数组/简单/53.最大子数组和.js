/*
最大子序和
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 超出时间限制
var maxSubArray = function (nums) {
    // 保存当前的最大值
    let max = nums[0]
    // 循环数组
    for(let i = 0; i < nums.length; i++){
        let sum = nums[i]
        max = Math.max(max,nums[i])
        // 将每一项的值一一与后面的值相加，若大于当前最大值则将其赋值给最大值
        for(let j = i+1; j < nums.length;j++){
            sum += nums[j]
            max = Math.max(max,sum)
        }
    }
    return max
}

// 方法二,执行用时84ms,内存消耗49.6MB
var maxSubArray = function (nums) {
    // 用来保存最大值
    let maxNum = nums[0]
    // 用来保存当前开始计算的值
    let curNum = nums[0]
    for(let i = 0; i < nums.length; i++){
        // 若当前值比当前值加上之前的和还大的话，则抛弃之前的和，从该值重新计算
        curNum = Math.max(nums[i],curNum+nums[i])
        // 判断当前值和之前保存的最大值的大小
        maxNum = Math.max(maxNum,curNum)
    }
    return maxNum
}

// 方法二,执行用时84ms,内存消耗49.6MB
var maxSubArray = function (nums) {
    // 用来保存最大值
    let maxNum = nums[0]
    // 用来保存当前开始计算的值
    let curNum = nums[0]
    for(let i = 0; i < nums.length; i++){
        // 若当前值比当前值加上之前的和还大的话，则抛弃之前的和，从该值重新计算
        curNum = Math.max(nums[i],curNum+nums[i])
        // 判断当前值和之前保存的最大值的大小
        maxNum = Math.max(maxNum,curNum)
    }
    return maxNum
}

// 方法三,执行用时76ms,内存消耗49.2MB
var maxSubArray = function (nums) {
    // 用来保存最大值
    let maxNum = nums[0]
    for(let i = 1; i < nums.length; i++){
        // 若前一项的值为正的，则与当前项的值相加，并将结果赋值给当前项
        if(nums[i -1] > 0) nums[i] += nums[i-1]
        // 判断当前值和之前保存的最大值的大小
        maxNum = Math.max(maxNum,nums[i])
    }
    return maxNum
}

console.log(maxSubArray([1]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray([-1,0,-2]))
console.log(maxSubArray([-2,1]))