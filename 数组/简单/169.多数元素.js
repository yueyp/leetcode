/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一： 执行用时64ms,内存消耗42.9MB
var majorityElement = function (nums) {
    // 首先循环数组，统计每个数字出现的次数
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
        }
    }
    // 根据统计结果，找过出现次数大于n/2的数字
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] > nums.length / 2) {
            return keys[i]
        }
    }
};

// 方法一改进版
var majorityElement = function (nums) {
    if (nums.length === 1) return nums[0]
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
            if (obj[nums[i]] > nums.length / 2) {
                return nums[i]
            }
        } else {
            obj[nums[i]] = 1
        }
    }
};

// 方法二： 执行用时60ms,内存消耗43.7MB
var majorityElement = function (nums) {
    let len = nums.length
    // 若数组只存在一个元素，则返回该元素
    if (len === 1) return nums[0]
    // 对数组元素进行排序，让相同的数挨在一起
    nums.sort()
    // 保存当前数字出现的个数
    let n = 1
    for (let i = 0; i < len - 1; i++) {
        // 若后一位数等于当前数，则当前数出现次数加一
        if (nums[i] === nums[i + 1]) {
            n++
            // 若当前数出现次数大于n/2，则返回当前数
            if (n > len / 2) {
                return nums[i]
            }
        } else {
            // 后一位数不等于当前数，则将n重置为1
            n = 1
        }
    }
}

// 方法三： 执行用时68ms,内存消耗43.3MB
// 由于多数元素一定存在，且它的个数大于n/2,所以无论如何，在n/2的位置一定能找到该数
var majorityElement = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    return nums[Math.floor(nums.length / 2)]
}

// 方法四：执行用时64ms,内存消耗42.2MB
//每一轮随机选择一个数字，统计出现次数，因为目标出现频率大于二分之一，所以效率较高
var majorityElement = function (nums) {
    while (true) {
        let candidate = nums[Math.round(Math.random() * (nums.length - 1))], count = 0;
        for (let n = 0; n < nums.length; n++) {
            if (nums[n] == candidate)
                count++;
        }
        if (count > nums.length / 2) return candidate;
    }
}
// @lc code=end

