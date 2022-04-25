/**
 * 删除排序数组中的重复项
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 不需要考虑数组中超出新长度后面的元素。
 */

/**
* @param {number[]} nums
* @return {number}
*/
/**
 * 若数组为空或者长度为0，则直接返回0。否则循环数组，判断数组的下一项是否存在，存在则与当前值进行比较，
 * 若相等，则删掉当前值，循环索引减一 
 * */
var removeDuplicates = function (nums) {
    if (!nums || !nums.length) return 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== undefined && nums[i] === nums[i + 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
}

/**
 * 循环数组，定义一个慢指针，一个快指针，快指针正常移动，慢指针只有再元素不相同的时候移动，并对慢指针指向的元素
 * 进行赋值
 * */
var removeDuplicates = function (nums) {
    if (!nums || !nums.length) return 0
    let i = 0
    for (let j = 1; i < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}

var removeDuplicates = function (nums) {
    if (nums === null || nums.length === 0) return 0;
    let p = 0;
    let q = 1;
    while (q < nums.length) {
        //  若指针q所在位置的数字不等于指针p所在的数字，则将指针q所在位置的数字赋值给指针p+1所在的数字,p和q指针同时后移一位
        if (nums[p] !== nums[q]) {
            // 若q-p = 1的话会造成重复赋值
            if (q - p > 1) {
                nums[p + 1] = nums[q];
            }
            p++;
        }
        //   若指针q所在位置的数字等于指针p所在的数字 ，则q指针后移，但p指针不移动
        q++;
    }
    return p + 1;
};