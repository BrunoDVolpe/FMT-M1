const prompt = require("prompt-sync")()

let numeros = []
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i+1}: `))
    numeros.push(numero);
}

const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(`A soma dos números do array é ${soma}.`)