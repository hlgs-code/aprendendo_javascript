/*

Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.

To illustrate:

123

We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
Examples

reverseAndNot(123) ➞ 321123

reverseAndNot(123456789) ➞ 987654321123456789

Notes

N/A

*/

function reverseAndNot(i) {

    return Number(i.toString().split('').reverse().join('') + i)
	
}

console.log(reverseAndNot(123))

console.log(reverseAndNot(123456789))
