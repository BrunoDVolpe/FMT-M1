function compra(){
    let produto, qtde, index
    let lista = [0, 0, 0, 0, 0]
    let produtos = ['Hortifruti', 'Laticínios', 'Carnes', 'Peixes', 'Aves']
    let maiorQtde = 0
    
    while (true) {
        produto = prompt(`Qual produto você deseja comprar?
        (1)Hortifruti
        (2)Laticínios
        (3)Carnes
        (4)Peixes
        (5)Aves
        (6)Fechar pedido`)

        if (produto == 1 || produto == 2 || produto == 3 || produto == 4 || produto == 5) {
            qtde = parseInt(prompt(`Quantos desse item?`));
            lista[parseInt(produto) - 1] += qtde;
        } else if (produto==6){
            break;
        } else {
            alert("Opção inválida!");
        }

    }

    for (let i = 0; i < lista.length; i++){
        if (lista[i] > maiorQtde){
            maiorQtde = lista[i];
            index = i;
        }
    }
    return document.write(`Seu maior pedido foi de ${produtos[index]} com ${maiorQtde} itens.`)
}

compra()