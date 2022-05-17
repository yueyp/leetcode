/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
// 按照访问左子树——右子树——根节点的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树
var postorderTraversal = function(root) {
    let arr = []
    if(!root) return arr
    arr.push(...postorderTraversal(root.left))
    arr.push(...postorderTraversal(root.right))
    arr.push(root.val)
    return arr
};

// 迭代
var postorderTraversal = function(root){
    const res = []
    // 保存当前的节点
    const stk = []
    while(root || stk.length){
        while(root){
            stk.push(root)
            // 将当前节点的值保存起来
            res.push(root.val)
            // 然后不停的往右子树走，直到走到底
            root = root.right
        }
        // 右子树走到底之后就把最后保存的节点弹出来，开始走左子树
        root = stk.pop()
        root = root.left
    }
    // 通过以上操作得到的结果是根节点-右节点-左节点，将其反转过来即是后序遍历的值
    return res.reverse()
}

