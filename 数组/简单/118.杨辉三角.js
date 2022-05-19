/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
   在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 新增数组保存所有的行
    let arr = [[1]]
    // 循环获取第numsRows行
    for(let i = 1; i < numRows; i++){
        // 临时保存当前行
        let arr_temp = []
        // 第n行会有n个数
        for(let j = 0; j <= i; j++){
            //第一个和最后一个都固定为1
            if(j === 0 || j === i){
                arr_temp.push(1)
            }else{
                // 其它的数等于上一行前一索引的数加上当前索引的数
                arr_temp.push(arr[i-1][j-1] + arr[i-1][j])
            }
        }
        // 将当前行保存到数组中
        arr.push(arr_temp)
    }
    return arr
};
var generate = function(numRows) {
    // 新增数组共numRows项
    let arr = new Array(numRows)
    // 第一行为[1]
    arr[0] = [1]
    // 循环获取其它行
    for(let i = 1; i < numRows; i++){
        // 初始化第i行为数组，且第一项为1
        arr[i] = [1]
        // 将前一行进行reduce操作
        arr[i-1].reduce((p,c) => {
            // 后一行的每个值(第一及最后一个值除外)等于前一行的当前值与前一个值相加，然后将当前值作为下次循环的初始值
            arr[i].push(p+c)
            return c
        })
        // 最后一个值固定为1
        arr[i][i] = 1
    }
    return arr
}

console.log(generate(3))
// @lc code=end

