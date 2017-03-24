'use strict'

const express = require('express')
const fs = require('fs')
const http = require('http')
const app = express()
const server = require('http').Server(app)
const monody = require('monody')
const response = require('monody/utils').response
const saveData = require('./firebase').saveData

app.get('/', function (req, res) {
  res.send(fs.readFileSync(`${__dirname}/index.html`, 'utf8'))
})

function monitorNodesjsOrgServer(callback, options, taskStatus) {
  const start = new Date()
  const httpOptions = {
    method: 'GET',
    host: 'nodejs.org',
    path: '/en/',
    port: 443,
  }
  
  http.request(httpOptions, (res) => {
    const elapsed = new Date() - start
    console.log('elapsed', elapsed);
    saveData('nodejs_org', elapsed)
    callback(response(true, { elapsed }))
  }).on('error', (err) => {
    callback(response(false, {}, 'http.request error', err), 'http', tasksStatus);
  }).end()
}

// start monitoring
monody.addTask(monitorNodesjsOrgServer, () => null, 5000)
monody.start()

server.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!')
})

