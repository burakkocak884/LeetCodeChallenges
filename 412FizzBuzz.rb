=begin
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
=end
            def fizz_buzz(n)
                a=*(1..n).map do |num|
                    if num % 15 === 0
                        num = "FizzBuzz"
                    elsif num % 5 === 0 
                        num = "Buzz"
                    elsif num % 3 === 0
                        num = "Fizz"
                    else
                        num.to_s
                    end
                    
                    
                end
                return a
            end