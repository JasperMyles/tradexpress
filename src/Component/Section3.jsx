import React, { useState } from 'react'
import '../Style/Section3.css'
import Easy from '../Images/rafiki.png'
import Financial from '../Images/amico.png'
import Investment from '../Images/cuate.png'
import {Link} from 'react-router-dom'
import {useRef} from "react"

const Section3 = () => {
    const [data, setData] = useState("See Less")
    const divRef = useRef();

  return (
    <div className='getInvolved'>
        <div className='people'>
            <h1>Why do people get involved with Cryptocurrencies</h1>
            <button onClick={()=>{
                if(divRef.current.classList.contains("active")){
                    divRef.current.classList.remove("active");
                    setData("See Less");
                    console.log("hh");
                } else{
                    divRef.current.classList.contains("active")
                    divRef.current.classList.contains.add("active")
                    setData("See More");
                }
            }} className='bit'>{data}</button>
             <div ref={divRef} className='see'>
            <div className='Easy1'>
                <img src={Easy} alt="" srcset="" />
                <h5>Easy Mode of Payment</h5>
                <p>People can now easily send and receive money from anywhere in 
                    the workd to purchase goods and pay for services.</p>
                    </div>
                <div className='Easy2'>
                <img src={Investment} alt="" srcset="" />
                <h5>financial Freedom</h5>
                <p>Just like the internent no single entity controls the crypto network
                    which providees users transparency and privacy, which puts you in absolute control of your money.
                </p>
            </div>
            <div className='Easy3'>
                <img src={Financial} alt="" srcset="" />
                <h5>Investment</h5>
                <p>The constant demand as made Cryptocurrencies a Digital 
                    Gold used for alternatives store of wealth on long term investments.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Section3