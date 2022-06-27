/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代
 * 1 -> 2 -> 3 -> 4 -> 5
 * 依次挨个翻转，后面一个node指向前一个node
 */
var reverseList = function(head) {
    let prev = new ListNode(null)
    let curr = head
    while(curr !== null){
        let nextTemp = new ListNode(curr.next)
        curr.next = prev
        prev = curr
        curr = nextTemp
    }
    return prev
};

// 方法二：先遍历链表，将他的每个节点存储起来，然后将数组翻转，再一一连接起来
var reverseList = function(head){
    let stack = []
    let l1 = new ListNode(null)
    let p1 = l1
    let p2 = head
    while(p2){
        stack.push(p2.val)
        p2 = p2.next
    }
    stack.reverse().map(v => {
        p1.next = new ListNode(v)
        p1 = p1.next
    })
    return l1.next
}

// @lc code=end

