/**
 * 将罗马数字转为数字
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
 *      字符          数值
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
    I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
    X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
    C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
*/
// 一一列出
var romanToInt = function (s) {
    let num = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I' && s[i+1] === 'V'){
            num += 4
            i++
        }else if(s[i] === 'I' && s[i+1] === 'X'){
            num += 9
            i++
        }else if(s[i] === 'I'){
            num += 1
        }else if(s[i] === 'V'){
            num += 5
        }else if(s[i] === 'X' && s[i+1] === 'L'){
            num += 40
            i++
        }else if(s[i] === 'X' && s[i+1] === 'C'){
            num += 90
            i++
        }else if(s[i] === 'X'){
            num += 10
        }else if(s[i] === 'L'){
            num += 50
        }else if(s[i] === 'C' && s[i+1] === 'D'){
            num += 400
            i++
        }else if(s[i] === 'C' && s[i+1] === 'M'){
            num += 900
            i++
        }else if(s[i] === 'C'){
            num += 100
        }else if(s[i] === 'D'){
            num += 500
        }else if(s[i] === 'M'){
            num += 1000
        }
    }
    return num
}

// 正常情况下，高位的数应该比低位大，若高位的数比低位的小，则说明是特殊情况，应该相减
var romanToInt = function (s) {
    let obj = {
        "I": 1,
        "V": 5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    let num = 0
    for (let i = 0; i < s.length; i++) {
        obj[s[i]] < obj[s[i+1]] ? num -= obj[s[i]] : num += obj[s[i]]
        return num
    }
}