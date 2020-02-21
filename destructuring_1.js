//recurso novo

const pessoa = {
    nome: 'hugo',
    idade: 6,
    endereco: {
        logradouro: 'tua casa',
        numero: 6655577
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

const {nome: h, idade: u} = pessoa

console.log(h, u)

const {endereco: {logradouro, numero, cep}} = pessoa

console.log(logradouro, numero, cep)


