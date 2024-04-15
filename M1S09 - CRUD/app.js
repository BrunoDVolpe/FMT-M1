const express = require("express")

const app = express()

// Exercício 2
app.get("/sobre", (req, res) => {
    res.send("Esse é meu exercício 2 usando node e express para a semana 9.")
})

app.get("/contato", (req, res) => {
    res.json("Contato")
})

app.listen(3000)