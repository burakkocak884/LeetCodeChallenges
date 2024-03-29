/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function(nums, k) {
    let hash ={}
    for(let num of nums){ hash[num]? hash[num] += 1:hash[num] = 1  }
    return Object.keys(hash).sort((a,b) => hash[b] - hash[a]).slice(0, k)
};
