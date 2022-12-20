// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        altura: altura,
        peso: peso,
        // Getter
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        }
    };
}

const p1 = criaPessoa('Emerson', 'Santos', 1.84, 120);
const p2 = criaPessoa('João', 'Santos', 2.10, 100);
const p3 = criaPessoa('Guilherme', 'Santos', 1.78, 89);
// p1.nomeCompleto = 'Maria Oliveira Silva';
// console.log(p1.nomeCompleto);
// console.log(p1.nome);
// console.log(p1.sobrenome);
// console.log(p1.fala());
// console.log("IMC =", p1.imc);
console.log(p3.imc);

