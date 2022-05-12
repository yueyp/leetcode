/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
 * 给定一个二叉树，找出其最小深度。

   最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

   说明：叶子节点是指没有子节点的节点。
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
 * @return {number}
 */
var minDepth = function(root) {
  // 根节点为null，则最小深度为0
  if(!root) return 0
  // 根节点存在，左右子树不存在，则最小深度为1
  if(!root.left && !root.right) return 1
  // 定义最小深度
  let min = Number.MAX_VALUE
  // 如果左子树存在,则计算左子树的最小深度
  if(root.left !== null){
    min = Math.min(minDepth(root.left),min)
  }
  // 如果右子树存在,则计算右子树的最小深度
  if(root.right !== null){
    min = Math.min(minDepth(root.right),min)
  }
  // 深度为左右子树最小深度加上父节点
  return min + 1
};

var minDepth = function(root) {
  if (root == null) return 0;
  else if (root.left == null) return minDepth(root.right) + 1;
  else if (root.right == null) return minDepth(root.left) + 1;
  else return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};

