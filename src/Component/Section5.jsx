import React from 'react'
import '../Style/Section5.css'
import Group68 from '../Images/Group 68@2x.png'
import Group69 from '../Images/Group 69.png'

const Section5 = () => {
  return (
    <div className='tradingToday'>
        <div className='ready'>
        <p>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h1>Create your account for free and start trading today!</h1>
        </div>
        <div className='bot'>
            <button>Get Started</button>
        </div>
        <div className='image'>
            <span className='image1'><img src={Group68} alt="" srcset="" /></span>
            <span className='image2'><img src={Group69} alt="" /></span>
        </div>
    </div>
  )
}

export default Section5