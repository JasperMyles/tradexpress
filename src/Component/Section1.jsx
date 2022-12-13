import React from 'react'
import '../Style/Section1.css'
import Group27 from '../Images/Group 68@2x.png'
import Group28 from '../Images/Group 69.png'
import Group247 from '../Images/Group 127.png'
import {Link} from 'react-router-dom'

const Section1 = () => {
  return (
    <div className='section1'>
        <div className='circleBack'>
        <div className='buySell'>
            <h2>Buy, sell and manage your <br /> Crypto on TradExpress.</h2>
            
        </div>
    <div className='easilyTrade'>
        <div>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC</div>
        <span>& XRP with NGN</span>
    </div>
    <div className='Bot'>
    <Link className='Get1' to='/getstarted'>Get Started</Link>
    </div>
    <div className='stores'>
    <div className='span1'><img src={Group27} alt="Apple Store"/></div>
        <div className='span2'><img src={Group28} alt="Google Store"/></div>
    </div>
    </div>

    </div>
  )
}

export default Section1