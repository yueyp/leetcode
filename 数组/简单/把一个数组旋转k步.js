/**
 * 将一个数组旋转k步
 * 1.输入一个数组[1,2,3,4,5,6,7]
 * 2.k=3, 即旋转 3 步
 * 3.输出[5,6,7,1,2,3,4,5]
 * 
 * 两种思路
 * 1.把末尾的元素挨个pop, 然后unshift到数组前面
 * 2.把数组拆分, 最后concat拼接到一起
*/

function rotate1(arr, k){
    const length = arr.length;
    if( !k || length === 0 ){
        return arr
    }
    // abs 取绝对值
    const step = Math.abs(k % length)

    for (let i = 0; i < step; i++) {
        const n = arr.pop()
        if(n != null){
            // 数组是一个有序结构，unshift操作非常慢
            arr.unshift(n)
        }
    }
    return arr;
}

function rotate2(arr, k){
    const length = arr.length;
    if(!k || length === 0){
        return arr;
    }
    // abs 取绝对值
    const step = Math.abs(k % length)

    console.log('step==', step);

    const part1 = arr.slice(-step);
    const part2 = arr.slice(0, length - step);
    const part3 = part1.concat(part2);

    return part3

}

// 性能测试
// const arr = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr.push(i)
// }
// console.time('rotate')
// rotate1(arr, 9*10000)
// console.timeEnd('rotate') // 1317.074951171875 ms


// const arr1 = []
// for (let i = 0; i < 10 * 10000; i++) {
//     arr1.push(i)
// }
// console.time('rotate2')
// rotate2(arr1, 9*10000)
// console.timeEnd('rotate2') //0.862060546875 ms

// 功能测试
const arr1 = [1,2,3,4,5,6,7,8]
rotate2(arr1, 3)

 