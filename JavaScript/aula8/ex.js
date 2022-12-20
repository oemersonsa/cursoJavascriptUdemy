const nome = 'Emerson';
const sobrenome = 'Santos';
const idade = 30;
const peso = 120;
const alturaEmM = 1.84;
let indiceMassaCorporal;
let anoNascimento;


indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg' );
// console.log('tem', alturaEmM, 'de altura e seu IMC é de ', indiceMassaCorporal);
// console.log(nome, sobrenome, 'nasceu em', anoNascimento);

// Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg.`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);
