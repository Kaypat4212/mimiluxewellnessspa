import React from 'react';
import './styles/contactform.css';

function ContactForm() {
  return (
    <div className='body'>


      <form action="/appointmentbooked" name="contact" className='form' method="POST" data-netlify="true">

        {/* Hidden field to help Netlify process the form */}
        <input type="hidden" name="form-name" value="contact" />

        <label>Your Name: </label> 
        <br />
        <input data-aos="zoom-in-down" type="text" name="name" />

        <br />

        <label>Your Email: </label> <br />
        <input data-aos="zoom-in-down" type="email" name="email" />

        <br />

        <label>Phone number:</label> <br />
        <input data-aos="zoom-in-down" type="tel" name="phone-number" />

        <br />



        <label>Service:</label> <br/>
        <select className='select' name="service" required>
          <option value="Select">Click to select</option>
          <option value="DeepTissueMassage">Deep Tissue Massage</option>

          <option value="FaceMassage">Face Massage</option>
          <option value="ReflexologyMassage">Reflexology Massage</option>
          <option value="ShiatsuMassage">Shiatsu Massage</option>
          <option value="AromatherapyMassage">Aromatherapy Massage</option>
          <option value="SwedishMassage">Swedish Massage</option>
          <option value="NuruMassage">Nuru Massage</option>
          <option value="HotstoneMassage">Hot Stone Massage</option>
          <option value="MyofascialReleaseMassage">Myofascial Release Massage</option>
          <option value="ThaiMassage">Thai Massage</option>
        </select>

        <br/>

        <label>Message: </label> <br/>
        <textarea data-aos="zoom-in-left" name="message" placeholder='Include any special note'></textarea>
       
        <br />

        <button data-aos="zoom-in-top" className='button' type="submit">Book now</button>

      </form>
    </div>
  );
}

export default ContactForm;