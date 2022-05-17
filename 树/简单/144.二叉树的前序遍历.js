/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
// 递归
// 按照访问根节点——左子树——右子树的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树
var preorderTraversal = function(root) {
    let arr = []
    if(!root) return arr
    arr.push(root.val)
    arr.push(...preorderTraversal(root.left))
    arr.push(...preorderTraversal(root.right))
    return arr
};

// 迭代
var preorderTraversal = function(root){
    const res = []
    // 保存当前的节点
    const stk = []
    while(root || stk.length){
        // 不断往左子树走，将当前节点的值保存起来，然后将当前节点保存在栈中
        while(root){
            stk.push(root)
            res.push(root.val)
            root = root.left
        }
        // 当前节点为空，说明左边走到头了，从栈中弹出最后一个节点
        root=stk.pop()
        // 然后走当前节点的右子树
        root = root.right
    }
    return res
}
