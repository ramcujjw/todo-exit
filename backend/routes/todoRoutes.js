const express =require('express')
const router=express.Router()
router.use(express.json())
const todoData=require('../models/todo')
require('../db/connection')
// router.use(express.urlencoded{extended :true})

//get
router.get('/',async(req,res)=>{
    try{
    const todos = await todoModel.find(req.body)
    res.status(200).send((todos))
    }catch(error){
        console.log(error)
    }
})


//post
router.post('/add',async(req,res)=>{
    try{
    var item =req.body;
    const data1 = await todoModel.findById(item)
    const saveData =save.data1()
    res.status(200).send('post successful')
}catch(error){
    res.status(404).send('post unsuccessful')
}
})


//delete 
router.delete('/delete/:id',async(req,res)=>{
    try{
    var todo =req.params.body;
    const data1 =await todoModel.findByIdAndDelete(id)
    
    res.status(200).send('delete success')
}catch(error){
    res.status(404).send('delete unsuccessful')
}
})

module.exports=router