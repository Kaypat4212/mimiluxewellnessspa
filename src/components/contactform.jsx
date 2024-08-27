import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const form = useRef();
    const [status, setStatus] = useState('');
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_nchnt1zD', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then(
          (result) => {
            setStatus('Email sent successfully!');
            e.target.reset(); // Clear the form
          },
          (error) => {
            setStatus('Failed to send email. Please try again.');
            console.log('FAILED...', error.text);
          }
        );
    };
  
    return (
      <div>
        <h1>Contact Us</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="user_name">Name</label>
            <input type="text" id="user_name" name="user_name" required />
          </div>
          <div>
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Send</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    );
  };
  

export default ContactForm;
