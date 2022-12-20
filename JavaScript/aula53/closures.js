function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Emerson');
const funcao2 = retornaFuncao('Santos');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());