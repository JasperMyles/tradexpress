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
      <div>
      <Navbar className='Navbarone' expand="lg">
      <Container>
        <Navbar.Brand><Link to="/"><img src={TradExpresslogo} alt="" /></Link></Navbar.Brand>
        <Navbar.Toggle className='col' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='Linkone' href="#home">Instant Buy/Sell</Link>
            <Link className='Linkone' href="#link">Learn</Link>
            <Link className='login' href="#home">Login</Link>
            <Link className='started' to="./getstarted"  href="#home">Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }

  export default Navbar1;