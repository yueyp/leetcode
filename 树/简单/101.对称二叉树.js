/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    // 递归判断左子树和右子树
    return isMirror(root, root)
};

var isMirror = function (t1, t2) {
    // 都不存在，则相等
    if (!t1 && !t2) return true
    // 任一不存在，则不等
    if (!t1 || !t2) return false
    return (
        // 判断当前值是否相等，然后再递归判断子树是否相等
        t1.val === t2.val && isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
    )
}

