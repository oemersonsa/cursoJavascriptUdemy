// Função construtura -> constroi objetos 
// Função fabrica -> fabrica objetos
// Construtora -> (Sempre começa com letra maiúcula) obrigatorio uso da palavra new -> Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {

    };


    // Atributos ou métodos públicos 
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': Sou um metodo')
    };
}

const p1 = new Pessoa('Emerson', 'Santos');
const p2 = new Pessoa('Maria', 'Santos');
p1.metodo();

