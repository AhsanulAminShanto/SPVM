const express=require('express')
const router=express.Router()
const DummyControl=require('../controllers/DummyController')
const login=require("../controllers/Login")
const getDept=require('../controllers/GetDept')
router.get("/dummy",DummyControl)
router.post("/login",login)

router.post('/getDept',getDept)
module.exports=router