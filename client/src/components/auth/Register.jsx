import React, {useState} from 'react'
import '../css/styles.css'

const Register = () => {
  return (
    <div className='register-body'>
      <div className="register-container">
        <div className="login-form">
          <form>
            <h3>Sign Up</h3>
            <div className="mb-3">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="mb-3">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p className="forgot-password text-right">
              Already registered <a href="/login">sign in?</a>
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