/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
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
 * @param {number} val
 * @return {ListNode}
 */
/* 方法一：迭代 
用 temp 表示当前节点。如果 temp 的下一个节点不为空且下一个节点的节点值等于给定的 val
则需要删除下一个节点。删除下一个节点可以通过以下做法实现：temp.next = temp.next.next
如果 temp 的下一个节点的节点值不等于给定的val，则保留下一个节点，将temp 移动到下一个节点即可。
当temp 的下一个节点为空时，链表遍历结束，此时所有节点值等于val 的节点都被删除。
具体实现方面，由于链表的头节点head 有可能需要被删除，因此创建哑节点dummyHead，令 dummyHead.next=head，初始化 temp=dummyHead，然后遍历链表进行删除操作。
最终返回dummyHead.next 即为删除操作后的头节点。
*/
var removeElements = function (head, val) {
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null) {
        if (temp.next.val == val) {
            temp.next = temp.next.next;
        } else {
            temp = temp.next;
        }
    }
    return dummyHead.next;
};

/*
 方法二： 递归
递归的终止条件是head 为空，此时直接返回head。当head 不为空时，递归地进行删除操作，然后判断head 的
节点值是否等于val 并决定是否要删除head。
*/
var removeElements = function (head, val) {
    if (head === null) {
        return head;
    }
    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};

// @lc code=end

