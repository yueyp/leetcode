/**
 * 搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 */ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * 利用includes方法判断目标值在不在数组中
 * 循环数组，若当前数组项等于目标值，则返回当前索引
 * 若目标值不存在数组中，且当前数组项大于目标值，则目标值应该被插入到当前数组项的前面，所以返回当前索引
 * 若循环结束仍没有找到目标值的位置，说明目标值大于数组中任意一项，则返回数组的长度
*/
var searchInsert = function(nums, target) {
    let isExit = nums.includes(target)
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] === target){
            return i
        }else if(!isExit && nums[i] > target){
            nums.splice(i,0,target)
            return i
        }
    }
    return nums.length
}