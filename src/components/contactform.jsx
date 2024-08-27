// src/components/ContactForm.js
import React, { useState } from 'react';
import './styles/contactform.css';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    // Simulate a form submission delay
    setTimeout(() => {
      setStatus('Form submitted successfully!');
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = '/thank-you'; // Redirect to a thank you page
      }, 1000); // Delay before redirect
    }, 1000); // Simulated form submission delay
  };

  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

        {/* Hidden field for bot prevention */}
        <div style={{ display: 'none' }}>
          <label>
            Don’t fill this out if you’re human:
            <input name="bot-field" />
          </label>
        </div>

        {/* Input field for name */}
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>

        {/* Input field for email */}
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit">Submit</button>

        {/* Status message */}
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
}

export default ContactForm;
