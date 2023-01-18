/*
Object.values
Object.entries
Object.assign(des, any)
Object.getownPropertyDescripto(o, 'prop')
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/
const produto = { nome: 'Produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
});
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);
console.log(Object.values(produto));
console.log(Object.entries(produto));



