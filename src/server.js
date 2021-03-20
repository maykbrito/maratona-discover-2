const express = require('express')
const server = express()

// Métodos HTTP => Mostrar como acessar ao curso 
// GET: Pegar um recurso
// 1. server.get('/', () => console.log('cheguei na rota'))

// Request e Response
// Request: pedido ao servidor
// Response: resposta do servidor
// 2. server.get('/', (request, response) => response.send('mensagem de retorno'))


// Enviar .html
server.get('/', (request, response) => {

  // caminho precisa ser absoluto até o diretório raiz
  // o que é caminho absoluto?
  // o que é diretório raiz?
  response.sendFile(__dirname + '/index.html')
})

server.listen(3000, () => console.log('server on'))