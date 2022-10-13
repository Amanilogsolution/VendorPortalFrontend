import React, { useEffect, useState } from 'react';
import "./home.css"
import NavPage from './Navbar/NavBar';
import ClientNavpage from './ClientVendor/Navbar/ClientNavpage';
import Homefooter from './footer/footer';
import { GiCrossedAirFlows } from 'react-icons/gi';
import icon from "../images/homeicon.svg"


function Home() {
  const [username] = useState(localStorage.getItem('cust_name') || '')


  return (
    <div className='for_opacity'>
      <NavPage />
      <div >
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="wrapper wrapper-home">
          <div className='main_para'>
            {/* <p className='para'>WELCOME TO VENDOR PORTAL AWL INDIA */}
             {/* <GiCrossedAirFlows/> */}
             {/* </p> */}
            {/* <h1 style={{color:"rgb(47, 47, 51)"}}>Hello Universe</h1> */}
            </div>
            {/* <img className='undrawimg' src={icon}></img> */}
        </div>
      </div>
      <Homefooter/>
    </div>
  );
}

export default Home;
