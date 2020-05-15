/*
Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.
Examples

sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2

Notes

The input of the function is at least one number.
*/

function sumDigProd() {
    let soma = 0
    let calc
    for (i in arguments){
        soma += arguments[i]
    }
    while (soma > 9){
        calc = soma.toString().split('')
        soma = 1
        for (i in calc){
            soma *= calc[i]
        }
    }
    return soma	
}

console.log(sumDigProd(0))

console.log(sumDigProd(1, 2, 3, 4, 5, 6))

/*

Outra forma de fazer:

let prod = n => n < 10 ? n : prod(+String(n).split('').reduce((a,b)=>a*b));
let sumDigProd = (...arr) => prod(arr.reduce((a,b)=>a+b));

*/