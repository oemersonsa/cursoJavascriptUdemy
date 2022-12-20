// IIFE -> Immediately invoked function expression 
(function(idade, peso, altura) {

    const sobrenome = 'Santos';
    function criaNome(nome) {
        return nome + " " + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Emerson'));
    }

    falaNome();
    console.log(idade, peso, altura)

})(30, 120, 1.84);