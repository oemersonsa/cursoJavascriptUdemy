class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }

        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo, armazenamento) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.armazenamento = armazenamento;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, você alterou o método ligar')
    }
}

const s1 = new Smartphone('iPhone', 'Preto', '14 Pro Max', '256Gb');
console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);
