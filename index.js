const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
    extended: true,
}))

app.listen(port, () => {
    console.log("Servidor rodando na porta de conexão ${port}.")
})

app.get('/', (request, response) => {
    response.json({ aplicacao: 'CRUD TRABALHO FULL STACK' })
})

const repository = require('./repository')

app.post('/Politico', repository.createPolitico)
app.get('/Politico/',  repository.getPolitico)
app.get('/Politico/:id', repository.getPoliticoById)
app.post('/Voto', repository.createvoto)
app.get('/Voto/', repository.getVoto)
app.put('/Voto/:id', repository.updateVoto)
app.get('/Voto/:id', repository.getVotoById)
app.post('/Sessao', repository.createSessao)
app.get('/Sessao/', repository.getSessao)
app.get('/Sessao/:id', repository.getSessaoById)
