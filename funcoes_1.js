// Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}


imprimirSoma(2, 3)
imprimirSoma(6) //retorna um NAN porém nao reclama
imprimirSoma(6, 8, 9, 0)    //ignora os demais
imprimirSoma() //retorna um NAN porém nao reclama

// funcao com retorno

function soma(a, b = 1){
    return a+b
}

console.log(soma(2, 5))
console.log(soma(5))