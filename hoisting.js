/*console.log('a =', a)
var a = 2   //Ocorreu o hoisting
console.log('a =', a)
*/

function teste() {

    console.log('a =', a)
    var a = 2 // isso nao ocorre com let hoisting
    console.log('a =', a)

}

teste()

