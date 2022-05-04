/**
    给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

    由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

    注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 

    示例 ：
    输入：x = 8
    输出：2
    解释：8 的算术平方根是 2.82842..., 由于返回类型是整数，小数部分将被舍去。
**/

/**
 * @param {number} x
 * @return {number}
 */
// 方法一,执行用时172ms,内存消耗42.7MB
var mySqrt = function (x) {
    if (x === 0) return 0
    if (x <= 3) return 1
    // 大于3的数的平方根肯定小于它的一半，所以只循环到一半
    for (let i = 2; i <= parseInt(x / 2); i++) {
        // 当前数相乘小于等于它并且当前数加一大于它，则它的平方根即为当前数
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            return i
        }
    }
};

// 方法一,执行用时88ms,内存消耗42.4MB，二分法
var mySqrt = function (x) {
    if(x < 2) return x
    let left = 2
    let right = Math.floor(x / 2)
    // 循环终止条件是左边的数大于右边的数
    while(left <= right){
        let middle =left + Math.floor((right - left) >> 1)
        if(middle * middle === x){
            return middle 
        } else if(middle * middle > x){
            right = middle - 1
        }else{
            left = middle + 1
        }
    }   
    return right
};

console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(10))