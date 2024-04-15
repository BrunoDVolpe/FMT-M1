const express = require("express")

const app = express()

// Exercício 4
app.get("/produto/:id", (req, res) => {
    let { id } = req.params
    res.json(`Esse é o produto com o ID ${id}`)
})

app.listen(3000)