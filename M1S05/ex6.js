const prompt = require("prompt-sync")()

let numeros = []
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i+1}: `))
    numeros.push(numero);
}

const pares = numeros.filter(num => {
    if (num % 2 == 0){
        return true
    }
})

console.log(`Os números pares do array são ${pares.join(" ")}.`)