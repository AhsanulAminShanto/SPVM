const db=require('../config/CreateConnection')

const DummyControl=async(req,res)=>{

    db.query("select *from shanto",(err,result)=>{
        console.log(result)
        res.send(result)
    })


}
module.exports=DummyControl