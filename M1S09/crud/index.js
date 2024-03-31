const express = require("express");
const app = express();
const PORT = 3000

// Lista de users simulando um banco de dados
const users = [];

// Adiciona um middleware para trabalhar com JSON nas reqs.
app.use(express.json());

// Exercício 3 - Middleware
const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(`[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`);
    next(); // Chamar next para passar a solicitação para o próximo middleware
};

// Aplicando o Middleware para todas as requisições
app.use(logHoraMiddleware);

// Criando um redirect na home para a /users
app.get('/', (req, res) => {
    res.redirect('/users')
})

// Exercício 6
// Criar novo usuário
app.post("/users", (req, res) => {
    const user = req.body;
    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    users.push(user)
    res.status(201).json(user)
})

// Pegar todos os usuários
app.get("/users", (req, res) => {
    res.json({"users": users})
})

// Pegar dados de um usuário
app.get("/users/:id", (req, res) => {
    let { id } = req.params;
    let user = users.find(user => user.id == parseInt(id))
    if(!user) {
        res.status(404).send("Usuário não encontrado.");
        return
    }
    res.json(user)
})

// Atualizar dados de um usuário
app.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == parseInt(id));
    let newUserData = req.body;
    if(index === -1){
        res.status(404).send("Usuário não encontrado.")
        return
    }
    users[index] = { ...users[index], ...newUserData }
    users[index].id = id
    res.status(200).json(users[index])
})

// Deletar usuário
app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    let index = users.findIndex(user => user.id == parseInt(id))
    if(index === -1){
        res.status(404).send("Usuário não encontrado.")
        return
    }
    users.splice(index, 1);
    res.send("Usuário excluído com sucesso.")
})

app.listen(PORT)