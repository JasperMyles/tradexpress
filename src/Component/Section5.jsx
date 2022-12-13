import React from 'react'
import '../Style/Section5.css'
import Group27 from '../Images/Group 68@2x.png'
import Group28 from '../Images/Group 69.png'
import {Link} from 'react-router-dom'

const Section5 = () => {
  return (
    <div className='tradingToday'>
        <div className='ready'>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h1>Create your account for free and start trading today!</h1>
        </div>
        <div className='Bot'>
            <Link className='Get'>Get Started</Link>
        </div>
        <div className='image'>
            <span className='image1'><img src={Group27} alt="" srcset="" /></span>
            <span className='image2'><img src={Group28} alt="" /></span>
        </div>
    </div>
  )
}

export default Section5