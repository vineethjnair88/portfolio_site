
import React from 'react';
import './About.css';
import me from '../../Assets/me2.jpg'


function About () {
    return (  
        <section id='about'>
           <h5>Get to know</h5>
           <h2>About me</h2>

           <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={me} alt=''/>
                    </div>
                </div>
                <div className='about__content'>
                 
                    <p>
                    Hi, I'm a passionate web developer looking to advance my skills and knowledge.
                    I love creating beautiful and functional websites.I'm looking forward to secure 
                    a responsible career as a full-stack developer and an opportunity to fully utilize 
                    my training and skills, while making a significant contribution to the success of 
                    the company.
                    I Design and develop UI components using React library with the 
                    ntegration of user-facing elements with server-side logic.

                     
                    </p>
                    <br></br>
                    <a href="#contact" className='btn btn-primary'>Let's talk</a>
                </div>
           </div>

        </section>
    );
}

export default About ;