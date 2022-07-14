/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

    实现 MyQueue 类：

    void push(int x) 将元素 x 推到队列的末尾
    int pop() 从队列的开头移除并返回元素
    int peek() 返回队列开头的元素
    boolean empty() 如果队列为空，返回 true ；否则，返回 false
 */

// @lc code=start

// 栈：先进后出，队列：先进先出
var MyQueue = function() {
    this.front = null
};

/** 
 * @param {number} x
 * @return {void}
 * 队列后进来的后出去，栈先进来的后出去，所以需要把后进来的数据放到栈底
 * 若队列1是空的，则把x直接放进去，如果它不是空的，需要把它放到栈的最底部，
 * 则把s1中的都pop出去，然后把x放进s2，再把s2中的pop出来放进s1，这样就能保证后进来的在栈底，后出去
 */
MyQueue.prototype.push = function(x) {
    if(s1.empty()){
        s1.push(x)
    }
    while(!s1.empty()){
        s2.push(s1.pop())
    }
    s2.push(x)
    while(!s2.empty()){
        s1.push(s2.pop())
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    s1.pop()
    while(!s1.empty()){
        front = s1.peek()
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return front
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return s1.isEmpty()
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

