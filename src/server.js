const express = require('express')
const server = express()
const routes = require('./routes.js')

// configure static files middleware
server.use(express.static('public'))
server.use(routes)

server.listen(3000, () => console.log('server on'))