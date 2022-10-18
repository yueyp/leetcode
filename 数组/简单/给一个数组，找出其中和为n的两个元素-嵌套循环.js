
/**
 * 给一个数组，找出其中和为n的两个元素
 * 1.有一个递增的数组[1,2,3,4,7,11,15]和一个n = 15
 * 2.数组中有两个数，和是n。即4+11===15
 * 3.写一个js函数，找出这两个数
*/

/**
 * 常规  思路
 * 嵌套循环，找到一个数，然后去遍历下一个数，求和，判断
 * 时间复杂度是O(n^2), 不可用
 * 
 * 单元测试 toEqual
 * 1.正常情况
 * 2.空数组
 * 3.找不到结果
 * */

function findTwoNumbers(arr, n) {
    const res = [];
    const length = arr.length;
    if (length === 0) {
        return res
    }
    for (let i = 0; i < length - 1; i++) {
        const n1 = arr[i];
        // 是否得到了结果
        let flag = false;
        // 如果是i = 1; i加上除i之后的数据
        for (let j = i + 1; j < length; j++) {
            const n2 = arr[j];
            if (n1 + n2 === n) {
                res.push(n1)
                res.push(n2)
                flag = true;
                break;
            }
        }

        if (flag) {
            break
        }
    }
    return res
}

const array = [1, 21, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, , 1, 2, 1, 2, 1, 2, 3, 4, 7, 11, 15]

console.time('findTwoNumbers')
for (let i = 0; i < 100 * 10000; i++) {
    findTwoNumbers(array, 15)
}
console.timeEnd('findTwoNumbers') // 1728.31591796875 ms





