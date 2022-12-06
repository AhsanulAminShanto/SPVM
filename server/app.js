const express=require("express")
const app=express()
const db=require("./config/CreateConnection")
require("dotenv").config()
const cors=require("cors")
const mysql=require("mysql")
<<<<<<< HEAD
const router=require("./routes/Router")
const bodyParser=require('body-parser')
// console.log(process.env.PASSWORD)
db.getConnection(_=>{

    db.query('use university',(err,result)=>{
        console.log(err);

        // console.log(err.sqlState)
    })
    // db.query('select *from shanto',(err,result)=>{
    //     console.log(result)
    // })

=======

console.log(process.env.PASSWORD)
db.connect(_=>{

    db.query("use Iras",(err,result)=>{
        console.log(err)
        console.log(result)
    })
   db.query("select *from shanto",(err,result)=>{
    console.log(result)
   })
>>>>>>> b7c74c8dec6b5ed70f0ff5750440c6a92bb4864d
})

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}));

app.use(cors())
app.use("/",router)


// app.use("/",()=>{
//     console.log("hello ")
// })


app.listen(4000,()=>{
    console.log("server is running")
})
