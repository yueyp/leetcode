/*
冒泡排序
相邻元素一一比较，大的往后放，
第一轮循环找到最大值放到最后一位，
第二轮循环，只需要循环到倒数第二位（因为最后一位已经是最大值了，不需要再进行比较），
找出第二大的值放置到倒数第二位，以此循环
*/
var bubbleSort = function (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(bubbleSort([3, 2, 14, 6, 34, 1, 3]))

/*
选择排序
选择排序是指从未排序的序列中找到最小的值并取出放到已经排好顺序的序列中，
一直到未排序序列中的元素个数为零
从头开始遍历数组，假设当前值为最小值，遍历该值之后的值，找到最小的值与当前值交换位置，
*/
var selectSort = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i
        let minValue = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < minValue) {
                minIndex = j
                minValue = arr[minIndex]
            }
        }
        let temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    return arr
}
console.log(selectSort([3, 2, 14, 2, 6, 34, 1, 3]))

/*
快速排序
选取基准数，遍历数组，将小于基准数的放到它的左边，大于基准数的放到它的右边。
*/
function quickSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = []
    let right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[mid]) right.push(arr[i])
        // 可能会存在相等的，若存在相等的数且不是它自身，则将其放入左边的数组
        if (arr[i] <= arr[mid] && i !== mid) left.push(arr[i])
    }
    return quickSort(left).concat([arr[mid]], quickSort(right))
} 
console.log(quickSort([3, 2, 14, 2, 6, 34, 1, 3]))