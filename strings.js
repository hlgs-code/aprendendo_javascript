const escola = "hu34go"

console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(2)) // codigo da tabela ascii
console.log(escola.indexOf('u'))

console.log(escola.substring(1))
console.log(escola.substring(0,2))

console.log('hugo'.concat(escola).concat(2))

console.log('hugo' + escola + 2)

console.log(escola.replace(/\d/g, 'u')) //substitui todas os digitos por u

console.log('hugo,sheyla,tutu,tata'.split(','))
