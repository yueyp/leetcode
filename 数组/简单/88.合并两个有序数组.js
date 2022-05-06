/*
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

示例 ：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。

*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    //  将数组2拼接到数组1后面
    nums1.splice(m, n, ...nums2);
    // 排序
    return nums1.sort((a, b) => a - b);
}

var merge = function (nums1, m, nums2, n) {
    // 获取数组一最大的索引
    let len1 = m - 1;
    // 获取数组二最大的索引
    let len2 = n - 1;
    // 或者俩数组合并后的最大索引
    let len = m + n - 1;
    // 俩数组任一数组的索引小于0则停止循环
    while (len1 >= 0 && len2 >= 0) {
        // 一一比较，将较大值放入数组，同时该值存在的数组索引减一
        nums1[len--] =
            nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    // 若len1小于0，则说明，数组一的最小值大于数组二的最小值，则将数组二剩下的都拼接到数组一的前面
    // 若len2小于0，则说明，数组一的最小值小于数组二的最小值，则无需进行拼接操作了
    nums1.splice(0, len2 + 1, ...nums2.slice(0, len2 + 1));
};
//   num1[5] = 6 len2=1 len1 = 2
//   num1[4] = 5 len2=0 len1= 2
//   num1[3] = 3 len2=0 len1=1
//   num1[2] = 2 len2= -1 len1 = 1

// 双指针法
var merge = function (nums1, m, nums2, n) {
    let p1 = 0, p2 = 0;
    const sorted = new Array(m + n).fill(0);
    var cur;
    // 俩指针都走到最后了，则结束循环
    while (p1 < m || p2 < n) {
        // 数组一的指针走到头了，则将数组二的值都拼接到最后即可
        if (p1 === m) {
            cur = nums2[p2++];
        } else if (p2 === n) {
            // 数组二的指针走到头了，则将数组一的值都拼接到最后即可
            cur = nums1[p1++];
        } else if (nums1[p1] < nums2[p2]) {
            // 当前数组一的值小于数组二的值，则取数组一的值作为当前值
            cur = nums1[p1++];
        } else {
            // 当前数组一的值大于数组二的值，则取数组二的值作为当前值
            cur = nums2[p2++];
        }
        sorted[p1 + p2 - 1] = cur;
    }
    for (let i = 0; i != m + n; ++i) {
        nums1[i] = sorted[i];
    }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

