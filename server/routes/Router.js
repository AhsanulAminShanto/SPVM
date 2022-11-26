const express=require('express')
const router=express.Router()
const DummyControl=require('../controllers/DummyController')
router.get("/dummy",DummyControl)





module.exports=router