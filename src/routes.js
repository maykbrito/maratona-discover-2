const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

const profile = {
  name: "Jakeliny",
  avatar: "https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4",
  "montly-amount": 3000,
  "hours-per-day": 4,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hour": 75
}

routes
  .get('/', (req, res) => res.render(views + '/index'))
  .get('/profile', (req, res) => 
    res.render(views + '/profile', { profile })
  )
  .get('/job', (req, res) => res.render(views + '/job'))
  .get('/job/edit', (req, res) => res.render(views + '/job-edit'))

module.exports = routes