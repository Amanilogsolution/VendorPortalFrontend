import React, { useEffect, useState } from 'react';
import "./home.css"
import NavPage from './Navbar/NavBar';
import ClientNavpage from './ClientVendor/Navbar/ClientNavpage';
import Homefooter from './footer/footer';


function Home() {
  const [username] = useState(localStorage.getItem('cust_name') || '')

  // useEffect(()=>{
  //     const script = document.createElement("script");
  //     script.src = "https://platform.twitter.com/widgets.js";
  //     document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  // },[])

  return (
   <div className="wrapper wrapper-home">
      <div className="App">
      <NavPage/>
      {/* <ClientNavpage/> */}
        <div className='split'>
        {/* <div className='split1'>
        <iframe className='embetted_facebook' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fawlindia%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
          scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div> */}
      
        {/* <div className="twitter-embed">
         <a className="twitter-timeline" href="https://twitter.com/awlindia?ref_src=twsrc%5Etfw">Tweets by AWL india</a>
        </div> */}
        </div>
     
     </div>    
  <Homefooter/>
  </div>
  );
}

export default Home;
