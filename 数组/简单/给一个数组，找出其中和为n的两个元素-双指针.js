/**
 * 给一个数组，找出其中和为n的两个元素
 * 1.有一个递增的数组[1,2,3,4,7,11,15]和一个n = 15
 * 2.数组中有两个数，和是n。即4+11===15
 * 3.写一个js函数，找出这两个数
 * 
 * 划重点
 * 凡有序，必二分
 * 优化嵌套循环，可以考虑 “双指针”
*/

/**
 * 利用递增(有序)的特性
 * 1.随便找两个数
 * 2.如果和大于n, 则需要向前寻找
 * 3.如果和小于n, 则需要向后寻找---二分法
 * 
 * 解决方法
 * 双指针，时间复杂度降低到O(n)
 * 1.定义i指向头, j指向尾, arr[i] + arr[j]
 * 2.如果大于n, 则j需要向前移动
 * 3.如果小于n, 则i需要向后移动
 * 
 * */

function findTwoNumbers(arr, n) {
    const res = [];
    const length = arr.length;
    if (length === 0) {
        return res
    }
    // 头 
    let i = 0;
    // 尾
    let j = length - 1;
    while (i < j) {
        const n1 = arr[i];
        const n2 = arr[j];
        const sum = n1 + n2;

        // console.log('n===', n1, n2, i, j)

        // sun 大于 n, 则j要向前移动
        if (sum > n) {
            j--
        }
        // sun 小于 n, 则i要向后移动
        else if (sum < n) {
            i++
        }
        // 相等
        else {
            res.push(n1)
            res.push(n2)
            break
        }
    }
    return res
}
/**
 * 单元测试 toEqual
 * 1.正常情况
 * 2.空数组
 * 3.找不到结果
 * */

const array = [1, 21, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, , 1, 2, 1, 2, 1, 2, 3, 4, 7, 11, 15]

console.time('findTwoNumbers')
for (let i = 0; i < 100 * 10000; i++) {
    findTwoNumbers(array, 15)
}
console.timeEnd('findTwoNumbers') //159.375 ms

