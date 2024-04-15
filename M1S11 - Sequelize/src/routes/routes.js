const { Router } = require('express')
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')
const Professor = require('../models/Professor')

const routes = new Router()

// GET - Listar alguma coisa
// POST - Criar/adicionar algo
// PUT - Atualizar algo
// DELETE - Deletar algo
// PATCH - Atualizar um dado específico de um objeto

// Criar rota
 // GET
 // path
 // implementação

routes.get('/bem_vindo', (req, res) => {
    // res.send('Bem vindo')
    res.json({name: 'Bem vindo'})
})

routes.post('/alunos', async (req, res) => {
    try {
        const { nome, data_nascimento, celular } = req.body

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
        const aluno = await Aluno.create({
            nome: nome,
            data_nascimento: data_nascimento,
            celular: celular
        })
        res.status(201).json(aluno)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: "Não foi possível cadastrar o aluno"})
    }
})

routes.get('/alunos', async (req, res) => {
    const alunos = await Aluno.findAll()
    res.json(alunos)
})

// Ex. 1
routes.post('/cursos', async (req, res) => {
    const { nome, duracao_horas } = req.body
    if(!nome) {
        return res.status(400).json({message: "O nome é obrigatório"})
    }
    if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
        return res.status(400).json({message: "A duração do curso deve ser entre 40 e 200 horas"})
    }
    const curso = await Curso.create({
        nome: nome,
        duracao_horas: duracao_horas
    })
    res.status(201).json(curso)
})

// Ex. 2 - Get simples
// routes.get('/cursos', async (req, res) => {
//     const cursos = await Curso.findAll()
//     res.json(cursos)
// })

// Ex. 3 - Get com Query Params
routes.get('/cursos', async (req, res) => {
    let params = {}
    if(req.query.nome) {
        params = {...params, nome: req.query.nome}
    }
    if(req.query.duracao_horas){
        params = {...params, duracao_horas: req.query.duracao_horas}
    }

    const cursos = await Curso.findAll({
        where: params
    })

    res.json(cursos)
})

routes.get('/cursos', async (req, res) => {
    // Se não tiver o parâmetro, estamos dando o valor '' para não quebrar no where. Douglas disse que depois vão explicar como contornar isso.
    let params = {}
    if(req.query.nome) {
        params = {...params, nome: req.query.nome}
    }
    if(req.query.duracao_horas){
        params = {...params, duracao_horas: req.query.duracao_horas}
    }

    const cursos = await Curso.findAll({
        where: params
    })

    res.json(cursos)
})

// Deletar de forma simples
// Dessa forma, se o item não existir, a aplicação não vai quebrar, mas não teria porque 'estressar' o banco.
// routes.delete('/cursos/:id', (req, res) => {
//     const { id } = req.params
//     Curso.destroy({
//         where: {
//             id: id
//         }
//     }) // Equivalente a DELETE FROM cursos WHERE id = id;
//     res.status(204).json({})
// })

// Ex. 5 - Deletar validando se o item existe.
routes.delete('/cursos/:id', async (req, res) => {
    const { id } = req.params
    const curso = await Curso.findByPk(id)

    if(!curso) {
        return res.status(404).json({error: "Não encontrado"})
    }

    await curso.destroy()

    return res.status(204).json({})
})

// routes.put('/cursos/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const { nome, duracao_horas } = req.body
        
//         // Validar informações novas
//         if(!nome) {
//             return res.status(400).json({message: "O nome do curso é obrigatório"})
//         }
//         if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
//             return res.status(400).json({message: "A duração do curso é obrigatória e deve ser entre 40 e 200 horas"})
//         }
    
//         const [curso_atualizado] = await Curso.update({
//             nome: nome,
//             duracao_horas: duracao_horas}, {
//                 where: {
//                     id: id }
//         })

//         if (!curso_atualizado) {
//             console.log(curso_atualizado)
//             return res.status(404).json({error: 'Curso não encontrado.'})
//         }
        
//         res.status(200).json({message: 'curso atualizado com sucesso'})

//     } catch (error) {
//         console.log(error.message)
//         res.status(500).json({error: 'Erro ao atualizar o produto.'})
//     }
// })

