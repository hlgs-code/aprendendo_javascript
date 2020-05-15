function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__promo__ === obj2.__promo__)
console.log(MeuObjeto.prototype === obj1.__promo__)

MeuObjeto.prototype.nome = 'hugo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Sheyla'
obj2.falar()

const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)