const connection = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config();

const pool = connection.createPool({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port :  process.env.DB_PORT
})
module.exports = {
    pool
}