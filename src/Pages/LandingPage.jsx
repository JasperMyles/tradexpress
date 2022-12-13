import React from 'react'
import Copyright from '../Component/Copyright.jsx'
import Section1 from '../Component/Section1.jsx'
import Section2 from '../Component/Section2.jsx'
import Section3 from '../Component/Section3.jsx'
import Section4 from '../Component/Section4.jsx'
import Section5 from '../Component/Section5.jsx'
import Section6 from '../Component/Section6.jsx'
import Section7 from '../Component/Section7.jsx'
const LandingPage = ({rates}) => {
  
  return (
    <div>
     <Section1/>
     <Section2 newRate={rates}/>
     <Section3/>
     <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Copyright/>


    </div>
  )
}

export default LandingPage