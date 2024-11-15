const mongoose = require ('mongoose')

const todoSchema=mongoose.Schema({
    "todotask":String,
    "status":String

})

const todoData = mongoose.model('todo',todoSchema)
module.exports=todoData