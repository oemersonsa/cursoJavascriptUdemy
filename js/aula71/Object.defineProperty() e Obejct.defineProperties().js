// defineProperty 
// function Produto(nome, preco, estoque) {
//     this.nome = nome;
//     this.preco = preco;

//     Object.defineProperty(this, 'estoque', {
//         enumerable: true, // mostra a chave
//         value: estoque, // valor 
//         writable: true, // pode alterar ou não o valor
//         configurable: false // pode reconfigurar ou nao a chave 
//     }); 
    
//     // Object.defineProperty(this, 'estoque', {
//     //     enumerable: true, // mostra a chave
//     //     value: estoque, // valor 
//     //     writable: true, // pode alterar ou não o valor
//     //     configurable: false // pode reconfigurar ou nao a chave 
//     // });
// }

// const p1 = new Produto('Camiseta', 20, 3);
// // p1.estoque = 500000;
// // delete p1.estoque;
// console.log(Object.keys(p1));

// defineProperties
function Produto(nome, preco, estoque) {
        Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        value: estoque, 
        writable: true, 
        configurable: false 
    }); 

    Object.defineProperties(this, {
        nome: {
            enumerable: true, 
            value: nome, 
            writable: true, 
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable: true, 
            configurable: true
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for(let k in p1) {
    console.log(k);
}