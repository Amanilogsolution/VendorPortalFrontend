
import React from "react";
import './footer.css'
import { ImPhone } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import {FaFacebook} from "react-icons/fa";
import {FaTwitterSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FaLinkedin,FaYoutube} from "react-icons/fa"


function Homefooter() {
  return (
    <div className="Homefooter">
      <footer className="bg-light text-white p-3"style={{backgroundImage:`url("https://khatabook-assets.s3.amazonaws.com/static/images/index/footerbg.jpg")`}}>
        <div className="container">
          <div className="row text-dark text-left" >
            {/* <div className="col-sm-3">
              <h4 style={{textDecoration:"underline"}}>Company Profile</h4>
              <p style={{lineHeight:"18px"}}>
                "MOVE WITH US TO MAKE A DIFFERENCE"             
                AWL is India’s fastest tech-based logistics
                 and supply chain management company
                providing smart logistics solutions driven by
                cutting edge technology. AWL enables
                companies to customize solutions including
                route planning, real-time tracking and smart
                warehousing, etc.
              </p>
            </div> */}
            <div className="col-sm-2" >     
              <h4 style={{textDecoration:"underline"}}>About Us</h4>
              <ul style={{listStyle:"none"}} className="footerlink">
              <li >
                <a className="link-warning text-decoration-none view" href="https://www.awlindia.com/about-us" target="_blank">Executive Bios</a>
              </li>
              <li><a className="link-warning text-decoration-none" id="ahover" href="https://www.awlindia.com/about-us#sustainability" target="_blank"
                >
                  Sustainibilty & CSR
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"id="ahover" href="https://www.awlindia.com/blog-page" target="_blank">
                  Blogs & Industry News
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none" href="https://www.awlindia.com/about-us-ethics" target="_blank">
                  Ethics Point - Mission
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/press-release"
                  target="_blank"
                >
                  Press Release
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/shipping-and-return"
                  target="_blank"
                >
                  Shipping & Return
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/privacy-policy"
                  target="_blank"
                >
                  Quick Links
                </a>
              </li>
              </ul>
            </div>
            <div className="col-sm-3">
              <h5 style={{textDecoration:"underline"}}>Our Expertize</h5>
              <ul style={{listStyle:"none"}} className="footerlink">
              <li>
                <a className="link-warning text-decoration-none" href="https://www.awlindia.com/warehousing" target="_blank">
                  Warehousing & Storage
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/transportation-distribution"
                  target="_blank"
                >
                  Transportation & Distribution
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/express-cargo" target="_blank"
                >
                  Express Cargo
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/order-fulfillment"
                  target="_blank"
                >
                  Order Fulfilment
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/freight-forwarding"
                  target="_blank"
                >
                  Frieght Forwarding
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/custom-clearance"
                  target="_blank"
                >
                  Custom Clearance
                </a>
              </li>
              <li>
                <a className="link-warning text-decoration-none"
                  href="https://www.awlindia.com/reverse-logistics"
                  target="_blank"
                >
                  Reverse Logistics
                </a>
              </li>
              </ul>
            </div>

            

            <div className="col-sm-3">
              <h5 style={{textDecoration:"underline"}}>Address</h5>
              <p>
                AWL India Private Limited
                <br />
                Vatika Atrium, Ground Floor,Tower-B
                <br />
                Golf Course Road, Sector -53,
                <br />
                Gurgaon – 122002, India
              </p>

              <p>
                <ImPhone /> +91-124-427-9462
              </p>
              <p>
                <IoMdMail /> info@awlindia.com
              </p>
            </div>
            <div className="col-sm-1">
              <h5 style={{textDecoration:"underline"}}>Links</h5>
              <p>
                <a href="https://www.facebook.com/awlindia/" target="_blank">
                  <FaFacebook fontSize="1.5em" color="#ffcd3a"/>
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/awlindia"
                  target="_blank"
                >
                  <FaTwitterSquare fontSize="1.5em" color="#ffcd3a"/>
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/awlindia/"
                  target="_blank"
                >
                 <FaInstagramSquare fontSize="1.5em" color="#ffcd3a"/>
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/accelerated-warehousing-logistics-pvt--ltd-/mycompany/"
                  target="_blank"
                >
                  <FaLinkedin fontSize="1.5em" color="#ffcd3a"/>
                </a>
              </p>
              <p>
                <a
                  href="https://www.awlindia.com/freight-forwarding"
                  target="_blank"
                >
                <FaYoutube fontSize="1.5em" color="#ffcd3a"/>
                </a>
              </p>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Homefooter;
