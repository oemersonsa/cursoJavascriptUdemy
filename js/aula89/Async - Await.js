function rand(min = 1, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei no promise');
        }, tempo);
    })
}

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand());
        console.log(fase1);
        const fase2 = await esperaAi(2, rand());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();
