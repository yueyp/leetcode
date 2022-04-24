/** 
 * 合并两个有序链表
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 示例：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/

/**
 * 新建一个链表用来放置合并后的链表，当l1和l2都不是空链表时，判断哪一个链表的头节点值更小，将较小的节点放到合并链表里，
 * 然后将该链表的指针往后移一位，合并链表的指针也往后移一位。循环该操作，直至两个链表中有一个或者都为空，然后将非空链表
 * 放到合并链表后面
 * */
var mergeTwoLists = function (l1, l2) {
    const prehead = new ListNode(-1)
    let prev = prehead
    while (l1 && l2) {
        if (l1.val < l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    prev.next = l1 ? l1 : l2;
    return prehead.next
}

/**
 *  如果一开始l1或者l2就是空链表，那么则直接返回非空的一个链表即可。否则，我们需要判断l1和l2哪一个链表的头节点的
 *  值更小，然后递归的决定下一个添加到结果里的节点。如果两个链表有一个为空，则结束。
 * */ 
var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
}