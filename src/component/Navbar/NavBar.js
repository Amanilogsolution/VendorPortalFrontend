import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import "./NavBar2.css"
import NavDropdown from 'react-bootstrap/NavDropdown';
import Profile from './profile.svg'
import logo from '../../images/awl_large_logo.png'
import { FaUserCircle } from 'react-icons/fa';
import { IoMdExit } from 'react-icons/io';

function NavPage() {
  const [show, setshow] = useState(false)
  const [name, setName] = useState()
  const [prof, setProf] = useState(false)
  // const [navbar,setNavbar] = useState(false);

  // const changeNavBg = () =>{
  //   if (window.scrollY >= 80){
  //     setNavbar(true)
  //   }else{
  //     setNavbar(false)
  //   }
  // }
  // window.addEventListener('scroll',changeNavBg);


  let history = useHistory()
  const handleClick = () => {
    window.localStorage.clear();
    history.replace("/", "urlhistory")
  }

  useEffect(() => {
    setName(localStorage.getItem('cust_name'))
  }, [])

  const handleClickProfile = () => {
    setshow(process => !process);     // We can also use !show in setstate
  }
  const openProfile = () => {
    setProf(!prof)
  }
  return (
    <>
   

      <nav class={'navbar navbar-expand-lg navbar-light'}>
        <div class="container-fluid">
          <a><img style={{ width: "80px", margin: "-15px 0" }} src={logo}></img></a>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{ color: "black" }} class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul>
              <li className="mt-3" style={{ listStyle: "none", color: "rgb(110, 44, 43)", fontWeight: "600",textAlign:"center"}}>WELCOME {name}</li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Guard
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/TotalGuards">Show Guards</a></li>
                  <li><a class="dropdown-item" href="/guardslogs">Guard Login</a></li>
                  <li><a class="dropdown-item" href="/guardslogout"> Guard Logout</a></li>

                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Invoices
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/TotalInvoices">View & Add</a></li>

                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My Supporting
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/Supporting">View & Add</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  My LR
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/InTransit">In Transit</a></li>
                  <li><a class="dropdown-item" href="/Delivered">Delivered LR</a></li>
                </ul>
              </li>

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="https://www.awlindia.com/">About Us</a>
              </li>
              <li>
                <span onClick={openProfile}>
                  <FaUserCircle className="profile_icon" />
                </span>

                {
                  prof && (
                    <div className="menu">
                      <div class="card-body" style={{ width: '10rem',textAlign:"center" }}>
                        <h5>Vendor</h5>
                        <li>
                          <a id="view"className="view_update" href="/ViewVendor">View</a>
                        </li>
                        <li>
                          <a id="update"className="view_update" href="/UpdateVendor">Update</a>
                        </li>
                        <hr/>
                        <li>
                          <p onClick={handleClick} className="logout_btn">Logout<IoMdExit style={{fontSize:"20px",margin:"2px"}}/></p>
                        </li>
                      </div>
                    </div>
                  )
                }

              </li>


            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}

export default NavPage;