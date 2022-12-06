const express=require("express")
const app=express()
const db=require("./config/CreateConnection")
require("dotenv").config()
const cors=require("cors")
const mysql=require("mysql")
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
