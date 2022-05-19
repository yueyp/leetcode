/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 */

// @lc code=start
// 栈是先进后出的结构，同时新增一个额外的栈同步保存当前操作后栈中最小的值
var MinStack = function() {
    this.stack = []
    this.min_stack = [Infinity]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // 将元素 x 推入栈中，也就是数组执行push操作
    this.stack.push(val)
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1],val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 删除栈顶的元素，就是将数组的最后一项删除
    this.stack.pop()
    // 同时需要将额外栈中的栈顶元素删除,若当前栈顶元素是栈中最小的，
    // 则额外栈栈顶元素则为该元素，若不是最小的，则额外栈栈顶的元素为之前栈中最小的元素
    this.min_stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // 获取栈顶的元素，就是获取数组的最后一项
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    this.min_stack[this.min_stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


// 方法二：将当前值和当前最小值作为一个数组同时存入栈中
var MinStack = function() {
    this.sk = [[undefined, Infinity]];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.sk.push([val, Math.min(val, this.sk[this.sk.length - 1][1])]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.sk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.sk[this.sk.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sk[this.sk.length - 1][1];
};
