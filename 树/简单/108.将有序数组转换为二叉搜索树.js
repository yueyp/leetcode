/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
   高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 二叉搜索树的中序遍历是升序序列，左子树节点的值总是小于根节点的值，右子树节点的值总是大于根节点的值
var sortedArrayToBST = function (nums) {
    // 将闭区间 [low, high] 中的元素转化成 BST，返回根节点
    let build = (low, high) => {
        // 区间为空
        if (low < high) return null
        let mid = low + (high - low) >> 1
        // 构造根节点，BST 节点左小右大，中间的元素就是根节点
        return new TreeNode(nums[mid], build(low, mid - 1), build(mid + 1, high))
    }
    return build(0, nums.length - 1)
}

