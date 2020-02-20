let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdaddeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
//...


console.log('os falsos...')
console.log(!!0)
console.log(!!null)
console.log(!!'')
console.log(!!undefined)
//...


let nome = ''
console.log(nome || 'Desconhecido')

nome = 'Hugo'
console.log(nome || 'Desconhecido')
