/**
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
 * 输入为 非空 字符串且只包含数字 1 和 0。
 * 示例:
 * 输入: a = "11", b = "1"
   输出: "100" 
   输入: a = "1010", b = "1011"
   输出: "10101"
 **/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 方法一,执行用时68ms,内存消耗42.5MB
var addBinary = function (a, b) {
    let len1 = a.length
    let len2 = b.length
    // 将俩字符串以高位补0的形式变成一样长
    if(len1 > len2){
        b = '0'.repeat(len1 - len2) + b
    }else{
        a = '0'.repeat(len2 - len1) + a
        // len1保存较长字符串的长度
        len1 = len2
    }
    let carryBit = 0
    let str = ''
    for (let i = len1 - 1; i >= 0; i--) {
        // 从末尾开始循环相加
        let res = +a[i] + +b[i] + carryBit
        // 相加之和大于2,则需要进位,当前值为当前值-2
        if (res >= 2) {
            str = res - 2 + str
            carryBit = 1
        } else {
            // 相加之和小于2,则进位为0,和即为当前值
            str = res + str
            carryBit = 0
        }
    }
    // 循环结束后若存在进位,则需要高位补1
    return carryBit ? (1 + str) : str
};

// 先将十进制转为二进制相加,然后再转为二进制,由于js有最大数限制,所以该方法仅限于数值较小的相加
var addBinary = function (a, b) {
    a = parseInt(a, 2)
    b = parseInt(b, 2)
    let res = a + b
    return res.toString(2)
};

// 方法一,执行用时72ms,内存消耗42.3MB
var addBinary = function (a, b) {
    let ans = ""
    let ca = 0
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        //   将上次进位赋值为此次相加的和
        let sum = ca
        //  若a[i]存在,则将其与当前和相加
        sum += i >= 0 ? parseInt(a[i]) : 0
        //  若b[j]存在,则将其与当前和相加
        sum += j >= 0 ? parseInt(b[j]) : 0
        // 保存当前的和
        ans = sum % 2 + ans
        // 获取此次相加的进位
        ca = Math.floor(sum / 2)
    }
    // 循环结束后若存在进位,则需要高位补1
    ans = ca === 1 ? "1" + ans : ans
    return ans
};

console.log(addBinary('1', '111'))
console.log(addBinary('11', '1'))
console.log(addBinary('1010', '1011'))
