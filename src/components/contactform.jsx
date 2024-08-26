// src/components/ContactForm.js
import React, { useState } from 'react';
import './styles/contactform.css'
function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const [Service, setService] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Netlify form handling usually requires the form data to be URL-encoded.
    const formData = new FormData(event.target);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      if (response.ok) {
        setStatus('Thanks for your message!');
        setName('');
        setEmail('');
        setService('');
        setDate('');
        setMessage('');
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <form
        className='form text-center'
        name="contact"
        method="POST"
        netlify
        onSubmit={handleSubmit}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="Service">Service</label> <br />
          <select
            id="Service"
            name="Service"
            value={Service}
            onChange={(e) => setService(e.target.value)}
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
          <label htmlFor="message">Message (optional) </label> <br />
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}

          />
        </div>
        <div>
          <label htmlFor="date">Preferred Date</label> <br />
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button className='button' type="submit">Book Now</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}

export default ContactForm;
