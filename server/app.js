const express=require("express")
const app=express()
const db=require("./config/CreateConnection")
require("dotenv").config()
const cors=require("cors")
const mysql=require("mysql")
const router=require("./routes/Router")

// console.log(process.env.PASSWORD)
db.getConnection(_=>{

    db.query('use Iras',(err,result)=>{
        console.log(err);

        // console.log(err.sqlState)
    })
    // db.query('select *from shanto',(err,result)=>{
    //     console.log(result)
    // })

})

app.use(cors())
app.use("/",router)

// app.use("/",()=>{
//     console.log("hello ")
// })
app.get("/",(req,res)=>{
    res.send("fuck you")
})


app.listen(4000,()=>{
    console.log("server is running")
})
