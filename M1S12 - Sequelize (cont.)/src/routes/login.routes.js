const { Router } = require('express')
const Aluno = require('../models/Aluno')
const { sign } = require('jsonwebtoken')


const loginRoutes = new Router()

// loginRoutes.get('/bem_vindo', (req, res) => {
//     res.json({name: 'Bem vindo'})
// })

loginRoutes.post('/', async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        if(!email) {
            return res.status(400).json({message: "O email é obrigatório"})
        }

        if(!password) {
            return res.status(400).json({message: "A senha é obrigatória"})
        }

        const aluno = Aluno.findOne({
            where: {email: email, password: password}
        })

        if(!aluno){
            return res.status(404).json({message: "E-mail e/ou senha incorretos."})
        }

        // Para o JWT, precisamos gerar apenas o payload. Passamos o ID dentro do sub, o e-mail e aproveitamos e mandamos também o nome
        const payload = {sub: aluno.id, email: aluno.email, nome:aluno.nome}

        const token = sign(payload, process.env.SECRET_JWT)

        res.status(200).json({Token: token})

    } catch(err) {
        res.status(500).json({error: err, message: "Algo deu errado."})
    }
})

module.exports = loginRoutes