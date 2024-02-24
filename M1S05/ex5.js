const prompt = require("prompt-sync")()

let numeros = []
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i+1}: `))
    numeros.push(numero);
}

//[...array] vai criar um array novo usando o array. Se fizer array_novo = array, vai só referenciar o array (ponteiro)
const numerosOrdenados = [...numeros]

// O método sort() altera o array original. Além disso, ele compara os itens como 'string' e não número.
// Logo, 100 estará antes de 25 já que 1 é menor do que 2. Pra contornar, vamos passar uma função que ele usará para ordenar.
// A função retorna positivo, negativo ou zero. a - b for negativo, a > b, então b deve aparecer primeiro;
// se positivo, a < b, então mantém essa ordem.
// Para inverter a ordem, podemos usar .reverse() ou inverter a comparação na função: (num1, num2) => num2 - num1

numerosOrdenados.sort((num1, num2) => num1 - num2)

console.log(`O array em ordem crescente é ${numerosOrdenados.join(" ")}.`)