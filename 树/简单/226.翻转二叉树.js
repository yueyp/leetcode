/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
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
 * @return {TreeNode}
 * 方法一：递归，如果是null则返回到null，然后将翻转后的左子树赋给右子树，将翻转后的右子树赋给左子树
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
};

const invertTree = (root) => {
    if (root == null) { // 遍历到null节点时，不用翻转，直接返回它本身
      return root;
    }
    invertTree(root.left);
    invertTree(root.right);
  
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
  
    return root;
  };


  const invertTree = (root) => {
    if (root == null) {
      return root;
    }
    const queue = [root];   // 维护一个队列，初始推入第一层的root
    
    while (queue.length) {
      const cur = queue.shift(); // 出列的节点
      [cur.left, cur.right] = [cur.right, cur.left]; // 交换左右子树
  
      if (cur.left) {            // 作为下一层节点入列考察
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    return root;
  };
// @lc code=end

