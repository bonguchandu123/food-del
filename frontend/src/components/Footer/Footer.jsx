import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum is dummy text of printing and typesetting industry.</p>
                <div className="footer-content-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-centre">
              <h2> COMPANY</h2>
              <ul>
                <li>home</li>
                <li>about us</li>
                <li>delivery </li>
                <li>privacy policy</li>
              </ul>
            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH </h2>
            <ul>
              <li>6302117829</li>
              <li>bonguchandu7829@gmail.com</li>
            </ul>
            </div>
            <hr/>
           <p className="footer-copyright">COPYRIGHT 2024 @ TOMATO.COM - ALL ARE REVERSED.</p>

        </div>
      
    </div>
  )
}

export default Footer
