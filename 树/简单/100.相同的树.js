/*
给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // 若当前树节点都存在
    if (p && q) {
        // 当前节点的值不相等，则树不相等
        if (p.val !== q.val) return false;
        // 递归判断当前树节点的左子树是否相等，不相等，则树不相等
        if (!isSameTree(p.left, q.left)) return false;
        // 递归判断当前树节点的右子树是否相等，不相等，则树不相等
        if (!isSameTree(p.right, q.right)) return false;
    } else if (!q && p) {
        // 两节点中，一节点存在，一节点不存在，则树不相等
        return false;
    } else if (q && !p) {
        // 两节点中，一节点存在，一节点不存在，则树不相等
        return false;
    }
    // 递归结束，则说明不存在不相等的节点，则树相等
    return true;
};