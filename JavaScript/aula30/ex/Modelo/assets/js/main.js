const h1 = document.querySelector('.container h1');
const data = new Date();

//Metodo com array
function getDayName(nameDay) {
    const weekDayName = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    return weekDayName[nameDay];
}

function getMonthName(numberMonth) {
    const month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return month[numberMonth];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function createDate (data) {
    const dayWeek = data.getDay();
    const numberMonth = data.getMonth();

    const nameDay = getDayName(dayWeek);
    const nameMonth = getMonthName(numberMonth);

    return (`${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()} ${data.getHours()}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`);
}

h1.innerHTML = createDate(data);


// Metodo Simples 
// h1.innerHTML = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'full', timeStyle: 'short' }).format(data); 


// Metodo com switch
// function getDayName (diaSemana) {
//     let weekDayName;

//     switch (diaSemana) {
//         case 0:
//             weekDayName = 'Domingo';
//             return weekDayName;
//         case 1:
//             weekDayName = 'Segunda-feira';
//             return weekDayName;
//         case 2:
//             weekDayName = 'Terça-feira';
//             return weekDayName;
//         case 3:
//             weekDayName = 'Quarta-feira';
//             return weekDayName;
//         case 4:
//             weekDayName = 'Quinta-feira';
//             return weekDayName;
//         case 5:
//             weekDayName = 'Sexta-feira';
//             return weekDayName;
//         case 6:
//             weekDayName = 'Sábado';
//             return weekDayName;
//         default:
//             weekDayName = '';
//             return weekDayName;      
//     } 
// }

// function getMonthName (numMonth) {
//     let monthName;

//     switch (numMonth) {
//         case 0:
//             monthName = 'Janeiro';
//             return monthName;
//         case 1:
//             monthName = 'Fevereiro';
//             return monthName;
//         case 2:
//             monthName = 'Março';
//             return monthName;
//         case 3:
//             monthName = 'Abril';
//             return monthName;
//         case 4:
//             monthName = 'Maio';
//             return monthName;
//         case 5:
//             monthName = 'Junho';
//             return monthName;
//         case 6:
//             monthName = 'Julho';
//             return monthName;
//         case 7:
//             monthName = 'Agosto';
//             return monthName;
//         case 8:
//             monthName = 'Setembro';
//             return monthName;
//         case 9:
//             monthName = 'Outubro';
//             return monthName;
//         case 10:
//             monthName = 'Novembro';
//             return monthName;
//         case 11:
//             monthName = 'Dezembro';
//             return monthName;
//         default:
//             monthName = '';
//             return monthName;      
//     } 
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`
// }

// function createDate (data) {
//     const dayWeek = data.getDay();
//     const numberMonth = data.getMonth();

//     const nameDay = getDayName(dayWeek);
//     const nameMonth = getMonthName(numberMonth);

//     return (`${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()} ${data.getHours()}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`);
// }


// h1.innerHTML = createDate(data);