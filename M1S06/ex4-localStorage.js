let nome = prompt("Qual o seu nome?")
let idade = parseInt(prompt("Quantos anos você tem?"))
let email = prompt("Qual o seu e-mail?")

let user = {
    nome: nome,
    idade: idade,
    email: email
}

localStorage.setItem('user', JSON.stringify(user))