const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

routes
  .get('/', (req, res) => res.sendFile(views + '/index.html'))
  .get('/profile', (req, res) => res.sendFile(views + '/profile.html'))
  .get('/job', (req, res) => res.sendFile(views + '/job.html'))
  .get('/job/edit', (req, res) => res.sendFile(views + '/job-edit.html'))

module.exports = routes