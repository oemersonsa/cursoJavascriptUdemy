// Índice ->       0         1       2
const nomes = ['Emerson', 'Luiz', 'Maria'];
// nomes[2] = 'João'; // -> Altera o valor no índice indicado 
// delete nomes[2]; // -> Deleta o valor sem alterar os índices 
// const nomes = new Array('Emerson', 'Luiz', 'Maria'); // -> Construtor de array (metodo pouco usado)
// Arrays são valores por referência 
// const novo = nomes; // -> passado por referência 
// nomes.pop(); // -> Apaga o valor do último índice e retorna o valor apagado
// [...nomes]; // -> faz uma cópia do array 
// nomes.length // -> Retorna o tamanho do array 
// nomes.shift(); // -> Apaga o valor do começo e altera todos os índices do array 
// nomes.push(); // -> Adiciona um valor no final do array 
// nomes.unshift(); // -> Adiciona um valor no começo do array e altera todos os índices 
// const novo = nomes.slice(1, 3); // -> Fatia o array, retorna os valores indicados 
/**
 * const nome = 'Emerson Santos';
 * const nomes = nome.split(' '); // -> Vai seprar o valor pelos espaços e adicionalos a um array (podendo ser separado por espaços, virgulas, pontos ou qualquer outra coisa)
 * console.log(nomes), // -> [ 'Emerson', 'Santos, ]
 */
/**
 * const nomes = [ 'Emerson', 'Santos' ];
 * const nome = nomes.join(' '); // -> Vai unir todos os valores do array separando-os por espaços e transformar em uma string 
 * console.log(nome); // -> Emerson Santos
 */