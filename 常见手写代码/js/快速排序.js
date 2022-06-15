
// 方法一:选取基准数，遍历数组，将小于基准数的放到它的左边，大于基准数的放到它的右边。
function quickSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length /2)
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[mid]) right.push(arr[i])
        // 可能会存在相等的，若存在相等的数且不是它自身，则将其放入左边的数组
        if(arr[i] <= arr[mid] && i !== mid) left.push(arr[i])
    }
    return quickSort(left).concat([arr[mid]],quickSort(right))
}

// 方法二：

console.log(quickSort([3,4,1,6,7,2,4,7,2,1,6,9,4]))
console.log(([3,4,1,6,7,2,4,7,2,1,6,9,4]).sort())