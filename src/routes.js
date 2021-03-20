const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

routes
  .get('/', (req, res) => res.render(views + '/index'))
  .get('/profile', (req, res) => res.render(views + '/profile'))
  .get('/job', (req, res) => res.render(views + '/job'))
  .get('/job/edit', (req, res) => res.render(views + '/job-edit'))

module.exports = routes