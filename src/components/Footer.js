import React from "react";
import '../Styles/home.css';
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer>
      <hr style={{marginTop:"50px", marginBottom:"-20px",color:"#707577", height:"2px"}}/>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>COMPANY</h3>
                  <ul>
                    <li id="footer li">
                    <NavLink  style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} to="/about">About us</NavLink>
                    </li>
                    <li id="footer li">
                    <NavLink  style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} to="/blog">Blog</NavLink>
                    </li>
                    <li id="footer li">
                    <NavLink  style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} to="/report">Report Fraud</NavLink>
                     
                    </li>
                    <li id="footer li">
                    <NavLink  style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                  
                </div>

                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>FOR FOODIES</h3>
                  <ul>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="#">Code of Conduct</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="#">Community</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}}href="#">FAQs</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>FOR YOU</h3>
                  <ul>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="#">Privacy</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="#">Terms</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="#">Directory</a>
                    </li>
                    <li id="footer li">
                      <a style={{marginLeft: "-3px",textDecoration:"none",color:"#9a9a9a"}} href="#">Security</a>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3" style={{fontSize:"15px",marginTop: "70px",color:"#707577"}}>
                  <h3>KEEP IN TOUCH</h3>
                  <div className="row">
                    <div className="col-1">
                      <a href="https://www.facebook.com" target="_blank">
                      <i class="fab fa-facebook-f fontawesome-style"></i>
                      </a>
                      
                    </div>
                    <div className="col-1">
                      <a href="https://www.instagram.com/im_nik.exe/" target="_blank">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-1">
                    <a href="https://www.youtube.com/channel/UCi4WOL3sf_ODXotYxOt_NfQ" target="_blank">
                      <i class="fab fa-youtube fontawesome-style"></i>
                    </a>
                    </div>
                    <div className="col-6">
                    <a href="https://twitter.com" target="_blank">
                      <i class="fab fa-twitter fontawesome-style"></i>    
                    </a>
                      
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="mt-5">
                <p className="main-hero-para text-center w-100" style={{fontSize:" x-small",marginTop: "-25px",color:"#9a9a9a"}}>
               By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
               Copyright @ 2021 Nikhilraj Desale. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;