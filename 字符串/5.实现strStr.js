/**
 * 实现 strStr()
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle
 * 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。 
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 方法一,直接利用字符串方法indexOf
var strStr = function (haystack, needle) {
    return haystack.search(needle)
    // return haystack.indexOf(needle);
};

/**
 * 将两字符串直接做比较，若相等，则返回0。
 * 循环haystack字符串，从当前索引开始截取长度为needle长度的字符串，判断该字符串与needle字符串
 * 是否相等，若相等则返回当前索引。
 * 不存在，则返回-1
 */ 
var strStr = function (haystack, needle) {
    if(haystack === needle) return 0
    let len = needle.length
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, len+i) === needle) return i
    }
    return -1
};
