const db=require("../config/CreateConnection")
const mysql=require('mysql')
const login=(req,res)=>{

    const {id, password,role}=req.body
    // console.log(id,password,role)
if(role==='student')
{
    db.query('select *from student where ID='+mysql.escape(id),(err,result)=>{

        if(err)
            res.send(null)
        else
            res.send(result)
    })
}

    // console.log(id,password,role)
    if(role==='faculty')
    {
        db.query('select *from faculty where ID='+mysql.escape(id),(err,result)=>{
    
            if(err)
                res.send(null)
            else
                res.send(result)
        })
    }
        // console.log(id,password,role)
if(role==='coordinator')
{
    db.query('select *from coordinator where ID='+mysql.escape(id),(err,result)=>{

        if(err)
            res.send(null)
        else
            res.send(result)
    })
}
    // console.log(id,password,role)
    if(role==='deptHead')
    {
        db.query('select *from head_of_the_department where ID='+mysql.escape(id),(err,result)=>{
    
            if(err)
                res.send(null)
            else
                res.send(result)
        })
    }
        // console.log(id,password,role)


   
}



module.exports=login