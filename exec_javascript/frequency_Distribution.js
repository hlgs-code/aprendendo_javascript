/*
Create a function that returns the frequency distribution of an array. This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
Examples

getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }

getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }

getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }

getFrequencies([]) ➞ {}

Notes

    If given an empty array, return an empty object (see example #4).
    The object should be in the same order as in the input array.
*/

function getFrequencies(arr) {

    var dicionario = {}

    arr.forEach( a => {

        if (Object.keys(dicionario).indexOf(a.toString()) == -1){
            dicionario[a] = 1
        } else {
            dicionario[a]++
        }

    });

    return dicionario
        
    }



console.log(getFrequencies(["A", "B", "A", "A", "A"]))

console.log(getFrequencies([1, 2, 3, 3, 2]))

console.log(getFrequencies([true, false, true, false, false]))

console.log(getFrequencies([]))





