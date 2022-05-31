/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let str = ''
    // 如果输入数字小于等于0，则返回空字符串
    if(columnNumber <= 0){
        return str
    }else if(columnNumber <= 26){
        // 若小于等于26，则直接通过编码转为字符，A的编码为65
        return String.fromCharCode(columnNumber + 64)
    }else{
        // 除以26取余数
        let num = columnNumber % 26
        // 除以26取商
        let num1 = parseInt(columnNumber / 26)
        // 余数为0，则代表能被26整除，说明最后一个字符为'Z'
        if(num === 0){
            // 余数为0，则商也会是整数，若商大于27，则需要继续对商进行求值
            if(num1 > 27){
                str += convertToTitle(num1)
                str += 'Z'
            }else{
                // 若商小于27，则直接根据编码转为字符，比如56，则商为2，所以第一个字符应该为2-1+64，输出AZ
                str = String.fromCharCode(num1 + 63) + 'Z'
            }
        }else{
            // 余数不为0，则商必有小数，商大于26的话，则需要对商继续进行取值
            if(num1 > 26){
                str += convertToTitle(num1)
                // 余数为最后一个字符
                str += String.fromCharCode(num + 64)
            }else{
                // 商若小于等于26，则对编码进行转换
                str += String.fromCharCode(parseInt(num1) + 64)
                str += String.fromCharCode(num + 64)
            }
        }
        return str
    }
};

/**
 * 这是一道从 11 开始的的 2626 进制转换题。

对于一般性的进制转换题目，只需要不断地对 columnNumbercolumnNumber 进行 % 运算取得最后一位，然后对 columnNumbercolumnNumber 进行 / 运算，将已经取得的位数去掉，直到 columnNumbercolumnNumber 为 00 即可。

一般性的进制转换题目无须进行额外操作，是因为我们是在「每一位数值范围在 [0,x)[0,x)」的前提下进行「逢 xx 进一」。

但本题需要我们将从 11 开始，因此在执行「进制转换」操作前，我们需要先对 columnNumbercolumnNumber 执行减一操作，从而实现整体偏移
 */
var convertToTitle = function(columnNumber) {
    let str = ''
    while(columnNumber > 0){
        --columnNumber
        str = String.fromCharCode(columnNumber % 26 + 64) + str
        columnNumber = parseInt(columnNumber / 26)
    }
}
console.log(convertToTitle(28))
// @lc code=end

