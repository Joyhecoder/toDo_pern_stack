const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")
const pool = require("./db")

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

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`)
})