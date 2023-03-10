import React, {useState, useEffect} from 'react'
import './css/styles.css';

const InputTodo = () => {
    const [description, setDescription] = useState('');
    console.log(description)




    const handleSubmit = async (e) => {
        // e.preventDefault();
        try {
            const body = { description }

            //this is to fetch the backend POST route to create a todo in the db
            //body need to be stringify, convert from obj => string
            const response = await fetch('http://localhost:5000/todos',{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response);
        } catch (error) {
            console.error(error.message)
        }

    }
  return (
    <div className='inputTodo-container'>
        <h1 className='text-center my-5'>Input to do</h1>
        <form action="" className='d-flex todo-input' onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" placeholder='add todo' className="form-control" value={description} onChange={e=>setDescription(e.target.value)} />
            <button className='btn btn-success'>Add</button>

        </form>
    
    </div>
  )
}

export default InputTodo