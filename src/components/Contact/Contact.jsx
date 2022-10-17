import React from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {
    const form= useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ya36ctq', 'template_48nfzel', form.current, 'PWLdcoGZ074E9lo1p')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };
     
    return ( 
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact_container'>
                <div className='contact_options'>
                <article className='contact_option'>
                    <MdOutlineEmail className='contact_option-icon'/>
                    <h4>Email</h4>
                    <h5>vineethjnair88@gmail.com</h5>
                    <a href="mailto:vineethjnair88@gmail.com">Send a message</a>
                </article>
                <article className='contact_option'>
                    <RiMessengerLine className='contact_option-icon'/>
                    <h4>Messenger</h4>
                    <h5>Vineeth Jayakumar</h5>
                    <a href="mailto:vineethjnair88@gmail.com">Send a message</a>
                </article>
                <article className='contact_option'>
                    <BsWhatsapp className='contact_option-icon'/>
                    <h4>Whatsapp</h4>
                    <h5>+91- 7012931784</h5>
                    <a href="https://api.whatsapp.com/send?phone=917012931784">Send a message</a>
                </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows="7" placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
                
            </div>
        </section>
     );
}

export default Contact;