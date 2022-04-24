/**
 * 两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，
 * 并返回它们的数组下标。你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组
 * 中同样的元素。
 */

/**
 * 法一，新增临时数组，遍历数组，新增变量保存目标值和当前值的差值，
 * 然后判断数组中索引为该差值的数组项是否存在，存在则返回该数组项和
 * 当前索引，然后将当前索引保存到临时数组索引为当前值的项中
 * */
var twoSum = function (nums, target) {
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        var dif = target - nums[i];
        if (temp[dif] != undefined) {
            return [temp[dif], i];
        }
        temp[nums[i]] = i;
    }
};

/**
 * 法二，新增一个map对象，遍历数组，在map中获取目标值和当前值的差值
 * 若能获取到，则返回map中的值和当前索引。并将当前索引保存
 * 到map中key值为当前值的项中
 * */
var twoSum = function (nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const otherIndex = map.get(target - nums[i])
        if (otherIndex !== undefined) return [otherIndex, i]
        map.set(nums[i], i)
    }
};

/**
 * 法三，双层循环，外层循环从索引0开始，内层循环从外层循环索引+1开始，
 * 若两层循环中的当前值等于目标值，则返回索引
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return position
};

/**
 * 法四，新增对象，遍历数组，若对象中key值为当前遍历的值的值存在，
 * 则返回该值和当前索引，否则，将当前索引保存到对象中key值为当前值的键值对中
 * */
var twoSum = function (nums, target) {
    let obj = {}
    for (let i = 0; i < nums.length; i++) {
        const num = num[i]
        if (num in obj) {
            return [obj[num], i]
        } else {
            obj[target - num] = i
        }
    }
}
