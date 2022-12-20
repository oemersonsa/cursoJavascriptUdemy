// (condição) ? 'valor true' : 'valor false'; 
const pontuacaoUsuario = 1000;

// if (pontuacaoUsuario >= 1000) {
//     console.log("Usuário VIP")
// } else {
//     console.log("Usuário normal")
// }

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);