// src/components/ContactForm.js
import React, { useState } from 'react';
import './styles/contactform.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Submitting...');

    // Prepare form data
    const data = new FormData(event.target);

    // Submit form to Netlify
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setStatus('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
        });
      })
      .catch(() => {
        setStatus('Submission failed. Please try again.');
      });
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
