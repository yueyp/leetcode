/*
    最后一个单词的长度
    给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

    单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
*/
/**
 * @param {string} s
 * @return {number}
 */
// 方法一,执行用时52ms,内存消耗41MB
var lengthOfLastWord = function(s) {
    // 将字符串以空格分割成数组
    const arr = s.split(" ")
    // 从末尾开始循环数组，找到第一个单词，返回长度
    for(let i = arr.length - 1; i >= 0; i--){
        if(!!arr[i]) return arr[i].length
    }
}

// 方法二,执行用时60ms,内存消耗41.1MB
var lengthOfLastWord = function(s) {
    // 先去掉字符串的，末尾空格
    s = s.replace(/\s*$/g,'')
    let num = 0
    // 从末尾开始循环数组，若找到的是字符，则数量加一，若不是字符，则代表该单词结束，返回数量
    for(let i = s.length - 1; i >= 0; i--){
        if(/[a-zA-Z]/.test(s[i])){
            num++
        } else{
            break
        }
    }
    return num
}

//   方法三
var lengthOfLastWord = function(s) {
    // 去掉末尾的空格
    s = s.replace(/\s*$/g, "");
    // 从后往前找到第一个空格的索引
    let index = s.lastIndexOf(" ");
    // 从该索引截取字符到最后，即为最后一个单词
    s = s.slice(index + 1);
    return s.length;
};

// /(?<=\s)(a-zA-Z)()/
console.log(lengthOfLastWord("Hello World"),1)
console.log(lengthOfLastWord("   fly me   to   the moon  "),2)