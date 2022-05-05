/*
给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表
输入：head = [1,1,2]
输出：[1,2]
*/

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
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var node1 = new ListNode(1);
var node2 = new ListNode(1);
var node3 = new ListNode(2);
var node4 = new ListNode(3);
var node5 = new ListNode(3);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// 方法一,执行用时64ms,内存消耗43MB
var deleteDuplicates = function (head) {
    // cur指向当前节点
    var cur = head;
    // 当前节点不存在或者当前节点的下一个节点不存在，则结束循环
    while (cur && cur.next) {
        // 若当前节点的值与下一个节点的值相等，则将当前节点的下一个节点指向下下个节点，相当于删除原有的下个节点
        if (cur.val == cur.next.val) {
            cur.next = cur.next.next;
        } else {
            // 不相等，则将当前节点指向下一个节点继续循环
            cur = cur.next;
        }
    }
    return head;
};