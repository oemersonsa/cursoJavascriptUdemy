const mongoose = require('mongoose');
const validator = require('validator');


const ContactSchema = new mongoose.Schema({
    nome: { type: String, required: true },    
    sobrenome: { type: String, required: false, default: '' },    
    email: { type: String, required: false, default: '' },    
    telefone: { type: String, required: false, default: '' },  
    criadoEm: { type: Date, default: Date.now }  
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

Contact.prototype.register = async function() {
    this.valida();
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.create(this.body);
};

Contact.prototype.valida = function() {
    this.cleanUp();
    // Validação 
    // E-mail precisa ser válido e senha precisa ter mais de 6 caracteres
    if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
    if(!this.body.nome) this.errors.push('Nome é um campo obrigatório')
    if(!this.body.email && !this.body.telefone) this.errors.push('Pelo menos um contato deve ser enviado: e-mail ou telefone')
};

Contact.prototype.cleanUp = function() {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }

    this.body = {
        nome: this.body.nome,
        sobrenome: this.body.sobrenome,
        email: this.body.email,
        telefone: this.body.telefone,
    };
};

Contact.prototype.edit = async function(id) {
    if(typeof id !== 'string') return;
    this.valida();
    if(this.errors.length > 0) return;
    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
};

// Métodos estáticos 
Contact.searchById = async function(id) {
    if(typeof id !== 'string') return;
    const contact = await ContactModel.findById(id);
    return contact;
};

Contact.findContacts = async function(id) {
    const contacts = await ContactModel.find()
        .sort({ criadoEm: -1 });
    return contacts;
};

Contact.delete = async function(id) {
    if(typeof id !== 'string') return;
    const contact = await ContactModel.findOneAndDelete({_id: id});
    return contact;
};

module.exports = Contact;