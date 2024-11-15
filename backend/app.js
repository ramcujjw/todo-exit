const express = require ('express')
const app = new express()
// app.use(cors())

require('./db/connection')

require('dotenv').config()
const PORT = process.env.PORT

const todoRoutes=require('./routes/todoRoutes')
app.use('todo',todoRoutes)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})