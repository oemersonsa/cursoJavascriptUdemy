const pessoa = {
    nome: 'Emerson',
    sobrenome: 'Santos',
    idade: 30,
    endereco: {
        rua: 'Marechal Renato Paquet',
        numero: '1021A'
    }
};

//Atribuição via desestruturação 
// const { nome: n = 'Otávio', sobrenome, idade } = pessoa;
// console.log(n, sobrenome, idade);

// const { endereco: {rua, numero} } = pessoa;
// console.log(rua, numero);

const { nome, ...resto } = pessoa;
console.log(nome);
console.log(resto);



