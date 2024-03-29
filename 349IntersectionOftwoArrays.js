/*
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
*/

var intersection = function(nums1, nums2) {
    let obj = {};
   let result = [];
    for(let i of nums1){
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    for(let i of nums2){
        if(obj[i]){
            obj[i]--
            result.push(i)
        }
    }
    return result
};