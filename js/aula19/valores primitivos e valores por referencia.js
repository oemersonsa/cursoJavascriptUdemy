/*
Primitivos (Imutáveis) - string, number, boolean, undefined, null, (bigint, symbol)  ->  Valores copiados

Referência (Mutáveis) - array, object, function -> Valores passados por referência 
*/

// let nome = 'Emerson';
// nome[0] = 'R';  // Não faz nada pois a string é um valor imutável 
// console.log(nome[0], nome);

// let a = 'A';
// let b = a; // Cópia
// console.log(a, b); // -> A A

// a = 'Outra coisa';
// console.log(a, b); // -> Outra coisa A

// let a = [1, 2, 3];
// // let b = a; // -> Aponta para o mesmo local na memória que o a, qualuqer alteração em qualquer um dos dois afetará ambos 
// let b = [...a] // -> Cria uma cópia independente 
// let c = b;
// console.log(a, b); // [ 1, 2, 3 ] [ 1, 2, 3 ]

// a.push(4);
// console.log(a, b); // [ 1, 2, 3, 4 ] [ 1, 2, 3 ]

// b.pop();
// console.log(a, b); // [ 1, 2, 3, 4 ] [ 1, 2 ]

// a.push('Emerson');
// console.log(a, c); // [ 1, 2, 3, 4, 'Emerson' ] [ 1, 2 ]

const a = {
    nome: 'Emerson',
    sobrenome: 'Sá'
};
// const b = a; // -> Aponta para o mesmo local na memória que o a, qualuqer alteração em qualquer um dos dois afetará ambos
const  b = {...a}; // -> Cria uma cópia independente 

// console.log(b); // { nome: 'Emerson', sobrenome: 'Sá' }
a.nome = 'Luiz';
console.log(a); // { nome: 'Emerson', sobrenome: 'Sá' }
console.log(b); // { nome: 'Luiz', sobrenome: 'Sá' }