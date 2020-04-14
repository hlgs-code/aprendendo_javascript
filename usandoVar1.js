{ 
    { 
        { 
            { 
                var sera = 'Será??'  //a variavel do tipo "var" continua existindo fora do scopo
            } 
        } 
    }       
}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)

