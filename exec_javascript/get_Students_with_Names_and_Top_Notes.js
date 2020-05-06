/*

Create a function that takes an array of objects like { name: 'John', notes: [3, 5, 4]} and returns an array of objects like { name: "John", topNote: 5 }.

If student has no notes (an empty array) then let's assume topNote: 0.
Examples

[
  { name: "John", notes: [3, 5, 4]}
] ➞ [
  { name: "John", topNote: 5}
]

Notes

Try doing it with an arrow function.

*/

function maiorNota(info_entrad){

    var saida = []

    for (info in info_entrad){

        var saida2 = {}

        saida2.name = info_entrad[info].name

        if (info_entrad[info].notes.length == 0 ){
            saida2.topNote = 0
        } else {
            saida2.topNote = Math.max(...info_entrad[info].notes)
        }
        saida.push(saida2)
    }

    return saida

}

info = [{ name: "Ledilson", notes: []}, { name: "John", notes: [3, 5, 4]}, { name: "Hugo", notes: [5, 6, 7]}, { name: "Sheyla", notes: [8, 9, 10]}]
console.log(maiorNota(info))
