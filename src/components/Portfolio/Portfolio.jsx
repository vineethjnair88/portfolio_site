import React from 'react';
import './Portfolio.css';
import {FiCheck} from 'react-icons/fi'


function Portfolio() {
    return ( <section id='portfolio'>
        <h5>What I offer</h5>
        <h2>Services</h2>

        <div className='container services__container'>
            <article className='service'>
                <div className='service__head'>
                    <h3>UI/UX Design</h3>
                </div>
                <ul className='service__list'>

                                        <li><FiCheck className='service__list-icon'/>
                    <p>Assess, evaluate and challenge existing UX/UI design of the product</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Developing UI mock-ups and prototypes that clearly illustrate how sites function and look like.</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Designing graphic user interface elements, like menus, tabs and widgets</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Building reusable code, templates, module, artifacts, and libraries for future use</p></li>
                    
                </ul>
            </article>

            <article className='service'>
                <div className='service__head'>
                    <h3>Web Development</h3>
                </div>
                <ul className='service__list'>
                <li><FiCheck className='service__list-icon'/>
                    <p>Design, develop and unit test complex UI components using React library</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Integration of user-facing elements developed by front-end developers with server-side logic</p></li>
                    
                    <li><FiCheck className='service__list-icon'/>
                    <p>Design and implement user interface components for JavaScript-based web and mobile applications using React ecosystem</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Developing and testing REST APIs</p></li>
                    
                </ul>
            </article>

            {/* <article className='service'>
                <div className='service__head'>
                    <h3>Content Creator</h3>
                </div>
                <ul className='service__list'>
                <li><FiCheck className='service__list-icon'/>
                    <p>Lorem ipsum dolor sit amet, consectetuer</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Lorem ipsum dolor sit amet, consectetuer</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Lorem ipsum dolor sit amet, consectetuer</p></li>
                    <li><FiCheck className='service__list-icon'/>
                    <p>Lorem ipsum dolor sit amet, consectetuer</p></li>
                    
                </ul>
            </article> */}
        </div>
    </section> );
}

export default Portfolio;