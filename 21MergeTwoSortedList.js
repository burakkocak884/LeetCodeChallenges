/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/


var mergeTwoLists = function(l1, l2) {
    // console.log(l1.val, l2.val)
     let newNode = new ListNode()
     let current = newNode
     while(l1 && l2 ){
         //console.log(l1, l2)
         if(l1.val > l2.val){
            current.next =  l2
             l2 = l2.next
         }else{
             current.next = l1
             l1 = l1.next
         }
          current = current.next
     }
  
     if(l1 === null){current.next = l2 }
     if(l2 === null){ current.next = l1 }
     return newNode.next
 };