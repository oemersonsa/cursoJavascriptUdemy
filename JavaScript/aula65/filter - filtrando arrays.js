// Filter -> Sempre vai retornar um array com a mesma quantidade de elementos ou menos que o array original
//Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);
 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

//Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
//Retorne as pessoas com mais de 50 anos 
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);
//Retorne as pessoas cujo nome termina com a 
const pessoasFinalA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasNomeGrande);
console.log(pessoasMaisVelhas);
console.log(pessoasFinalA);
