// const router = require("express").Router()
// const pool = require("../db")

// //registering
// router.post("/register", async (req, res) => {
//     try{
//         //1. destructure the req.body(f and l name, email, password)
//         const { fName, lName, email, password } = req.body
//         //2. check if the user exist (if user exists then throw error)
//         const user = await pool.query("SELECT * FROM users WHERE email = $1", [email])
//         res.json(user.rows)
//         //3. Bcrypt the user password

//         //4. enter the new user inside our db

//         //5. generating our jwt token
//     }catch(error){
//         console.error(error.message)
//         res.status(500).send("Server Error")
//     }
// })


// module.export = router;