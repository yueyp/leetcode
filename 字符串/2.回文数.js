/** 
 * 回文数
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
*/

// 将其转换为数组，再将数组反转，最后再转为字符串，判断两者是否相等
var isPalindrome = function (x) {
    return x == (x + "").split("").reverse().join("")
};

var isPalindrome = function (x) {
    // 当x < 0时不是回文数，当x可以被10整除并且不为0时不是回文数
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false
    }
    // 翻转后面一半数，看是否与前面一半数相等
    let revertNum = 0
    while (x > revertNum) {
        revertNum = revertNum * 10 + x % 10
        x = parseInt(x/10)
    }
    return x === revertNum || (x === parseInt(revertNum / 10))
};
