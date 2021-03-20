const express = require('express')
const server = express()

// Métodos HTTP => Mostrar como acessar ao curso 
// GET: Pegar um recurso
// 1. server.get('/', () => console.log('cheguei na rota'))

// Request e Response
// Request: pedido ao servidor
// Response: resposta do servidor
// 2. server.get('/', (request, response) => response.send('mensagem de retorno'))

server.listen(3000, () => console.log('server on'))