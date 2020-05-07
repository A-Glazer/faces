const express = require('express')
const Datastore = require('nedb')

const app = express()
app.listen(5000, () => console.log('listening at 5000'))
app.use(express.static('public'))
app.use(express.json())

const database = new Datastore('database.db')
database.loadDatabase() //this will load the existing database when the file starts 
database.insert({name: "Blob", status: "slimey"})
database.insert({name: "Shmear", status: "wet"})

app.post('/api', (request, response) => {
    console.log("request", request.body)
    response.json({
        status: "success",
        latitude: request.body.lat,
        longitude: request.body.lon
    })
})