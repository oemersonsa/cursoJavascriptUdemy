/*
Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro.

Definicção de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

// Instância 
const pessoa1 = new Pessoa('Luiz', 'O.'); // Pessoa = função construtota
const pessoa2 = new Pessoa('Maria', 'A.'); // Pessoa = função construtota
const data = new Date();

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);