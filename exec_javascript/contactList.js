/*
Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).
Examples

sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Erdos (ER) > Euler (EU)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []

Notes

    An array with a single name should be trivially returned.
    An empty array, or an input of null or undefined should return an empty array.
*/


function sortContacts(names, sort) {
    if (names == null || names == undefined){
        names = []
    }
    let newArray = names.map(e => e.split(' ').reverse().join(' ')).sort().map(e => e.split(' ').reverse().join(' '))
	if (sort == "DESC"){
        newArray = newArray.reverse()
    }
    return newArray
}



console.log(sortContacts([
    "John Locke",
    "Thomas Aquinas",
    "David Hume",
    "Rene Descartes"
  ], "ASC"))


console.log(sortContacts([
    "Paul Erdos",
    "Leonhard Euler",
    "Carl Gauss"
  ], "DESC"))



console.log(sortContacts([], "DESC"))

console.log(sortContacts(undefined, "DESC"))

console.log(sortContacts(null, "DESC"))


