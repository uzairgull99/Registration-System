import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink,Link} from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions';


function Header() {

  

  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  console.log(auth)

  const logout=()=>{

    dispatch(signout())

  }

  const renderSigninUserLinks=()=>{
    return(   
       <Nav>
       <li className='nav-item'>
       {/* <NavLink to="/signin"  onClick={logout}className="nav-link"style={{fontSize:"1.3rem", marginRight:"0.9rem"}}>Sign out</NavLink> */}
       <span className="nav-link" onClick={logout} style={{fontSize:"1.3rem", marginRight:"0.9rem"}}>Sign out</span>
       </li>
       </Nav>
    )
  }

  const renderNotSigninUserLinks=()=>{
    return(   
      <Nav>
      <li className='nav-item'>
      <NavLink to="/signin"  className="nav-link"style={{fontSize:"1.3rem", marginRight:"0.9rem"}}>Sign in</NavLink>
      </li>
      <li className='nav-item'>
      <NavLink to="/signup"  className="nav-link"style={{fontSize:"1.3rem"}}>Sign up</NavLink>
      </li>
      </Nav>  
    )
  }

  return (
    <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{padding:"1rem" ,zIndex:"1"}} >
      <Container fluid>
      
        {/* <NavLink  to="/" className="nav-link" style={{fontSize:"1.3rem"}}>Admin Dashboard</NavLink> */}
      <Link to="/" className='navbar-brand' style={{fontSize:"1.5rem"}}>Admin Dashboard</Link>
    
        {/* <NavLink  to="" style={{fontSize:"1.3rem"}}>Admin Dashboard</NavLink> */}

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          {/* <Nav>
            <li className='nav-item'>
            <NavLink to="/signin"  className="nav-link"style={{fontSize:"1.3rem", marginRight:"0.9rem"}}>Sign in</NavLink>
            </li>
            <li className='nav-item'>

            <NavLink to="/signup"  className="nav-link"style={{fontSize:"1.3rem"}}>Sign up</NavLink>
            </li> */}

            {/* <Nav.Link eventKey={2} href="#memes">
              Sign in
            </Nav.Link> */}
          {/* </Nav> */}
         {auth.authenticate ? renderSigninUserLinks(): renderNotSigninUserLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header