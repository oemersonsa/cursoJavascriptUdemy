//              -5        -4        -3         -2       -1    
//               0         1         2          3        4          
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']; 

// nomes.splice(índice, elemento para apagar, elem1, elem2, elem3); -> 'elem' -> valores adicionados
// splice(); // -> remove os elementos e retornam eles em outro array 
// const removidos = nomes.splice(-2, 2);
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
// const removidos = nomes.splice(-1, 1); -> pop
// const removidos = nomes.splice(0, 1); -> shift 
// nomes.splice(nomes.length, 1, 'Luiz'); -> push
// nomes.splice(0, 0, 'Luiz'); -> unshift

console.log(nomes, removidos);