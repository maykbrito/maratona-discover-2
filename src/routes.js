const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

// Organizar os dados e funções, em um Object Literal, para a entidade Profile
const Profile = {
  data: {
    name: "Jakeliny",
    avatar: "https://avatars.githubusercontent.com/u/17316392?s=460&u=6912a91a70bc89745a2079fdcdad3bc3ce370f13&v=4",
    "monthly-budget": 3000,
    "hours-per-day": 4,
    "days-per-week": 5,
    "vacation-per-year": 4,
    "value-hour": 75
  },
  controller: {
    index(req, res) {
      res.render(views + '/profile', { profile: Profile.data })
    },
    update(req, res) {
      const data = req.body

      const weeksPerYear = 52
      const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12
      const weekTotalHours =  data["hours-per-day"] * data["days-per-week"] 
      const monthlyTotalHours = weekTotalHours * weeksPerMonth
      data["value-hour"] = data["montly-amount"] / monthlyTotalHours

      Profile.data = data

      res.redirect("/profile")
    },
  }
}

// Organizar os dados e funções, em um Object Literal, para a entidade Job
const Job = {
  data: [
    {
      id: 1,
      name: "Pizzaria Guloso",
      "total-hours": 60,
      "daily-hours": 2,
      created_at: Date.now()
    },
    {
      id: 2,
      name: "OneTwo Project",
      "total-hours": 13,
      "daily-hours": 1,
      created_at: Date.now()
    },
    { // prazo encerrado
      id: 3,
      name: "File Project",
      "total-hours": 0,
      "daily-hours": 1,
      created_at: Date.now()
    },
  ], 
  controller: {
    index(req, res){
      let updateJobs = Job.data.map(job => {
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
  
        const date = new Date(job.created_at)
        const dueDay = date.getDate() + Number(remainingDays)
        const dueDate = date.setDate(dueDay)
  
        const timeDiffInMs = dueDate - Date.now()
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = (timeDiffInMs / dayInMs).toFixed()
  
        const status = dayDiff <= 0 ? "done" : "progress"
  
        const budget = Job.service.calculateBudget(job)
  
        return {
          ...job, // espalhar os items do job dentro desse novo objeto
          budget,
          status,
          remaining: dayDiff,
        }
      })
  
      res.render(views + '/index', { jobs: updateJobs })
    },
    create(req, res){
      const lastId = Job.data[Job.data.length - 1]?.id || 1

      Job.data.push({
        id: lastId + 1,
        name: req.body.name,
        "total-hours": req.body["total-hours"],
        "daily-hours": req.body["daily-hours"],
        created_at: Date.now()
      }) // colocar os dados em uma variável
  
      res.redirect('/') // redireicionar a página para o home
    },
    show(req, res) {
      const jobId = req.params.id
      const job = Job.data.find(job => Number(job.id) === Number(jobId))

      if(!job) {
        return res.send("Job not found!")
      }

      job.budget = Job.service.calculateBudget(job).toFixed(2).replace(".", ",")

      res.render(views + '/job-edit', { job })
    },
    update(req, res) {
      const jobId = req.params.id
      const job = Job.data.find(job => Number(job.id) === Number(jobId))

      if(!job) {
        return res.send("Job not found!")
      }
      
      const updatedJob = {
        ...job,
        name: req.body.name,
        "total-hours": req.body["total-hours"],
        "daily-hours": req.body["daily-hours"],
      }

      Job.data = Job.data.map( job => {
        if(Number(job.id) === Number(jobId)) {
          job = updatedJob
        }

        return job
      })

      res.redirect('/job/' + jobId)
    },
    delete(req, res) {
      const jobId = req.params.id

      Job.data = Job.data.filter( job => Number(job.id) !== Number(jobId) )

      res.redirect('/')
    }
  },
  service: {
    calculateBudget: (job) => Profile.data["value-hour"] * job["total-hours"]
  }
}

routes
  .get('/', Job.controller.index)
  .get('/profile', Profile.controller.index)
  .post('/profile', Profile.controller.update)
  .get('/job', (req, res) => res.render(views + '/job'))
  .post('/job', Job.controller.create)
  .get('/job/:id', Job.controller.show)
  .post('/job/:id', Job.controller.update)
  .post('/job/delete/:id', Job.controller.delete)

module.exports = routes