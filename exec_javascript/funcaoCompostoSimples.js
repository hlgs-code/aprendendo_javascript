/*
06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

const jurosSimples = (inicial, juros, tempo) => (inicial * (juros/100) * tempo).toFixed(2)

const jurosComposto = (inicial, juros, tempo) => (inicial * (1 + (juros/100))**tempo).toFixed(2)

console.log(jurosSimples(100, 10, 2));
console.log(jurosComposto(100, 10, 2));

