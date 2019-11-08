/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.

*/

        var romanToInt = function(s) {
            s = s.split('')
        let result = 0;
            let hash = {'I': 1,'V':5 ,'X':10 , 'L':50 ,'C':100 , 'D':500 ,'M': 1000}
            for(let i = 0 ; i < s.length ; i ++){
                    if(s[i] === 'I' && s[i+1] === 'V') {
                            result -= 2
                    }else if (s[i] === 'I' && s[i+1] === 'X'){
                                result -= 2
                    }else if(s[i] === 'X' && s[i+1] === 'L'){
                            result -= 20
                    }else if (s[i] === 'X' && s[i+1] === 'C'){
                                        result -= 20
                    }else if(s[i] === 'C' && s[i+1] === 'D'){
                                            result -= 200
                    }else if(s[i] === 'C' && s[i+1] === 'M'){
                            result -= 200
                        
                            }
                
                result += hash[s[i]]
            }
            return result
        };