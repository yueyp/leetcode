/*
    外观数列
    「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
    1.     1
    2.     11
    3.     21
    4.     1211
    5.     111221
    6.     312211
    1 被读作  "one 1"  ("一个一") , 即 11。
    11 被读作 "two 1s" ("两个一"）, 即 21。
    21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。

    给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

    注意：整数序列中的每一项将表示为一个字符串。
*/

/**
 * @param {number} n
 * @return {string}
 */
// 方法一:执行用时60ms,内存消耗43.8MB
var countAndSay = function (n) {
    // 记录当前项的值
    let lastNumber = '1'
    // 从第二项开始读取
    for (let i = 1; i < n; i++) {
        // 当前项的索引
        let currentIndex = 0
        // 读取结果
        let str = ''
        // 循环当前项
        for (let j = 0; j < lastNumber.length; j++) {
            // 如果下一个数字不等于当前数字，则可以读取当前数字的个数，并保存起来
            if (lastNumber[j + 1] !== lastNumber[j]) {
                str += `${j - currentIndex + 1}${lastNumber[j]}`
                currentIndex = j + 1
            }
        }
        // 读取结果赋值给当前项，即为下一次读取初始值
        lastNumber = str
    }
    return lastNumber
}

// 方法二:执行用时208ms,内存消耗47.8MB
// \d表示匹配数字,g表示全局匹配, 如:"1aa11aa111".replace(/\d/g,6) 返回的是"6aa66aa666",就是找出所有数字,并替换成6; 
// \1表示匹配的是 所获取的第1个()匹配的引用, 如"1a11aa221".replace(/(\d)\1/g,6), 返回的是"1a6aa61",匹配了"11"和"22"; 
// *表示匹配{0,无穷大}次,\1*就是表示\1可以出现0次或者更多次, 如"1a11aa221".replace(/(\d)\1*/g,6), 返回的是"6a6aa66",匹配了1,11,22,1; 
// replace用法: 看个例子: "1aa11aa111".replace(/(\d)\1*/g,i => ${i.length}${i[0]}), 返回的是"11aa21aa31",就是1变成1,11变成21,111变成31;replace第二个参数是箭头函数,返回了一个模板字符串
var countAndSay = function (n) {
    let prev = "1";
    for (let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => {
            console.log(item)
            return `${item.length}${item[0]}`
        });
    }
    return prev;
};

// countAndSay(2)
// countAndSay(2)
// countAndSay(3)
// countAndSay(4)
// countAndSay(5)
// console.log(countAndSay(1))
// console.log(countAndSay(2))
// console.log(countAndSay(3))
console.log(countAndSay(4))
// console.log(countAndSay(5))
// console.log(countAndSay(6))