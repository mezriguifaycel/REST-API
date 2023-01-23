const express = require('express')
const mongoose = require('mongoose')
const UserRouter = require('./Routes/UserRouter')
const dotenv = require('dotenv')

dotenv.config()

 
const app = express()

app.use(express.json())

app.use('/api/users', UserRouter )

mongoose.connect(process.env.MONGO_URI,err=> err? console.log(err) : console.log('The DB is Connected') )

const PORT = process.env.PORT;

app.listen(PORT, err=> err? console.log(err) : console.log(`The server is running on ${PORT}`) )