import React from 'react'
import Rectangle from '../Images/Rectangle 26.png'
import {Link} from 'react-router-dom'
import '../Style/Signup.css'

const Signup = () => {
  return (
    <div className='Signup'>
        <div>
            <p>You're Almost In!</p>
        </div>
        <div className='ire'>
        <h5>Welcome Iretiayo</h5>
        </div>
        <div className='mail'>
          <img src={Rectangle} alt="" />
        </div>
        <div className='activation'>
          <p>An activation link has been sent to Ireti4tech@gmail.com Please click on the link to verify your email and activate your TradExpress account.</p>
        </div>
        <div className='up'>
    <Link className='signin1'>Sign Up</Link>
        </div>
        <div className='an'>
          <p>Already have an account? <Link to='/business' className='signin2'>Click here</Link></p>
        </div>
    </div>
  )
}

export default Signup