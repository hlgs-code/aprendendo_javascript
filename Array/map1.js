const nums = [1, 2, 3, 4, 5]

let resultado = nums.map(e => e * 2)

console.log(resultado)



// maps sucessivos

const soma10 = e => e + 10
const triplo = e => e * 3
const paradinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paradinheiro)
console.log(resultado)