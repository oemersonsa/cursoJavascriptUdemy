// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());

const { Pessoa } = require('./mod1');
const axios = require('axios');
const p1 = new Pessoa('Emerson', 'Santos');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