// Ex. 4 - Atualizando e retornando o objeto
routes.put('/cursos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, duracao_horas } = req.body
        
        // Procurar curso
        const curso = await Curso.findByPk(id)

        if(!curso) {
            return res.status(404).json({error: "Curso não encontrado."})
        }

        // Validar informações novas
        if(!nome) {
            return res.status(400).json({message: "O nome do curso é obrigatório"})
        }
        if(!(duracao_horas >= 40 && duracao_horas <= 200)) {
            return res.status(400).json({message: "A duração do curso é obrigatória e deve ser entre 40 e 200 horas"})
        }
    
        curso.update({
            nome: nome,
            duracao_horas: duracao_horas
        })
        curso.save()
        
        res.status(200).json(curso)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: 'Erro ao atualizar o produto.'})
    }
})

// Ex. 6 - CRUD para professores (A sequência de rotas GET, POST, PUT e DELETE são referentes ao exercício 6)
routes.get('/professores', async (req, res) => {
    const professores = await Professor.findAll()
    return res.json(professores)
})

routes.post('/professores', async (req, res) => {
    try {
        const { nome, data_admissao, data_demissao, curso_id } = req.body
        let dados_professor = {}

        if(!nome) {
            return res.status(400).json({error: 'O nome do professor é obrigatório.'})
        }
        if(!data_admissao) {
            return res.status(400).json({error: 'A data de admissão é obrigatória.'})
        }
        if(!data_admissao.match(/\d{4}-\d{2}-\d{2}/gm)){
            return res.status(400).json({message: "A data de admissão não está no formato correto"})
        }
        if(data_demissao){
            if (!data_demissao.match(/\d{4}-\d{2}-\d{2}/gm)){
                return res.status(400).json({message: "A data de demissão não está no formato correto"})
            }
            dados_professor = { ...dados_professor, data_demissao: data_demissao }
        }
        if(curso_id){
            const curso = await Curso.findByPk(parseInt(curso_id))
            if(!curso){
                return res.status(404).json({error: 'Curso não encontrado.'})
            }
            dados_professor = { ...dados_professor, curso_id: parseInt(curso_id) }
        }

        dados_professor = { nome: nome, data_admissao: data_admissao, ...dados_professor }
        const professor = await Professor.create(
            dados_professor
        )
        res.status(201).json(professor)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: 'Erro ao criar o professor'})
    }
})

routes.delete('/professores/:id', async (req, res) => {
    const { id } = req.params
    const professor = await Professor.findByPk(id)

    if(!professor) {
        return res.status(404).json({error: 'Professor não encontrado.'})
    }

    await professor.destroy()
    return res.status(204).json({})
})

routes.put('/professores/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nome, data_admissao, data_demissao, curso_id } = req.body
        let dados_professor = {}

        const professor = await Professor.findByPk(id)
        if(!professor) {
            return res.status(404).json({error: 'Professor não encontrado.'})
        }

        if(!nome) {
            return res.status(400).json({error: 'O nome do professor é obrigatório.'})
        }
        if(!data_admissao) {
            return res.status(400).json({error: 'A data de admissão é obrigatória.'})
        }
        if(!data_admissao.match(/\d{4}-\d{2}-\d{2}/gm)){
            return res.status(400).json({message: "A data de admissão não está no formato correto"})
        }
        if(data_demissao){
            if (!data_demissao.match(/\d{4}-\d{2}-\d{2}/gm)){
                return res.status(400).json({message: "A data de demissão não está no formato correto"})
            }
            dados_professor = { ...dados_professor, data_demissao: data_demissao }
        }
        if(curso_id){
            const curso = await Curso.findByPk(parseInt(curso_id))
            if(!curso){
                return res.status(404).json({error: 'Curso não encontrado.'})
            }
            dados_professor = { ...dados_professor, curso_id: parseInt(curso_id) }
        }

        dados_professor = { nome: nome, data_admissao: data_admissao, ...dados_professor }
        professor.update(
            dados_professor
        )
        professor.save()

        res.status(200).json(professor)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error: 'Erro ao criar o professor'})
    }
})

module.exports = routes