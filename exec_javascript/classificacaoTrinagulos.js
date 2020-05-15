/*
02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).

*/

const verificaTriangulos = function (a, b, c) {
    let saida = ''

    if ( a === b && b === c){
        saida = 'Equilatero'
    }else if (a != b && b != c && c != a){
        saida = 'Escaleno'
    } else {
        saida = 'Isosceles'
    }
    return saida
}

console.log(verificaTriangulos(2,2,2))
console.log(verificaTriangulos(2,2,3))
console.log(verificaTriangulos(3,4,5))
console.log(verificaTriangulos(6,6,6))
console.log(verificaTriangulos(2,4,4))
console.log(verificaTriangulos(9,8,7))