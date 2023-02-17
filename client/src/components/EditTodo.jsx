import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditTodo = ({ todo }) => {
    console.log(todo);
    console.log(todo.todo_id)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //this is to work with showing the current todo in the input
  const [description, setDescription] = useState(todo.description)
  console.log(description)

  //handle save change function
  const handleUpdate = async (id) => {
    try {
        const body = { description }
        
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        });
        console.log(response);

        handleClose()

        //this is to refresh the page automatically so it will call the api to get data from db to display
        window.location = "/";
    } catch (error) {
        console.error(error.message)
    }
  }
  return (
    <>
        <Button variant="warning" onClick={handleShow}>
       Edit
        </Button>

      <Modal show={show} onHide={()=>{handleClose(); setDescription(todo.description)}}>
        <Modal.Header closeButton onClick={()=> setDescription(todo.description)}>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input type="text" className='form-control' value={description} onChange={e=> setDescription(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{handleClose(); setDescription(todo.description)}}>
            Close
          </Button>
          <Button variant="warning" onClick={()=> handleUpdate(todo.todo_id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditTodo