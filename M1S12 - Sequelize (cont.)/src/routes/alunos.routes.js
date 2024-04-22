const { Router } = require('express')
const Aluno = require('../models/Aluno')
const { sign } = require('jsonwebtoken')
const { auth } = require('../middlewares/auth')

const alunosRoutes = new Router()

// GET - Listar alguma coisa
// POST - Criar/adicionar algo
// PUT - Atualizar algo
// DELETE - Deletar algo
// PATCH - Atualizar um dado específico de um objeto

// Criar rota
 // método
 // path
 // implementação


alunosRoutes.post('/', async (req, res) => {
    try {
        const { nome, data_nascimento, celular, email, password } = req.body

        if(!nome) {
            return res.status(400).json({message: "O nome é obrigatório"})
        }

        if(!data_nascimento) {
            return res.status(400).json({message: "A data de nascimento é obrigatória"})
        }
        // Validar data nascimento por regex (exemplo simples, sem conferir se mês tem entre 1 e 12 e dia entre 1 e 31)
        if(!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)){
            return res.status(400).json({message: "A data de nascimento não está no formato correto"})
        }

        if(!email) {
            return res.status(400).json({message: "O email é obrigatório"})
        }

        if(!password) {
            return res.status(400).json({message: "A senha é obrigatória"})
        }

        const aluno = await Aluno.create({
            email: email,
            password: password,
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular
        })
        res.status(201).json(aluno)
    } catch (err) {
        console.log(err.message)
        res.status(500).json({error: "Não foi possível cadastrar o aluno"})
    }
})

alunosRoutes.get('/', auth, async (req, res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})

alunosRoutes.get('/:id', auth, async (req, res) => {
    try {
        const { id } = req.params
        const aluno = await Aluno.findByPk(id)
    
        if(!id) {
            return res.status(404).json({error: "Aluno não encontrado"})
        }
    
        res.send(aluno)

    } catch(err) {
        console.log(err.message)
        res.status(500).json({error: 'Erro ao listar o aluno.'})
    }
})

module.exports = alunosRoutes