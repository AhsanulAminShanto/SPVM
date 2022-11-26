const mysql=require("mysql")
require("dotenv").config()
module.exports=db=mysql.createPool({
                 host:process.env.HOST,
                // host:process.env.HOST,
                user:"shanto",
                password:process.env.PASSWORD,
                database:process.env.DATABASE
                
}
)

