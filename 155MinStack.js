/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

var MinStack = function() {
    this.head = null
    this.tail = null  
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let newNode = new Node(x)
    if (this.head === null){
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head = newNode
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.head !== null && this.tail !== null && this.head === this.tail){
        this.head = null
        this.tail = null
   }else if(this.head === null){
       
   }else{
      this.head = this.head.next
   }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.head){
        return this.head.data
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.head.data
    let currentNode = this.head
    
    while(currentNode){
        if (min > currentNode.data){
            min = currentNode.data          
        }
        currentNode = currentNode.next  
    }
    return min
};

