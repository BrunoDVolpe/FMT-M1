class Produto {
    nome;
    preco;
    quantidade;

    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(qtde_vendida) {
        if (qtde_vendida > this.quantidade) {
            console.log('Estoque insuficiente.');
            return
        }
        this.quantidade -= qtde_vendida;
    }

    repor(qtde_reposta){
        this.quantidade += qtde_reposta;
    }

    mostrarEstoque(){
        console.log(`O produto ${this.nome} possui ` +
        (this.quantidade != 1 ? `${this.quantidade} unidades disponíveis` : `${this.quantidade} unidade disponível`)
        )
    }

    atualizarPreco(novo_valor){
        this.preco = novo_valor;
    }
}

// Teste do mini projeto
let caneta = new Produto("CANETA BIC AZUL", 3.5, 5)
caneta.mostrarEstoque()
caneta.vender(6)
caneta.vender(5)
caneta.mostrarEstoque()
caneta.repor(1)
caneta.mostrarEstoque()
console.log(caneta.preco)
caneta.atualizarPreco(4)
console.log(caneta.preco)