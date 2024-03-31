const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const mainRoute = require('./routes/main.route')
const errorHandler = require('./controllers/error/error.controller')
require('dotenv').config()

const app = express()

app.use(cors())

app.use(express.json())

app.use(mainRoute)
app.use(errorHandler)

const port = process.env.port || 5000

mongoose.connect(process.env.MONGODB_URL).then(() => {

    app.listen(port, () => {
        console.log(`server start on ${port}`)
    })
})