// com promise...

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let conteudo = ''
    
            res.on('data', dados => {
                conteudo += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(conteudo))                    
                } catch(e) {
                    reject(e)
                }
            })
        })

    })
}


// Recurso do ES8

let obterAlunos = async () => {
    const turmA = await getTurma('A')
    const turmB = await getTurma('B')
    const turmC = await getTurma('C')
    return [].concat(turmA, turmB, turmC)

}//retorna um objeto AsyncFunction

obterAlunos().then(alunos => alunos.map(a => a.nome)).then(nomes => console.log(nomes))
