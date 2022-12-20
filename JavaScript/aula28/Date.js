// new Date(0) -> 01/01/1970 - Timestamp Unix ou Época Unix
// const treHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + treHoras + umDia);
// const data = new Date(2019, 3); // ano, mês, dia, hora, minuto, segundo, milesimo

// Meses                                                        Dia da Semana
/*                                                              0 - Domingo
0 - Janeiro          6 - Julho                                  1 - Segunda
1 - Fevereiro        7 - Agosto                                 2 - Terça    
2 - Março            8 - Setembro                               3 - Quarta
3 - Abril            9 - Outubro                                4 - Quinta
4 - Maio            10 - Novembro                               5 - Sexta   
5 - Junho           11 - Dezembro                               6 - Sábado
*/

// const data = new Date('2019-04-20 20:20:59'); // -> Formato mais utilizado 
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('Milesimo', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());
// console.log(data.toString());
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);