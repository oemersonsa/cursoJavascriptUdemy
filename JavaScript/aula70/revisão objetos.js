// const pessoa = { // Objeto literal
//     nome: "Emerson",
//     sobrenome: "Santos",
// };

// const chave = "nome";
// console.log(pessoa.nome);
// console.log(pessoa["sobrenome"]);
// console.log(pessoa[chave])

// const pessoa1 = new Object(); // Método criador de objeto
// pessoa1.nome = "Heidielen";
// pessoa1.sobrenome = "Lima";
// pessoa1.idade = 28;

// pessoa1.falarNome = function() {
//     return (`${this.nome} está falando seu nome.`);
// };

// pessoa1.getDataNasc = function() {
//     const dataAtual = new Date();
//     return (`${this.nome} nasceu em ${dataAtual.getFullYear() - this.idade}`);
// };

// console.log(pessoa1.falarNome());
// console.log(pessoa1.getDataNasc());

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave]);
// }

function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

const p1 = criaPessoa("Emerson", "Santos");
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p2 = new Pessoa("Emerson", "Sá");
Object.freeze(p2); // -> Trava o objeto 
p2.nome = "Outra coisa";
console.log(p2);
