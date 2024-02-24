const prompt = require("prompt-sync")()

let numeros = []
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i+1}: `))
    numeros.push(numero);
}

const quadrados = numeros.map(num => num ** 2)

console.log(`O quadrado dos números é ${quadrados.join(" ")}.`)