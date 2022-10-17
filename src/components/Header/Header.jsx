import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../Assets/me.png'
import HeaderSocials from './HeaderSocial';
import Typewriter from 'typewriter-effect';

function Header() {
    return ( 
        <header id='header'>
        
           <div className='container headerActual'>
           <div className='myContent'>
           <h4>Hello I'm</h4>
                <h2 style={{fontSize:"3rem"}}>Vineeth Jay</h2>
                <h2 className='text-light'>
                    <Typewriter options={{autoStart: true,
                    loop: true,delay:60,strings:[
                        "UI/UX Designer",
                        "React Developer",
                        "NodeJs Developer"
                    ],}}/>
                </h2>
                <CTA></CTA>
                 
           </div>
           <HeaderSocials/>
                
                {/* <CTA></CTA> */}
                <div className='me'>
                <div className="wrap">
  
  <div className="circle">

    <img src={me} alt=''/>

    </div>
  
</div>
                {/* <img src={me} alt="me" className='me-image'></img> */}
            </div>
                {/* <HeaderSocials/> */}
           </div>

            

            {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
        </header>
     );
}

export default Header;