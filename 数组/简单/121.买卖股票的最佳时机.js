/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力法，超出时间限制，假设今天买入，则计算后面每一天卖出的利润，求最大值。
var maxProfit = function (prices) {
    let maxProfit = 0
    // 假设第i天买入
    for (let i = 0; i < prices.length - 1; i++) {
        // 假设第j天卖出，找寻最大利润
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] - prices[i] > maxProfit) {
                maxProfit = sellPrice
            }
        }
    }
    return maxProfit
};

// 历史最低点买入，然后找个最高点卖出则利润最大
var maxProfit = function (prices) {
    let minPrice = Number.MAX_SAFE_INTEGER
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        // 若当前的价格比最小值小，则将当前值赋值给最小值
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > maxProfit) {
            // 若当前价格比最小值大，则计算它与最小值的差值是否大于之前计算出来的最大利润，若大于，则将其赋值给最大利润
            maxProfit = prices[i] - minPrice
        }
    }
    return maxProfit
};

console.log(maxProfit([7, 6, 5, 4, 3, 2, 1]))
console.log(maxProfit([7, 1, 5, 3, 6, 4])) 1, 3, 4, 5, 6, 7
// @lc code=end

