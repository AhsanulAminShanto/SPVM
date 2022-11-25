const express=require("express")
const app=express()
const db=require("./config/CreateConnection")
require("dotenv").config()

const mysql=require("mysql")

// console.log(process.env.PASSWORD)
db.connect(_=>{

    db.query('use Iras',(err,result)=>{
        console.log(err);
    })
})


// app.use("/",()=>{
//     console.log("hello motherfucker")
// })
app.get("/",(req,res)=>{
    res.send("fuck you")
})


app.listen(4000,()=>{
    console.log("server is running")
})