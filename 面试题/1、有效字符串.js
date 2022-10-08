/**
 * 有效的括号
 *  给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。
    注意空字符串可被认为是有效字符串
 * */

/**
 * 先排除肯定是无效字符串的情况：为空，字符长度为奇数，或者第一个字符串为右括号。然后新增一个数组，遍历字符串
 * 若当前字符为左括号则放到数组中去，如果是右括号，则将其与数组最后一项匹配，若能匹配上，则删除
 * 数组最后一项，遍历完成后，若数组为空，则代表该字符串为有效字符串，反之，无效
 * */
 var isValid = function (s) {
    if (!s) return true
    const obj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    if (s % 2 !== 0 && !Object.keys(obj).includes(s[0])) return false
    const values = []
    for (let i = 0; i < s.length; i++) {
        if (obj[values[values.length - 1]] === s[i]) {
            values.pop()
        } else {
            values.push(s[i])
        }
    }
    return !values.length
}


/**
 * 查找字符串中是否有成对括号，有则将其替换为空字符串，然后继续再替换后的字符串中查找，直至找不到成对的括号
 * 则返回字符串的长度，长度为0则为有效字符串，反之无效。
 * */ 
var isValid = function (s) {
    if (s.indexOf("()") !== -1 || s.indexOf("[]") !== -1 || s.indexOf("{}") !== -1) {
        return isInValid(s.replace("()", "").replace("{}", "").replace("[]", ""))
    } else {
        return s === ""
    }
}