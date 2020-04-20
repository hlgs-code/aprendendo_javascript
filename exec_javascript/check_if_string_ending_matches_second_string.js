/*
Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
Examples

checkEnding("abc", "bc") ➞ true

checkEnding("abc", "d") ➞ false

checkEnding("samurai", "zi") ➞ false

checkEnding("feminine", "nine") ➞ true

checkEnding("convention", "tio") ➞ false

Notes

All test cases are valid one word strings.


function checkEnding(a, b){
    let saida
    let tamanho = a.length
    let indice = a.lastIndexOf(b)
    if (a.substring(indice, tamanho) === b) {

        saida = true
    } else {

        saida = false
    }
    return saida

}
*/
// Segunda forma de fazer..

function checkEnding(str1, str2) {
    return str1.endsWith(str2);
  }
  

console.log(checkEnding("abc", "bc"))

console.log(checkEnding("abc", "d"))

console.log(checkEnding("samurai", "zi"))

console.log(checkEnding("feminine", "nine"))

console.log(checkEnding("convention", "tio"))


