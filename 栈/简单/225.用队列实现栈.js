/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 * 请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（push、top、pop 和 empty）。
 */

// @lc code=start
/*
队列：先进先出；栈：先进后出
用数组来模拟队列
push入队
shift出队
*/ 
var MyStack = function() {
    this.q1 = []
    this.q2 = []
};

/** 
 * @param {number} x
 * @return {void}
 * 将先入栈的元素放入q2中，然后遍历q1,让q1的依次出队，再依次入q2，则q2中后入队的在前面，再将q1和q2互换
 */
MyStack.prototype.push = function(x) {
    this.q2.push(x)
    while(this.q1.length){
        this.q2.push(this.q1.shift())
    }
    let temp = []
    this.q1 = temp
    this.q1 = this.q2
    this.q2 = temp
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.q1.length

};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end


// @lc code=start
/*
方法二，用一个队列实现栈
*/ 
var MyStack = function() {
    this.q1 = []
};

/** 
 * @param {number} x
 * @return {void}
 * 将入栈的元素放入队列，在将它前面的元素都出队，再重新入队
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
    let len = this.q1.length - 1
    while(len){
        this.q1.push(this.q1.shift())
        len --
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift()
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0]

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.q1.length

};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

