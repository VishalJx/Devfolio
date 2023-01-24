import React from "react"
import {RiContactsLine} from 'react-icons/ri'

import '../Style/Contact.css'

function Contact(){
  return (
    <div className="contact" id="contact">
      <div className="name-style" style={{display:'flex'}}> 
        <h1>Contact Me</h1>
        <span className='contact-logo' style={{fontSize:'5rem', color:"red"}}><RiContactsLine/></span>
      </div>
      <div className='contact-page'>

        <div className='left-layer'>
          <div className="contact-details">
            <span>Address</span>
            <p>Bhopal, MP</p>
          </div>
          <div className="contact-details">
            <span>E-mail</span>
            <p>itsmevishal360@gmail.com</p>
          </div>
          <div className="contact-details">
            <span>Phone Number</span>
            <p>+91-8429495852</p>
          </div>
        </div> 

        <div className='form-layer'>
          <form className='form' action='https://formspree.io/f/mbjejkrj' method='POST'>

              <div className="in-edit">
                <div><label >Your Name</label></div>
                <span><input className="input" name='Username' type='text' required></input></span>
              </div>

              <div className="in-edit">
                <div><label >Your email</label></div>
                <span><input className="input" name='Email' type='email' required></input></span>
              </div>

              <div style={{display:'flex', flexDirection:'column'}}>
                <label>Message</label>
                <textarea className='message-input' name='Message' type='text' rows="12" cols="60" required></textarea>
              </div>

            <div className='button'>
              <button className='send' type="submit">Send</button>
            </div>

          </form>
        </div>

      </div>

    <div className="end-band">
      <div className="end">
          Designed With Love By <span>Vishal Jaiswal</span>
      </div>
    </div>
    </div>
  )
};

export default Contact;
