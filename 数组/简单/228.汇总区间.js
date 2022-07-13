/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 * 给定一个  无重复元素 的 有序 整数数组 nums 。
  返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
    输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
  */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if(!nums || !nums.length) return nums
    if(nums.length === 1) return [nums[0] + '']
    let arr = []
    let pre = nums[0]
    for(let i = 1; i < nums.length; i++){
       // 若当前数减一不等于前一位数
       if(nums[i] - 1 !== nums[i - 1]){
            // 起始值等于前一位数，则直接保存回前一位数
            if(pre === nums[i - 1]){
                arr.push(pre + '')
            }else{
                // 否则，数组中保存起始值->前一位数区间
                arr.push(pre + '->' + nums[i-1])
            }
            // 起始值设置为当前值
            pre = nums[i]
            // 若当前值已经为最后一项，则数组中保存当前值
            if(i === nums.length - 1){
                arr.push(nums[i] + '')
            }
       }else{
            // 若循环到最后，当前数为前一位数加一，则数组中保存起始值->当前值区间
            if(i === nums.length - 1){
                arr.push(pre + '->' + nums[i])
            }
       }
    }
    return arr
};

/*
方法二
我们从数组的位置 0 出发，向右遍历。每次遇到相邻元素之间的差值大于 1 时，我们就找到了一个区间。遍历完数组之后，就能得到一系列的区间的列表。

在遍历过程中，维护下标 low 和 high 分别记录区间的起点和终点，对于任何区间都有low≤high。当得到一个区间时，根据low 和high 的值生成区间的字符串表示。

当low<high 时，区间的字符串表示为 "low→high"；

当low=high 时，区间的字符串表示为 "low"。

*/ 
var summaryRanges = function(nums){
    const ret = []
    let i = 0
    const n = nums.length
    while(i < n){
        const low = i
        i++
        while(i < n && nums[i] === nums[i - 1] + 1){
            i++
        }
        const high = i - 1
        const temp = ["" + nums[low]]
        if(low < high){
            temp.push("->")
            temp.push("" + nums[high])
        }
        ret.push(temp.join(""))
    }
    return ret
}

console.log(summaryRanges([1,3]))
console.log(summaryRanges([0,1,2,4,5,7]))
console.log(summaryRanges([0,2,3,4,6,8,9]))
// @lc code=end

