// src/components/ContactForm.js
// import React, { useState } from 'react';
import React from 'react';
import './styles/contactform.css';

function ContactForm() {
  // const [status, setStatus] = useState('');

  // // Handle form submission
  // const handleSubmit = (event) => {
  //   // Netlify handles the submission, so we just handle the status
  //   event.preventDefault();
  //   setStatus('Submitting...');

  //   // After a delay (for demo purposes), you can set status to success
  //   setTimeout(() => {
  //     setStatus('Form submitted successfully! Redirecting...');
  //     // Redirect after form submission
  //     setTimeout(() => {
  //       window.location.href = '/thank-you'; // Redirect to a thank you page
  //     }, 1000); // Redirect delay
  //   }, 1000); // Simulate form submission delay
  // };

  return (
    <div>
      <form
        className='form text-center'
        name="contact"
        method="POST"
        data-netlify="true"
        // onSubmit={handleSubmit} // Handle the form submission
      >
        {/* Display status message here */}
        {/* {status && <p className="status-message">{status}</p>} */}
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        
        <div>
          <label htmlFor="Service">Service</label> <br />
          <select
            id="Service"
            name="Service"
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="Service1">Service 1</option>
            <option value="Service2">Service 2</option>
            <option value="Service3">Service 3</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="message">Message (optional)</label> <br />
          <textarea
            id="message"
            name="message"
          />
        </div>
        <div>
          <label htmlFor="date">Preferred Date</label> <br />
          <input
            type="date"
            id="date"
            name="date"
            required
          />
        </div>
        <button className='button' type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default ContactForm;
