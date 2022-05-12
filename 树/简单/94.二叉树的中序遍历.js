/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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
// 按照访问左子树——根节点——右子树的方式遍历这棵树，而在访问左子树或者右子树的时候我们按照同样的方式遍历，直到遍历完整棵树
var inorderTraversal = function (root) {
    let arr = []
    if (root) {
        root.left && arr.push(...inorderTraversal(root.left))
        arr.push(root.val)
        root.right && arr.push(...inorderTraversal(root.right))
    }
    return arr
}

/*
迭代
递归的调用过程是不断往左边走，当左边走不下去了，就打印节点，并转向右边，然后右边继续这个过程。
我们在迭代实现时，就可以用栈来模拟上面的调用过程。
*/ 
var inorderTraversal = function (root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        //不断往左子树方向走，每走一次就将当前节点保存到栈中
        //这是模拟递归的调用
        while (root) {
            stk.push(root);
            root = root.left;
        }
        //当前节点为空，说明左边走到头了，从栈中弹出节点并保存
        //然后转向右边节点，继续上面整个过程
        root = stk.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;
}

