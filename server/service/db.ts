import mysql from "mysql2";

export const db = mysql.createPool({
    host:"us-cdbr-east-06.cleardb.net",
    user:"bbb8438d365f82",
    password:"f38b2f2c",
    database:"heroku_e58ea74e6228d50"
})