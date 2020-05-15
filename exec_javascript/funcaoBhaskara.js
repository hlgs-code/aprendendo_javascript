/*
07) ​ Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.
*/

function calculoBhaskara(a, b, c) {
    let saida, x1, x2
    let delta = (b**2)-4*a*c 

    if (delta < 0){
        saida = 'Delta é negativo'
    } else {

        raizDelta = Math.sqrt(delta)

        x1 = ((-b + raizDelta)/(2*a)).toFixed(2)
        x2 = ((-b - raizDelta)/(2*a)).toFixed(2)

        saida = [x1, x2]
    }

    return saida
}

console.log(calculoBhaskara(3, -7, 4))

console.log(calculoBhaskara(9, -12, 4))

console.log(calculoBhaskara(5, 3, 5))