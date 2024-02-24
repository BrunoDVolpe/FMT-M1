const prompt = require("prompt-sync")()

const frutas = []

for (let i = 0; i < 4; i++){
    let fruta = prompt("Informe uma fruta: ");
    frutas.push(fruta)
}

novas_frutas = frutas.slice(1)

console.log(`O array atualizado sem a primeira fruta é: ${novas_frutas}`)