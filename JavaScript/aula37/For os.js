// For clássico -> geralmente com iteráveis (array ou string)
// For in -> retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou string)


// const nomes = ['Emerson Santos', 'Luiz', 'Otávio', 'Henrique'];

// for (let i = 0; i < nomes.length; i++) {
//     console.log(nomes[i]);
// }

// console.log('#####');

// for (let i in nomes) {
//     console.log(nomes[i]);
// }

// console.log('#####');

// for (let valor of nomes) {
//     console.log(valor);
// }

// console.log('#####');

// nomes.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// });

const pessoa = {
    nome: 'Emerson',
    sobrenome: 'Santos',
    idade: 30
};

// for (let chave in pessoa) {
//     console.log(pessoa[chave]);
// }

// for (let valor of pessoa) { -> Não funciona 
//     console.log(valor)
// };