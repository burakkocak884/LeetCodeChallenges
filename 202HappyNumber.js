/*
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/
var isHappy = function(n) {
    let number = n
    let sqSum = 0;
    for(let i = 0 ;i < 50; i++){
        
        sqSum = 0;
            while(number){
                 let digit =  number % 10  
                number = Math.floor(number/10)
                sqSum += digit**2 
                  }
        if(sqSum === 1){
            return true;
        }else{
            number = sqSum
        }
     }  
    return false
};