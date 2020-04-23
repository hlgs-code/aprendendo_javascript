/*
10) ​ Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

const ehdivisivelPor3 = (entrada) => entrada % 3 == 0 ? true : false

console.log(ehdivisivelPor3(25))
console.log(ehdivisivelPor3(2))
console.log(ehdivisivelPor3(9))
console.log(ehdivisivelPor3(81))