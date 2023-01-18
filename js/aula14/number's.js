// Padrão de precisão dos números do JS -> IEEE 754-2008

// .toString() -> Transforma em string
// .toString(2) -> binario
// .toFixed(4) -> Fixa um number numa quantidade de casas decimais
// Number.isInteger() -> Verifica se o valor é inteiro | true or false
// Number.isNaN() -> Verfica se o valor é um NaN  

let num1 = 0.7;
let num2 = 0.1;

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

// num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

