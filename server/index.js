const express = require('express')
const app = express()
const port = 5000
const cors = require("cors")

//middleware, this allows frontend and backend to interact with each other
//localhost 3000 and 5000
app.use(cors())
app.use(express.json()) //this allows us to access the req.body

app.listen(port, () => {
    console.log(`Server is starting on port ${port}`)
})