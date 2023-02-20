// const express = require('express')
// const app = express()
// const cors = require("cors")
// const pool = require("../db")

// //create an account
// app.post("/register", async (req, res) => {
//     try{
//         const { fName, lName, email, password } = req.body
//         const newAccount = await pool.query(`INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`, [fName, lName, email, password]);

//         res.json(newAccount.rows[0])
//     }catch(error){
//         console.error(error.message);
//     }
// })