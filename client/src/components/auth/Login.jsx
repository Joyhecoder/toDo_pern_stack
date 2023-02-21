import React, {useState, useEffect} from 'react'
import '../css/styles.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginErr, setLoginErr] = useState()
  console.log(loginErr);

useEffect(() => {
  setLoginErr()
}, [email, password])



  const navigate = useNavigate()
  // console.log(email, password)
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const body = { email, password }
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      console.log("login response", response);
      if(response.status === 200){
        navigate('/')
      }else{
        setLoginErr(true)
        // console.log(loginErr)
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className='register-body'>
      <div className="register-container">
        <div className="login-form">
          <form>
            <h3>Sign In</h3>
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
                Sign In
              </button>
            </div>
            <p className="forgot-password text-right">
              New User? <a href="/register" >Register</a>
            </p>
            
          </form>
          {loginErr ? 
          <div className="loginErr">
            <h6>Login incorrect!</h6>
          </div>
          
          :
          <></>}
        </div>

        <div className="picture-container2">
            
              <img className='register-pic' src="https://media.tenor.com/8IZLXcKEjF4AAAAM/brown-bear-typing.gif" alt="cartoonImg" />
             
            
            
        </div>
      </div>
    </div>
  )
}

export default Login