/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/* 采用对象保存遍历过的元素，若对象中已存在该元素且两则索引之差小于k，
则返回true，若对象中不存在该元素，则保存起来，值为索引。
 若对象中已经存在该元素，但是两者索引之差大于k，则保存最新的索引
*/
var containsNearbyDuplicate = function (nums, k) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] === undefined) {
            obj[nums[i]] = i
        } else {
            if (i - obj[nums[i]] <= k) {
                return true
            } else {
                obj[nums[i]] = i
            }
        }
    }
    return false
};

/*
两层循环，查找当前元素后k个元素中是否有与它相等的
*/
var containsNearbyDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j <= k; j++) {
            if (nums[i] === nums[i + j]) {
                return true
            }
        }
    }
    return false
}

/*
维护一个哈希表，里面始终最多包含 k 个元素，当出现重复值时则说明在 k 距离内存在重复元素
每次遍历一个元素则将其加入哈希表中，如果哈希表的大小大于 k，则移除最前面的数字
*/
var containsNearbyDuplicate = function (nums, k) {
    const set = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true
        }
        set.add(nums[i])
        if (set.size > k) {
            set.delete(nums[i - k])
        }
    }
    return false
}
// @lc code=end

