const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'BancoVotos',
    password: '1103',
    port: 5432,
})

const createPolitico = (request, response) => {
    const { usuario, login, senha} = request.body

    pool.query('INSERT INTO Politico ( usuario, login, senha) VALUES ($1, $2, $3)', [ usuario, login, senha], (error, result) => {
    if (error) {
        throw error
    }
    response.status(201).send(`Politico adicionado com sucesso.`)
    })
}
const getPolitico = (request, response) => {
    pool.query('SELECT * FROM Politico ORDER BY id ASC', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}
const getPoliticoById = (request, response) => {
    const id= parseInt(request.params.ID)

    pool.query('SELECT * FROM Politico WHERE id = $1', [ID], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}

const createvoto = (request, response) => {
    const { id_Sessao, id_Politico, resposta, Estado} = request.body

    pool.query('INSERT INTO Voto ( id_Sessao, id_Politico, resposta, Estado) VALUES ($1, $2, $3, $4)', [ id_Sessao, id_Politico, resposta, Estado], (error, result) => {
    if (error) {
        throw error
    }
    response.status(201).send(`Voto realizado com sucesso.`)
    })
}
const getVoto = (request, response) => {
    pool.query('SELECT * FROM Voto ORDER BY id ASC', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}
const getVotoById = (request, response) => {
    const id= parseInt(request.params.ID)

    pool.query('SELECT * FROM Voto WHERE id = $1', [ID], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}



const updateVoto = (request, response) => {
    const id = parseInt(request.params.ID)
    const { Resposta, Estado } = request.body

    pool.query(
    'UPDATE Voto SET Resposta = $1, Estado = $2, WHERE id = $3',
    [Resposta, Estado, id],
    (error, result) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Voto ${id} atualizado com sucesso.`)
    }
    )
}
const createSessao = (request, response) => {
    const { opcao1, opcao2} = request.body

    pool.query('INSERT INTO Sessao ( opcao1, opcao2) VALUES ($1, $2)', [ opcao1, opcao2], (error, result) => {
    if (error) {
        throw error
    }
    response.status(201).send(`Voto realizado com sucesso.`)
    })
}

const getSessao = (request, response) => {
    pool.query('SELECT * FROM Sessao ORDER BY id ASC', (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}
const getSessaoById = (request, response) => {
    const id= parseInt(request.params.ID)

    pool.query('SELECT * FROM Sessao WHERE id = $1', [ID], (error, results) => {
    if (error) {
        throw error
    }
    response.status(200).json(results.rows)
    })
}


module.exports = {
    createPolitico,
    getPolitico,
    getPoliticoById,
    createvoto ,
    getVoto,
    updateVoto,
    createSessao,
    getSessao,
    getSessaoById,
    getVotoById,
}