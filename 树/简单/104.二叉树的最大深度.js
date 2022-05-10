/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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

var maxDepth = function (root) {
    // 节点为空时说明高度为 0，所以返回 0
    if (!root) {
        return 0
    } else {
        //节点不为空时则分别求左右子树的高度的最大值，同时加1表示当前节点的高度，返回该数值 
        let depth__left = maxDepth(root.left)
        let depth__right = maxDepth(root.right)
        return Math.max(depth__left, depth__right) + 1
    }
};

