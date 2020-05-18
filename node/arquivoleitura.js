const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)


//assincrono

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)

})

//forma mais facil de acessar um objeto no formato de json

const config = require('./arquivo.json')
console.log(config.db)

//Exibir um conteudo de um diretorio

fs.readdir(__dirname, (err, arquivo) => {
    console.log('Conteudo da pasta...')
    console.log(arquivo)

})