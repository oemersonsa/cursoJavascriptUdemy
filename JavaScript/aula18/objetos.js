// const pessoa1 = {
//     nome: 'Emerson',
//     sobrenome: 'Santos',
//     idade: 30
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);


// function criaPessoa (nome, sobrenome, idade) /*(parametro)*/ {
//     return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Emerson', 'Santos', 30) /*('argumento')*/ ;
// console.log(pessoa1.nome);

// const pessoa1 = criaPessoa('Emerson', 'Santos', 30);
// const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
// const pessoa3 = criaPessoa('João', 'Moreira', 55);
// const pessoa4 = criaPessoa('Junior', 'Lara', 44);
// const pessoa5 = criaPessoa('Jean', 'Otávio', 69);

// console.log(pessoa1.nome, pessoa2.nome);

const pessoa1 = {
    nome: 'Emerson',
    sobrenome: 'Santos',
    idade: 30,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();