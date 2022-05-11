/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
/*
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const ret = getDepth(root)
    if (ret >= 0) return true
    return false
};

var getDepth = function (root) {
    // 如果节点不存在了，则返回0
    if (!root) {
        return 0
    } else {
        // 获取左子树的高度
        const left = getDepth(root.left)
        // 获取右子树的高度
        const right = getDepth(rooot.right)
        // 短路机制，有一个子树不满足条件就直接返回
        if (left < 0 || right < 0) return -1
        // 左右子树高度相差大于1，则返回-1
        if (Math.abs(left - right) > 1) {
            return -1
        } else {
            // 否则返回两者最大值加一
            return Math.max(left, right) + 1
        }
    }
}
// @lc code=end

