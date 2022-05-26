/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法一： 执行用时88ms,内存消耗43.8MB
var singleNumber = function (nums) {
    // 先对数组进行排序，让相同的数字放在一起
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        // 判断当前数字是否与下一个数字相等，不相等说明这个数字只有一个
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        } else {
            // 相等的话，则跳过下一个数字（应该下一个数字已经有与它相等的了，所以无需再判断），判断后面的数字
            i++
        }
    }
};

// 方法二： 执行用时64ms,内存消耗46.7MB，该方法使用对象也可实现
var singleNumber = function (nums) {
    // 新增map对象保存数组中的值
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        // 若map中不存在改数字，则将其放入map对象中
        if (!map.get(nums[i])) {
            map.set(nums[i], 1)
        } else {
            // 若map中已经存在该数字，则将其删除，这样map中就只存在只出现了一次的字符
            map.delete(nums[i])
        }
    }
    // map的keys返回的是map中键值的类数组，所以先要转为数组，再取第一项即为只出现一次的字符
    return Array.from(map.keys())[0]
};

// 方法三：执行用时648ms,内存消耗41.9MB
var singleNumber = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        // 只出现一次的数字无论从前获取索引还是从后获取索引，拿到的都是一样
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
            return nums[i];
        }
    }
};

// 方法四：执行用时56ms,内存消耗43.3MB，相同的数进行异或会得到0，0与任何数异或都能得到它本身，由此得出只出现一次的数字
var singleNumber = function(nums){
    let ans = 0
    for(let num of nums){
        ans ^= num
    }
    return ans
}

console.log(singleNumber([4, 1, 2, 1, 2]))
// @lc code=end

