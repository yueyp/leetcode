/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 * 给你一个链表的头节点 head ，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。

如果链表中存在环 ，则返回 true 。 否则，返回 false 。
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
 * @param {ListNode} head
 * @return {boolean}
 */
// 方法一： 执行用时68ms,内存消耗45MB，同样也可以使用对象和数组来实现该方法
var hasCycle = function(head) {
    // 使用map保存当前遍历到的节点
    const map = new Map()
    while(head){
        // 若当前节点不存在，则保存起来，指针指向下一节点
        if(!map.get(head)){
            map.set(head,true)
            head = head.next
        }else{
            // 若节点存在，则说明又一次被遍历了，则说明是环形链表
            return true
        }
    }
    return false
};

// 方法二：执行用时172ms,内存消耗45.2MB
var hasCycle = function(head){
    try{
        // JSON.stringify处理循环引用的结构会报错，利用该特性就可以判断是否是环形链表
        JSON.stringify(head)
        return false
    }catch(e){
        return true
    }
}

// 方法三：执行用时84ms,内存消耗43.7MB
var hasCycle = function(head){
    while(head && head.next){
        // 在当前遍历过的节点上加一个flag属性，若遍历到的节点已经存在该属性，则说明是环形链表
        if(!head.flag){
            head.flag = 1
            head = head.next
        }else{
            return true
        }
    }
    return false
}
// @lc code=end

