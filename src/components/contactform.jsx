import React from 'react';
import './styles/contactform.css';

function ContactForm() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form name="appointmentform" className='form' method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Phone number:<input type="tel" name="phone-number" /></label>
  </p>
  <p>
    <label>Service: <select name="service[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select>
    </label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>



    </div>
  );
}

export default ContactForm;
