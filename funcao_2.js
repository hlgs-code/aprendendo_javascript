// Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) { 
    console.log(a+b)

 }

 imprimirSoma(4,6)

 // Armazenando uma função arrow em uma variavel

 const soma = (a, b) => {

    return a+b

 }

 console.log(soma(6, 7))

 //retorno implicito
 const subtracao = (a, b) => a-b

 console.log(subtracao(3, 5))