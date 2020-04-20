/*
Write a function that returns the position of the second occurrence of "zip" in a string, or -1 if it does not occur at least twice. 
Your code should be general enough to pass every possible case where "zip" can occur in a string.
Examples

findZip("all zip files are zipped") ➞ 18

findZip("all zip files are compressed") ➞ -1

Notes

Uppercase "Zip" is not the same as lowercase "zip".
*/

function findZip(entrada){

    let primeiraPosicao = entrada.indexOf('zip')
    let segundaPosicao = entrada.indexOf('zip', primeiraPosicao + 2)

    return segundaPosicao


}

console.log(findZip("all zip files are zipped"))

console.log(findZip("all hugo files are compressed"))