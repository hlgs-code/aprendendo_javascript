const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const filtraPais = e => e.pais == 'China'
const filtraMulher = e => e.genero == 'F'
const filtrarMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data

    console.log(funcionarios.filter(filtraPais).filter(filtraMulher).reduce(filtrarMenorSalario))
})

