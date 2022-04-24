/**
 *  移除元素
 *  给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 *  不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 *  元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/**
 * 数组为空或者长度为空，则返回0
 * 定义一个指针，循环数组，若数组项的值不等于指定的值，则将它赋值给指针指向的数组元素，同时指针加一
 * 最终返回指针加一
 * */ 
var removeElement = function (nums, val) {
    if(!nums || !nums.length) return 0
    let i = 0
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = val
            i++
        }
    }
    return i+1
}

/**
 * 数组为空或者长度为空，则返回0
 * 循环数组，若当前数组项的值等于指定的值，则采用splice方法删除它，然后索引减一
 * 最终返回数组长度
 */ 
var removeElement = function (nums, val) {
    if(!nums || !nums.length) return 0
    for(let j = 0; j < nums.length; j++){
        if(nums[j] === val){
            nums.splice(j,1)
            j--
        }
    }
    return nums.length
}
