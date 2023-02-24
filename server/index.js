const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")
const pool = require("./db")
const e = require('express')

//middleware, this allows frontend and backend to interact with each other
//localhost 3000 and 5000
app.use(cors())
app.use(express.json()) //this allows us to access the req.body

//ROUTES//

//get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        console.log(res.json(allTodos.rows));
    } catch (error) {
        console.error(error.message)
        console.log(error);
    }
})

//get a todo

app.get("/todos/:id", async (req, res) => {
    // console.log(req.params)
    try {

        const { id } = req.params
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0])

        
    } catch (error) {
        console.error(error.message)
    }
})

//create a todo
app.post("/todos", async (req, res) => {
    try {
       
        const { description } = req.body;
        //now insert the description into the db: (note: ($1) is a place holder and it is clarified by the second argument [description] )
        //RETURNING * => helps to return the data in the beekeeper to display the new added data
        const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [description]);
        //newTodo will display the whole table info but we only want to access rows[0] for easier reading
        res.json(newTodo.rows[0])

    } catch (error) {
        console.error(error.message)
        console.log(error);
    }
})

//create a shopping todo
app.post("/shoppingTodos", async (req, res) => {
    try {
        const { ingredients } = req.body;

        //convert ingredients which is in array to a string
        // const convertedArraytoStr = ingredients.join(",")

        //add shop for into the string
        const ingredientsStr = "Shop for".concat(" ", ingredients)
       
        //create the data into db
        const newTodos = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING *', [ingredientsStr])
        res.json(newTodos.rows[0])
    }catch (error){
        console.log(error)
    }
})

//update a todo
app.put('/todos/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const { description } = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description=$1 WHERE todo_id = $2", [description, id])
        res.json("todo was updated")

    }catch (error) {
        console.error(error.message);
    }
})

//delete a todo
app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("todo was deleted")
    } catch (error) {
        console.error(error.message)
    }
})

//!register routes
//create an account
app.post("/register", async (req, res) => {
    const { fName, lName, email, password } = req.body

    try{
        //check to see if user is already in db
        let records = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]) //[{},{}]
        console.log(records.rows, "register route");
        if(records.rows.length !== 0){
            //email is registered in db, so send back an error message to react
            return res.status(422).json({error: "Email already exists"})
        }else{
            //create an account
            const newAccount = await pool.query(`INSERT INTO users (fname, lname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`, [fName, lName, email, password]);

            res.json(newAccount.rows[0])
        }

        
    }catch(error){
        console.error(error.message);
    }
})

//check an account
app.post("/login", async (req, res) => {
    //1. destructure the req.body
    console.log(req.body);
    const { email, password } = req.body
  
    // console.log("password from body", password);

    try {
        const response = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
       console.log("response: ", response);
        // console.log("response:", response.rows[0]);
        // console.log("password:", response.rows[0].password);
        //2. check if user doesn't exist (if not then we throw error)
        if(response.rowCount === 0){
            console.log("insdie no email");
            return res.status(405).json({message: "no email found"})
        }
        //3. check if incoming password is the same the database password
        else if(response.rows[0].password == password){
           
            console.log("login successfully")
            res.send("login right")
        }else{
            console.log("login credential incorrect!")
            return res.status(401).json("Password or Email is incorrect")
            
        }
    } catch (error) {
        console.error(error.message)
    }
})


//register and login routes
// app.use("/auth", require("./routes/jwtAuth"))

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`)
})