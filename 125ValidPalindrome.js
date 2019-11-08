/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

var isPalindrome = function(s) {
   
    let regex = /[a-z0-9]/g
    
   
    let matching = s.toLowerCase().match(regex)
    if (s.length <= 1 || !matching){
        return true
    }
     
    return palindrome(matching.join(""))
};

    var palindrome = function(string) {
      
 // base cases
 if (string === '' || string.length === 1) { return true; }
 if (string[0].toLowerCase() !== string.slice(-1).toLowerCase()) { return false; }
 // recursive case
 return palindrome(string.substr(1, string.length - 2));
};