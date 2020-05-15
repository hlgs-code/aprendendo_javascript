/*
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are: 1, 3, 6, 10, 15. Write a function that converts n number of places with its corresponding number.
Examples

triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220

Notes

N/A
*/

function triangle(n) {
	return (n*(n+1))/2
}

console.log(triangle(1))

console.log(triangle(6))

console.log(triangle(215))