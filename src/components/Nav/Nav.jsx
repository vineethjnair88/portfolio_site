import React from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessage} from 'react-icons/bi';


import {useState} from 'react';

 function Nav() {
     const[activeNav,setActiveNav]=useState('##')
     return ( <div>
         <nav>
         <a href="#header" onClick={() => setActiveNav('#header')}  className={activeNav === '#header' ? "active" : ''}> <AiOutlineHome/></a>
         <a href="#about" onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? "active" : ''}> <AiOutlineUser/></a>
         <a href="#experience" onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? "active" : ''}> <BiBook/></a>
         <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}  className={activeNav === '#portfolio' ? "active" : ''}> <RiServiceLine/></a>
         <a href="#contact" onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? "active" : ''}> <BiMessage/></a>
         </nav>
     </div> );
 }
 
 export default Nav;