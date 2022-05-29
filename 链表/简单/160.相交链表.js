/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 * 题目数据 保证 整个链式结构中不存在环。
    注意，函数返回结果后，链表必须 保持其原始结构 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 方法一：执行用时276ms,内存消耗48.1MB
var getIntersectionNode = function (headA, headB) {
    // 两个链表任一链表为空，则不是相交链表
    if (!headA || !headB) return null
    // 指针p1指向A链表，指针p2指向B链表
    let p1 = headA
    let p2 = headB
    let map = {}
    // 遍历链表A，将其节点存入数组中
    while (p1) {
        map[p1] = 1
        p1 = p1.next
    }
    // 遍历链表B
    while (p2) {
        // 去数组中找是否有与之相等的节点，有则为相交链表，返回相交节点
        if (map[p2]) {
            return p2
        }
        p2 = p2.next
    }
    return null
};

// 方法二：执行用时80ms,内存消耗49.2MB，同理可以使用set，map是用来保存键值对的，set是用来保存值的（它类似于数组，但是成员的值都是唯一的，没有重复的值）
// map和set区别：https://blog.csdn.net/urser/article/details/122555400
var getIntersectionNode = function (headA, headB) {
    const visited = new Map();
    let temp = headA;
    while (temp !== null) {
        visited.set(temp, 1);
        temp = temp.next;
    }
    temp = headB;
    while (temp !== null) {
        if (visited.has(temp)) {
            return temp;
        }
        temp = temp.next;
    }
    return null;
};

// 方法三：
var getIntersectionNode = function (headA, headB) {
    // 两个链表任一链表为空，则不是相交链表
    if (!headA || !headB) return null
    // pa指针指向A链表
    let pa = headA
    // pb指针指向B链表
    let pb = headB
    /**
     * 假设俩链表相交，headA中不相交的节点有a个，headB中不相交的节点有b个，两个链表相交部分的节点有c个
     * 如果a === b,则pa和pb会同时到达相交节点，则返回相交节点
     * 如果a !== b,则pa和pb会先后遍历完俩链表，然后指针pa会移到headB的头部，指针pb会移到headA的头部，然后俩指针继续移动，
     * 在指针pa移动了a+c+b次，pb移动了b+c+a次之后，两者会同时到达相交节点
     * 
     * 如果两个链表不相交，headA和headB的长度分别为m和n
     * 若m=n，则pa和pb会同时到达两链表的末尾，同时变为null，此时返回null
     * 若m != n，则pa和pb会先后遍历完俩链表，然后指针pa会移动到headB的头部，指针pb会移动到headA的头部，然后俩指针继续移动
     * 在指针pa移动了m+n，pb移动了n+m之后，两者会同时到达两链表的末尾，变为null
     **/ 
    while(pa !== pb){
        pa = pa === null ? headB : pa.next
        pb = pb === null ? headA : pb.next
    }
    return pa
};