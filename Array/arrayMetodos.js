const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento, 'Massa quebrou o carro'
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no final
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento.
console.log(pilotos)

pilotos.unshift('Hamilton') // add na cabeça da fila
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar

pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover

pilotos.splice(3, 1) // massa quebrou novamente
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

