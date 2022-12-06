const mysql=require("mysql")
require("dotenv").config()
module.exports=db=mysql.createPool({
                 host:process.env.HOST,
                // host:process.env.HOST,
                user:"root",
                password:"",
                database:process.env.DATABASE
                
}
)

