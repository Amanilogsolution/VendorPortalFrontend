import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import "./NavBar.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from './profile.svg'


function ClientNavpage() {
  const [show, setshow] = useState(false)
  const [name,setName] = useState()

  let history = useHistory()
  const handleClick = () => {
    window.localStorage.clear();
    history.replace("/","urlhistory")
  }
  
//   useEffect(()=>{
//     setName(localStorage.getItem('cust_name'))
//   },[])

  const handleClickProfile = () => {
    setshow(process => !process);     // We can also use !show in setstate
  }
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <a className="navbar-brand" href="/home"><img className="awllogo" src="https://www.awlindia.com/img/logo.png" alt="AWL Logistics" /> </a>
          {/* <p>Welcome {name}</p> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
            <Nav activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              {/* <NavDropdown title="My Invoices" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/TotalInvoices"> View & Add </NavDropdown.Item>       
              </NavDropdown> */}
{/* 
              <NavDropdown title="My Supporting" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Supporting"> View & Add </NavDropdown.Item>          
              </NavDropdown> */}

              {/* <NavDropdown title="My LR" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/InTransit"> In transit</NavDropdown.Item>  
              <NavDropdown.Item href="/Delivered">Delivered LR</NavDropdown.Item>          
        
              </NavDropdown> */}


              <Nav.Item>
                <Nav.Link target="_blank" href="https://www.awlindia.com/">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={handleClick} >Logout</Nav.Link>
              </Nav.Item>
                  <div className="profile" onClick={handleClickProfile}>
                    <img
                      src={Profile}
                      alt="This is image"
                      width="40px"
                    />
                           </div>

               { show ? (
                       <div className="menu">
                          <h5>Vendor</h5>
                         <ul>
                         <li>
                         <a href="/ViewVendor">View</a>
                         </li>
                         <li>
                         <a href="/UpdateVendor">Update</a>
                         </li>
                        </ul>
                     </div>
                   ) : null   
               }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </>
  )
}

export default ClientNavpage;