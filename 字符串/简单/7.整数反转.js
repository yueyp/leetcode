/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * */

/**
 * 方法一，将输入值取绝对值后转为字符串，将字符串转为数组并进行反转后
 * 重新转换为字符串，再转换为数字。如果输入值大于0，并且转换后的值在
 * 32位有符号整数的范围内，则返回转换后的值，否则返回0，
 * int类型（整数类型）的范围为-2^31 ~ 2^31-1，即-2147483648~2147483647
 * */ 
var reverse = function (x) {
    let str = Math.abs(x) + ''
    let res = parseInt(str.split("").reverse().join(""))
    if (x > 0) {
        if (res < Math.pow(2, 31) - 1) {
            return res
        }
    } else if (x < 0) {
        if (res < Math.pow(2, 31)) {
            return -res
        }
    }
    return 0
}

/**
 * 方法二，依次取余数，乘10进行累加，过程中需要判断累加值是否超出范围
 * */ 
var reverse = function (x) {
    let pop = 0
    let rev = 0
    let int_max = Math.pow(2,31) - 1
    let int_min = -Math.pow(2,31)
    while(x != 0){
        pop = x % 10
        x = parseInt(x / 10)
        if(rev > parseInt(int_max/10) || (rev === parseInt(int_max/10) && pop > 7)) return 0
        if(rev < parseInt(int_min/10) || (rev === parseInt(int_min/10) && pop < -8)) return 0
        rev = rev * 10 + pop
    }
    return rev
}