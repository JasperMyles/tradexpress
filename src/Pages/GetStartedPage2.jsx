import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/GetStartedPage2.css'
import {Form} from 'react-bootstrap'

const GetStartedPage2 = () => {
  return (
    <div className='Welcomeback'>
      <div className='wel'>
 <h1>Welcome</h1>
 </div>
 <div className='getstarted2'>
          <div className='bit3'>
      <Link className='Link1' to="/getstarted">Individual</Link>
      </div>
      <div className='bit4'>
      <Link className='Link2' to='/business'>
        Business
        </Link>
        </div>
      </div>
      <div>
      <Form className='Fullform2'>
      <Form.Group className="mb-3 mt-3" controlId="Uname">
        <Form.Control type="Uname" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Fname">
        <Form.Control type="fname" placeholder="Business Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="enterMail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Phone">
        <Form.Control type="tel"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRcode">
        <Form.Control type="rcode" placeholder="Referral Code (optional)" />
      </Form.Group>
      <div>
            <p>By clicking the Sign Up button below, you agree to TradExpress <Link className='terms'>terms and services</Link></p>
          </div>
          <div className='getstarted4'>
            <Link className='Get3'>Sign Up</Link>
          </div>
          <div>
            <p>Already have an account? <Link className='terms'>Click here</Link></p>
          </div>
    </Form>
    </div>
    </div>
  )
}

export default GetStartedPage2