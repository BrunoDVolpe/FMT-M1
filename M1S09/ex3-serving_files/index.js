const express = require("express")
const app = express()
const PORT = 3000

// Exercício 3
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/image", (req, res) => {
    res.sendFile(__dirname + "/public/assets/image.jpg")
})

app.get("/css", (req, res) => {
    res.sendFile(__dirname + "/public/styles.css")
})

app.listen(PORT)