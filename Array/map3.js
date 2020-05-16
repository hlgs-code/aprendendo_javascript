Array.prototype.map2 = function(callback){
    const newArray = []
    for (i = 0; i < this.length; i++){
       newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapis", "preco": 1.45}',
    '{"nome": "Caneta", "preco": 2.45}',
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

let resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)

resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)
