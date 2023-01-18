// Map -> Sempre vai retornar um array com a mesma quantidade de elementos que o array original

// Dobre os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobro = numeros.map(valor => valor * 2);
console.log(dobro);
 
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa 
const pessoas2 = pessoas.map(obj => obj.nome);
console.log(pessoas2);
// Remova apenas a chave "nome" do objeto
const pessoas3 = pessoas.map(obj => ({ idade: obj.idade }));
console.log(pessoas3);
// Adicione uma chave id em cada objeto (id)
const pessoas4 = pessoas.map(function(obj, indice) {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1245;
    return newObj;
});
console.log(pessoas4);
