const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const newDiv = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    // tagCriada.innerHTML = texto; 1° modo
    // tagCriada.innerText = texto; 2° modo
    let textoCriado = document.createTextNode(texto); // 3° modo

    tagCriada.appendChild(textoCriado); // parte do 3° modo
    newDiv.appendChild(tagCriada);
}

container.appendChild(newDiv);


 