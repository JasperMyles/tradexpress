import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import '../Style/LoginPage.css'

const LoginPage = () => {
  return (
    <div>
        <div className='Wel1'>
            <div className='Wel2'>
                <h1>Welcome</h1>
            </div>
            <div>
        <Form className='form2'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className='checker'>
      <div className='checker1'>
      <input type="checkbox" />Remember Password
      </div>
      <div>
        <Link className='linked'>Forget Password</Link>
      </div>
      </div>
      <Link to='/signin' className='login1' variant="primary" type="submit">
        Login
      </Link>
      <div className='checker2'>
        <p>New User? <Link className='linked'>Click here</Link></p>
      </div>
    </Form>
    </div>
    </div>
    </div>
  )
}

export default LoginPage;