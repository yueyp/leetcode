/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
   叶子节点 是指没有子节点的节点。
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
/*
若当前节点就是叶子节点，那么我们直接判断 sum 是否等于 val 即可
（因为路径和已经确定，就是当前节点的值，我们只需要判断该路径和是否满足条件）。
若当前节点不是叶子节点，我们只需要递归地询问它的子节点是否能满足条件即可
*/ 
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    if(!root.left && !root.right){
        return targetSum === root.val
    }
    return hasPathSum(root.left,targetSum-root.val) || hasPathSum(root.right,targetSum-root.val)
};

// @lc code=end

