import React from 'react';
import './styles/contactform.css';

function ContactForm() {
  return (
    <div className='body'>
      <form name="appointmentform" className='form' method="POST" netlify>
  <p>
    <label>Your Name: </label>
    <input type="text" name="name" />
  </p>
  <p>
    <label>Your Email: </label>
    <input type="email" name="email" />
  </p>
  <p>
    <label>Phone number:</label>
    <input type="tel" name="phone-number" />
  </p>
  <p>
    <label>Service: 
    </label>
    <select name="service[]" multiple>
      <option value="DeepTissueMassage">Deep Tissue Massage</option>
      <option value="FaceMassage">Face Massage</option>
      <option value="ReflexologyMassage">Reflexology Massage</option>
      <option value="ShiatsuMassage">Shiatsu Massage</option>
      <option value="Aromatherapy Massage">Aromatherapy Massage</option>
      <option value="SwedishMassage">Swedish Massage</option>
      <option value="NuruMassage">Nuru Massage</option>
      <option value="HotstoneMassage">Hot Stone Massage</option>
      <option value="MyofascialReleaseMassage">Myofascial Release Massage</option>
      <option value="ThaiMassage">Thai Massage</option>
    </select>
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
