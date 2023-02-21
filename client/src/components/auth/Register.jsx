import React, {useState} from 'react'
import '../css/styles.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  console.log(fName, lName)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const body = { fName, lName, email, password }
      let response = await fetch('http://localhost:5000/register', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log(response);
      navigate('/login')

    } catch (error) {
      console.error(error.message)
    }
   
  }
  return (
    <div className='register-body'>
      <div className="register-container">
        <div className="register-form">
          <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={fName}
                onChange={e=>setFName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" value={lName} onChange={e => setLName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email} onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-warning" onClick={(e)=>handleSubmit(e)}>
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login" >sign in?</a>
            </p>
          </form>
        </div>

        <div className="picture-container">
            
              <img className='register-pic' src="https://www.pngarts.com/files/4/Cute-Cartoon-Transparent-Background-PNG.png" alt="cartoonImg" />
              <img className="toDo-pic" src="https://img.freepik.com/premium-vector/list-hand-drawing-doodle-checklist-vector-illustration_538636-231.jpg?w=2000" alt="" />
            
            
        </div>
      </div>
    </div>
  )
}

export default Register