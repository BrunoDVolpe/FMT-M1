const { Router } = require('express')
const alunosRoutes = require('./alunos.routes')
const cursosRoutes = require('./cursos.routes')
const professoresRoutes = require('./professores.routes')
const loginRoutes = require('./login.routes')

const routes = Router()

routes.use('/alunos', alunosRoutes)
routes.use('/cursos', cursosRoutes)
routes.use('/professores', professoresRoutes)
routes.use('/login', loginRoutes)

module.exports = routes