import React from 'react';
import './Experience.css';
// import {BsPatchCheckFill} from 'react-icons/bs'
import {BsFillBootstrapFill} from 'react-icons/bs'
import {DiCss3} from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'

function Experience() {
    return ( 
        <section id='experience'>
           <h5>The skills I have</h5>
           <h2>My Experience</h2>

           <div className='container experience__container'>
               <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                                <FiFigma className='experience__details-icons'/>
                                <div>
                                <h4>Figma</h4>
                                <small className='text__light'>Intermediate</small>
                                </div>                                
                        </article>
                        <article className='experience__details'>
                                <DiCss3 className='experience__details-icons'/>
                                    <div>
                                    <h4>CSS</h4>
                                <small className='text__light'>Experienced</small>  
                                    </div>                              
                        </article>
                        <article className='experience__details'>
                                <TbBrandJavascript className='experience__details-icons'/>
                                <div>
                                <h4>Javascript</h4>
                                <small className='text__light'>Experienced</small> 
                                </div>                               
                        </article>
                        <article className='experience__details'>
                                <BsFillBootstrapFill className='experience__details-icons'/>
                                <div>
                                <h4>Bootstrap</h4>
                                <small className='text__light'>Experienced</small>
                                </div>                                
                        </article>
                        <article className='experience__details'>
                                <SiTailwindcss className='experience__details-icons'/>
                                <div>
                                <h4>Tailwind CSS</h4>
                                <small className='text__light'>Intermediate</small> 
                                </div>                               
                        </article>
                        <article className='experience__details'>
                                <FaReact className='experience__details-icons'/>
                                <div>
                                <h4>React</h4>
                                <small className='text__light'>Intermediate</small>
                                </div>                                
                        </article>
                    </div>
               </div>
               <div className='experience__backend'>
               <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                                <FaNodeJs className='experience__details-icons'/>
                                <div>
                                <h4>Node js</h4>
                                <small className='text__light'>Experienced</small>
                                </div>                                
                        </article>
                        <article className='experience__details'>
                                <SiExpress className='experience__details-icons'/>
                                <div>
                                <h4>Express js</h4>
                                <small className='text__light'>Intermediate</small>
                                </div>                                
                        </article>
                        <article className='experience__details'>
                                <SiMongodb className='experience__details-icons'/>
                                <div>
                                <h4>MongoDB</h4>
                                <small className='text__light'>Intermediate</small>
                                </div>                                
                        </article>
                        <article className='experience__details'>
                                <SiPhp className='experience__details-icons'/>
                                <div>
                                <h4>PHP</h4>
                                <small className='text__light'>Experienced</small>
                                </div>                                
                        </article>
                        <article className='experience__details'>
                                <SiMysql className='experience__details-icons'/>
                                <div>
                                <h4>MySQL</h4>
                                <small className='text__light'>Intermediate</small>
                                </div>                                
                        </article>
                        
                    </div>
               </div>
           </div>
        </section>
     );
}

export default Experience;