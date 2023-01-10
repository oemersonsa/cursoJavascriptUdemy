exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <br>
    <form action="/" method="POST">
    Outro Campo: <input type="text" name="outro-campo">
    <button>Olá mundo</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST.')
}