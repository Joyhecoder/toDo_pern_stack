import React, {useState} from 'react'

const InputTodo = () => {
    const [description, setDescription] = useState('');
    console.log(description)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
        } catch (error) {
            console.error(error.message)
        }

    }
  return (
    <>
        <h1 className='text-center my-5'>Input to do</h1>
        <form action="" className='d-flex' onSubmit={handleSubmit}>
            <input type="text" placeholder='add todo' className="form-control" value={description} onChange={e=>setDescription(e.target.value)} />
            <button className='btn btn-success'>Add</button>

        </form>
    
    </>
  )
}

export default InputTodo