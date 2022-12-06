const db=require('../config/CreateConnection')
const mysql=require('mysql')
const getData=async(req,res)=>{

    const {id}=req.body
    console.log(id)

    db.query('select DepartmentName from department where DepartmentID='+mysql.escape(id),(er,result)=>{

        if(er)
        {
            console.log(er)
            res.send("Doentn't exists")
        }
        else
        {
            console.log(result)
            res.send(result)
        }
    })


}

module.exports=getData