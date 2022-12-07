import React from 'react'
import '../Style/Section6.css'
import Ireti from '../Images/Group 130.png'
import Bayo from '../Images/Group 130 (1).png'
import Olagoke from '../Images/Group 205.png'

const Section6 = () => {
  return (
    <div className='reviews'>
        <h1>Customer's Review</h1>
        <div className='float'>
<div className='union1'>
<img src={Ireti} srcset="" />

</div>
<div className='union2'>
<img src={Bayo} alt="" />
</div>
<div className='union3'>
<img src={Olagoke} alt="" />
</div>
        </div>
    </div>
  )
}

export default Section6