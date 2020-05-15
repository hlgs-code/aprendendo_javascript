/*
Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).
Examples

majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null

Notes

    The frequency of the majority element must be strictly greater than 1/2.
    If there is no majority element, return null.
    If the array is empty, return null.

*/

function majorityVote(arr) {
    let saida = {}
    for (i in arr){
        Object.keys(saida).indexOf(arr[i]) < 0 ? saida[arr[i]] = 1 : saida[arr[i]] += 1        
    }
    let maximo = Math.max(...Object.values(saida))
    let qtd = 0
    let guardPos = 0
    for (i in Object.keys(saida)){
        if(saida[Object.keys(saida)[i]]==maximo){
            qtd++
            guardPos = i
        }
    }
    if (qtd == 1){
        maximo = Object.keys(saida)[guardPos]
    }else{
        maximo = null
    }
    return maximo
}

console.log(majorityVote(["A", "A", "B"]))

console.log(majorityVote(["A", "A", "A", "B", "C", "A"]))

console.log(majorityVote(["A", "B", "B", "A", "C", "C"]))

/*

function majorityVote(arr) {
	return [...new Set(arr)]
		.filter(a => arr.filter(b => b === a).length > arr.length/2)
		[0] || null
}

*/