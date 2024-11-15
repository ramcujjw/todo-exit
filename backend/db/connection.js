const mongoose = require ('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('connection established')
}).catch((error)=>{
    console.log(error)
})