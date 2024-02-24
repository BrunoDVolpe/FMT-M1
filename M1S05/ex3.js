const prompt = require("prompt-sync")()

let numeros = []
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i+1}: `))
    numeros.push(numero);
}

for (let i = 0; i < 5; i++) {
    console.log(`O número ${i+1} do array é ${numeros[i]}`)
}