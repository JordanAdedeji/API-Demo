require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const languagesRouter = require('./routes/languages')
app.use('/languages', languagesRouter)

app.listen(3000, () => console.log('Server Started'))