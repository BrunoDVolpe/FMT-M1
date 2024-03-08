// Exercício 7
class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

// Teste ex 7
console.log("Pessoa:")
const pessoa = new Pessoa('Bruno', 31, 'Futuro Dev')
console.log(pessoa)

// Exercício 8
class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde){
        super(nome, idade, profissao);
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }
}

// Teste Exercício 8
console.log("Cliente:")
const cliente = new Cliente('Mano', 35, 'Personal Trainer', '48 99999-9999', 'email@email.com.br', '2020-03-07')
console.log(cliente)