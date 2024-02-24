// Solução de todos os exercícios
// Início exercício 1
const prompt = require("prompt-sync")()

const frutas = []

for (let i = 0; i < 3; i++){
    let fruta = prompt("Informe uma fruta: ");
    frutas.push(fruta)
}

console.log(`A segunda fruta informada foi: ${frutas[1]}`)
// Fim exercício 1

// Início exercício 2
let fruta = prompt("Informe uma fruta: ");
frutas.push(fruta)
novas_frutas = frutas.slice(1)

console.log(`O array atualizado sem a primeira fruta é: ${novas_frutas.join(", ")}`)
// Fim exercício 2

// Início exercício 3
let numeros = []
for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o número ${i+1}: `))
    numeros.push(numero);
}

for (let i = 0; i < 5; i++) {
    console.log(`O número ${i+1} do array é ${numeros[i]}`)
}
// Fim exercício 3

// Início exercício 4
const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0)

console.log(`A soma dos números do array é ${soma}.`)
// Fim exercício 4

// Início exercício 5
const numerosOrdenados = [...numeros]

numerosOrdenados.sort((num1, num2) => num1 - num2)

console.log(`O array em ordem crescente é ${numerosOrdenados.join(" ")}.`)
// Fim exercício 5

// Início exercício 6
const pares = numeros.filter(num => {
    if (num % 2 == 0){
        return true
    }
})

console.log(`Os números pares do array são ${pares.join(" ")}.`)
// Fim exercício 6

// Início exercício 7
const quadrados = numeros.map(num => num ** 2)

console.log(`O quadrado dos números é ${quadrados.join(" ")}.`)
// Fim exercício 7