/*
&& -> false && true -> false 
|| -> false || true -> vai retornar "o valor verdadeiro(true)" 

Valores que avaliam em false - Falsy -> Não é false literal 

false
0
'' "" ``
null
undefined 
NaN
*/

// //ex de &&:
// function falaOi () {
//     return 'Oi';
// }

// const vaiExecutar = 'Joãozinho';

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz' || true);

// const corUsuario = 'red';
// const corPadrao = corUsuario || 'black';

// console.log(corPadrao)

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);