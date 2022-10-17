/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


function Footer() {
    return ( 

        <footer>
            <a href='##' className='footer_logo'>VJ</a>
            <ul className='permalinks'>
                <li><a href='#header'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#portfolio'>Services</a></li>
                <li><a href='#testimonials'>Testimonials</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>

        <div className='footer_socials'>
            <a href='https://facebook.com'><FaFacebookF/></a>
            <a href='https://instagram.com'><FiInstagram/></a>
            <a href='https://twitter.com'><IoLogoTwitter/></a>
        </div>

        <div className='footer_copyright'>
            <small>&copy; Vineeth Jay. All rights reserved</small>
        </div>
        </footer>

     );
}

export default Footer;