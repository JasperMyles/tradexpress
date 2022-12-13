import React from 'react'
import '../Style/Instant.css'
import {Link} from 'react-router-dom'
import {Form, InputGroup} from 'react-bootstrap'
const Instant = () => {
  return (
    <div className='Instant1'>
        <div className='wel2'>
 <h1>Buy/Sell Instantly</h1>
 </div>
         <div className='getstarted5'>
          <div className='bit5'>
      <Link className='Link5' to="/instant">Buy</Link>
      </div>
      <div className='bit6'>
      <Link className='Link6' to='/instant2'>
        Sell
        </Link>
        </div>
      </div>
      <div>
      <Form className='Fullform3'>
      <Form.Group className="mb-3">
        <Form.Select>
          <option>Bitcoin (BTC)</option>
          <option>Etherum (ETH)</option>
          <option>Tron (TRX)</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select>
          <option>Naira (NGN)</option>
          <option>Dollars ($)</option>
          <option>Pounds ($)</option>
        </Form.Select>
      </Form.Group>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">NGN</InputGroup.Text>
        <Form.Control
          placeholder="3 000,000.00"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
          <div className='continue'>
            <Link className='Get3'>Continue</Link>
          </div>
    </Form>
    </div>
    </div>
  )
}

export default Instant