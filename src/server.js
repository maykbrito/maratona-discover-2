const express = require('express')
const server = express()
const routes = require('./routes.js')

// view engine
server.set('view engine', 'ejs')

// configure static files middleware
server.use(express.static('public'))

// receber corpo da requisição
server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => console.log('server on'))