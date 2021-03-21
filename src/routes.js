const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

const profile = {
  name: "Jakeliny",
  avatar: "https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4",
  "monthly-budget": 3000,
  "hours-per-day": 4,
  "days-per-week": 5,
  "vacation-per-year": 4,
  "value-hour": 75
}

const jobs = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    status: "progress",
    total: 4500,
    remaining: 3
  },
  {
    id: 2,
    name: "OneTwo Project",
    status: "done",
    total: 4500,
    remaining: 3
  },
]

routes
  .get('/', (req, res) => res.render(views + '/index', { jobs }))
  .get('/profile', (req, res) => 
    res.render(views + '/profile', { profile })
  )
  .get('/job', (req, res) => res.render(views + '/job'))
  .post('/job', (req, res) => {
    jobs.push(req.body) // colocar os dados em uma variável

    res.redirect('/') // redireicionar a página para o home
  })
  .get('/job/edit', (req, res) => res.render(views + '/job-edit'))

module.exports = routes