/*
Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
*/
var findDuplicate = function(nums) {
    nums = nums.sort()
     for(let i = 0; i< nums.length; i++){
     if(nums[i] === nums[i+1]){
         return nums[i]
     }
 }
};