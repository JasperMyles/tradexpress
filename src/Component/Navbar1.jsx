  import React from 'react'
  import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
  import TradExpresslogo from '../Images/TradExpress.png'
  import { Link } from 'react-router-dom'
  import '../Style/Navbar.css'


  const Navbar1 = () => {
    const style = {
      backgroundColor: "#7C20BE",
    }
    return (
      <div className='Navigation'>
      <Navbar className='Navbarone' expand="lg">
      <Container>
        <Navbar.Brand><Link to="/"><img src={TradExpresslogo} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle className='col' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto floatnav">
            <Link className='Linkone' to="/instant">Instant Buy/Sell</Link>
            <Link className='Linkone1'>Learn</Link>
            <Link to="/login" className='login'>Login</Link>
            <Link className='started' to="/getstarted">Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }

  export default Navbar1;