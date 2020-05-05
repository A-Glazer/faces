const express = require('express')
const app = express()
app.listen(5000, () => console.log('listening at 5000'))
app.use(express.static('public'))
app.use(express.json())
app.post('/api', (request, response) => {
    console.log(request.body)
    response.json({
        status: "success",
        latitude: request.body.lat,
        longitude: request.body.lon
    })
})