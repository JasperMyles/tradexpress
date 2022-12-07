import React from 'react'
import '../Style/Section4.css'
import One from '../Images/emojione-monotone_keycap-1.png'
import Hello from '../Images/cuateed.png'
import Two from '../Images/emojione-monotone_keycap-2.png'
import Deposit from '../Images/rafiki2.png'
import Three from '../Images/emojione-monotone_keycap-3.png'
import buy from '../Images/cuate3.png'

const Section4 = () => {
  return (
    <div className='main'>

        <h1>Buy and Sell you Cryptocurrency in 3 simple steps</h1>
        <p>Lorem ipsum, sunt aliaste modi saepe debitis.</p>
        <div className='createFree'>
            <div>
                <div className='create'>
                <div>
                <img src={One} alt="" />
                </div>
                <div className='free'>
                <h5>Create a free Account</h5>
                <p>Sign up for your free TradExpress wallet on web, IOS, or Android and follow our <br />
                easy process to set up your profile</p>
                </div>
                </div>
            </div>
            <div className='Helloone'>
    <img src={Hello} alt="" />
            </div>
        </div>
        <div className='createFree'>
            <div className='middle'>
    <img src={Deposit} alt="" />
            </div>
            <div>
                <div className='create'>
                <div>
                <img src={Two} alt="" />
                </div>
                <div className='free'>
                <h5>Deposit</h5>
                <p>Choose your preferred deposit option like bank transfer, credit/debit or send digital
                asset directly to your wallet for easy funding/withdrawal.</p>
                </div>
                </div>
            </div>
            
        </div>

        <div className='createFree'>
            <div>
                <div className='create'>
                <div>
                <img src={Three} alt="" />
                </div>
                <div className='free'>
                <h5>Buy/Sell Crypto</h5>
                <p>Sign up for your TradExpress Wallet on web, IOS, or Android devices follow our easy process to set up your profile</p>
                </div>
                </div>
            </div>
            <div className='buy'>
    <img src={buy} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section4