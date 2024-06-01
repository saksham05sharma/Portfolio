import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import GmailCopy from '../GmailCopy/GmailCopy';
import './Contact.css'; // Import the CSS file

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i0qpk56', 'template_du82s1m', form.current, 'U40ULwAkiEHZFHh72')
      .then((result) => {
        console.log(result.text);
        console.log("Message Sent");
        
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact' className='contact-container'>
      <div className='contact-header'>
        <h1 className='contact-title'>
          Contact Me
        </h1>
        <p className='contact-subtitle'>You can contact me at<GmailCopy/></p>
        <p className='contact-subtitle'>+91-7987863964</p>
      </div>
      <div className='contact-form-container'>
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className='contact-input'
            placeholder='Name'
            type="text"
            name="user_name"
            required />

          <label>Email</label>
          <input className='contact-input'
            placeholder='Email'
            type="email"
            name="user_email"
            required />

          <label>Your Message</label>
          <textarea
            className='contact-textarea'
            placeholder='Your message'
            type='text'
            name="message"
            required />

          <div className='contact-button-container'>
            <button type='submit' className='contact-button'>Send</button>
          </div>
        </form>
      </div>

      <div className='contact-footer'>
        Copyright © 2023
        <span className='contact-footer-highlight'>&nbsp;Saksham&nbsp; </span>
        All Rights Reserved
      </div>
    </div>
  );
}

export default Contact;
