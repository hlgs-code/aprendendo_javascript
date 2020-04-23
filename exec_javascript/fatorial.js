/*
12)​ Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(entrada) {
    let fat = 1, i
    if (entrada == 1 || entrada == 0){
        fat = 1
    } else {
        for ( i = 2; i <= entrada; i++){
            fat = fat * i
        }
    }

    return fat

}

console.log(fatorial(5))
console.log(fatorial(6))
console.log(fatorial(7))
