
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
*/

        var firstUniqChar = function(s) {
                    let indexNum = 0;
                    let theFirst = s.split("")
                    let hash ={}
                    for (let i = 0 ; i < s.length; i++){
                        if(hash[s[i]]){
                            hash[s[i]] += 1
                        }else{
                            hash[s[i]] = 1
                        }
                   }
                return s.indexOf((Object.keys(hash).find(key =>hash[key] === 1)))
         };