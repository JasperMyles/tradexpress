import React from 'react'
import '../Style/Section2.css'
import { useState, useEffect } from 'react';

const Section2 = ({newRate}) => {

  return (
    <div>
{newRate.map((e)=>{
return <div  key={e.id}>
  <div className='coins'>
    <div>
  <p>{e.name}</p>
  </div>
  <div>
  <p>{e.price_usd}$</p>
  </div>
  <div>
  <p>{e.percent_change_7d}%</p>
  </div>
  </div>
</div>
})}

    </div>
  )
}

export default Section2