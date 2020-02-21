
function tratarErroElancar(erro) {
    throw new Error('eu vou resolver!')
}

function imprimirNomeGritando(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Hugo'}
imprimirNomeGritando(obj)
