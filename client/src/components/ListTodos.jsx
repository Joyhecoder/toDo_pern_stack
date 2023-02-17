import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import EditTodo from './EditTodo'

const ListTodos = () => {

    const [toDoArray, setToDoArray] = useState([])

    useEffect(() => {
      
        getAllTodo()
    
    }, [])

    const getAllTodo = async () => {
        const response = await fetch('http://localhost:5000/todos')
      
        const data = await response.json()
        // console.log(data)
        setToDoArray(data)
        console.log(toDoArray);
    }


    //delete function
    const handleDelete = async (e) => { 
        e.preventDefault()
        try {
            console.log(e.target.value)
            let id = e.target.value
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            console.log(response)
            await getAllTodo()
        } catch (error) {
            console.error(error.message)
        }
       
       

     }
    
  return (
    <>
    
    <Table striped className="my-5">
      <thead>
        <tr>
          
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
      {toDoArray.length == 0 ? <></>
      :
      toDoArray.map(todo => {
        return (
        <tr key={todo.todo_id}>
          <td>{todo.description}</td>
          <td><EditTodo todo={todo} /></td>
          <td> <th><button className='btn btn-danger' value={todo.todo_id} onClick={(e)=>handleDelete(e)}>Delete</button></th></td>
        </tr>
        )
      })
      
      }
   
        
      
      </tbody>
    </Table>
 
    </>
  )
}

export default ListTodos