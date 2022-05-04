/*
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

示例 1：
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
*/ 

/**
 * @param {number} n
 * @return {number}
 */
// 方法一,执行用时48ms,内存消耗40.7MB，斐波拉契数列，第一项和第二项为1，后面每项为前两项相加之和
 var climbStairs = function(n) {
     let f1 = 1
     let f2 = 1
     for(let i = 2; i <= n; i++){
        let temp = f1 + f2
        f1 = f2
        f2 = temp
     }
     return f2
};

//   方法二：执行用时64ms,内存消耗40.8MB
 var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  };

console.log(climbStairs(4))