/**
 * 最长公共前缀编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 * */

// 保存数组第一项的字符串，遍历该字符串，然后再循环判断数组剩下的每一项，若数组的每一项的该索引处都为该字符，则保存下来。遇到不相等的则循环结束
var longestCommonPrefix = function (strs) {
    let obj = strs[0] || []
    let commonStr = ''
    for (let i = 0; i < obj.length; i++) {
        let j
        for (j = 1; j < strs.length; j++) {
            if (obj[i] !== strs[j][i]) break
        }
        if (j === strs.length) {
            commonStr += obj[i]
        } else {
            break
        }
    }
    return commonStr
}

/**
 * 如果传入的数组长度为0，则返回空字符串。保存数组第一项作为公共前缀，循环数组的剩余项，判断数组项的开头是否包含公共前缀，若不包含，
 * 则将公共前缀去掉最后一个字符，继续循环判断，直至公共前缀的长度为0。
 * */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.length === 0) break
        }
    }
    return prefix
}