const express = require('express')
const Datastore = require('nedb')

const app = express()
app.listen(5000, () => console.log('listening at 5000'))
app.use(express.static('public'))
app.use(express.json())

const database = new Datastore('database.db')
database.loadDatabase() //this will load the existing database when the file starts 

app.get('/api', (request, response) => {
    response.json({ test: 123 })
} )


app.post('/api', (request, response) => {
    const data = request.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    response.json(data)
})