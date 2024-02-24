const prompt = require("prompt-sync")()

const frutas = []

for (let i = 0; i < 3; i++){
    let fruta = prompt("Informe uma fruta: ");
    frutas.push(fruta)
}

console.log(`A segunda fruta informada foi: ${frutas[1]}`)