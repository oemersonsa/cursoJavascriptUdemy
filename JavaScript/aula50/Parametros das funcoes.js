// A função declarada com a palavra function tem a variável arguments que sustenta todos os argumentos enviados  
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }

//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3, 4, 5, 6, 7);

function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 0, 20, 30, 40, 50);