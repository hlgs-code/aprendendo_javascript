/*
The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:

    For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
    If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
    When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
    Repeat until the number of interest is found.

Look at example below for the steps to do for to establish the Recamán Index of number 2:

Sequence = [0]

Last - Length = 0 - 1 = -1 (lower than zero)
Last + Length = 0 + 1 = 1

Sequence = [0, 1]

Last - Length = 1 - 2 = -1 (lower than 0)
Last + Length = 1 + 2 = 3

Sequence = [0, 1, 3]

Last - Length = 3 - 3 = 0 (already present in sequence)
Last + Length = 3 + 3 = 6

Sequence = [0, 1, 3, 6]

Last - Length = 6 - 4 = 2 (greater than 0 and not already in sequence)

Sequence = [0, 1, 3, 6, 2]

// The Recaman Index of 2 is: 4

Given a positive integer n, implement a function that returns its Recamán Index.
Examples

recamanIndex(2) ➞ 4

recamanIndex(3) ➞ 2

recamanIndex(7) ➞ 5

Notes

    The sequence starts always with 0.
    The step with the subtraction Last Element - Sequence Length (verifying that is not already present in the sequence) has the precedence over the second step.
    Remember: if the number to add is the result of a subtraction it can't be already in the sequence (first step), if it is the result of an addition it can be already present (second step).
    Curiosity: the first number to repeat in the sequence is 42...
    Curiosity: the first number with a BIG delay in the sequence is 19.

*/

function recamanIndex(entrada){
    let lista = [0]
    let saida = 0
    let cont = 0

    if (entrada === 0) {
        saida = 0
    } else {

        while (!saida){

            recebeDiferenca = lista[cont] - lista.length
            recebeSoma = lista[cont] + lista.length
             
            if((recebeDiferenca) > 0 && !(lista.indexOf(recebeDiferenca) >= 0)){
                lista.push(recebeDiferenca)
                cont ++
            } else if (!(recebeSoma in lista)){
                lista.push(recebeSoma)
                cont ++
            }
            if (entrada == lista[cont]){
                saida = 1
            }

        }

    }
    
    return lista.indexOf(entrada)
}




console.log(recamanIndex(20))// 7)

console.log(recamanIndex(56))// 204)

console.log(recamanIndex(100))// 387)

console.log(recamanIndex(666))// 2292)

console.log(recamanIndex(1000))// 4419)

console.log(recamanIndex(10000))// 7215)

console.log(recamanIndex(2))

console.log(recamanIndex(3))

console.log(recamanIndex(7))















