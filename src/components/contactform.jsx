import React from 'react';
import './styles/contactform.css';

function ContactForm() {
  return (
    <div className='body'>

      <form action="/appointmentbooked" name="contact" className='form' method="POST" netlify>

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

        <label>Service:
        </label> <br/>
        <select data-aos="zoom-in-down" className='select' name="service">
          <option data-aos="zoom-in-down"  value="Select">Click to select</option>
          <option data-aos="zoom-in-up"value="DeepTissueMassage">Deep Tissue Massage</option>
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
