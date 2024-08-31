import React from 'react';
import './styles/contactform.css';

function ContactForm() {
  return (
    <div className='body'>

      <form name="contact" className='form' method="POST" netlify>

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
          <option  value="Select">Click to select</option>
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

        <br/>


        <label>Message: </label> <br/>
        <textarea name="message" placeholder='Include any special note'></textarea>
       
        <br />

        <button className='button' type="submit">Book now</button>

      </form>



    </div>
  );
}

export default ContactForm;


import React from 'react';
import './styles/contactform.css';

function ContactForm() {

  function validateform() {
    let email = document.getElementById('email').value;
    let errorMessage = "";

    document.getElementById('errorMessages').innerHTML = "";
    document.getElementById('email').setCustomValidity("");

    if (email === "") {
      errorMessage += "Email is required. <br>";
    }
    else if (!validateEmail(email)) {
      errorMessage += "Please enter a valid email address <br>";

    }

    //display error messages if any

    if (errorMessage  !== ""){
      document.getElementById('errorMessag').innerHTML = errorMessage;
      return false;
    }

    return true
  }

  function validateEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

    return (
      <div className='body'>
      <p id="errorMessage" style={{color:'red'}}></p>

        <form action="./appointmentbooked.jsx" name="contact" className='form' method="POST" data-netlify="true">

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

          <label>Time:</label> <br />
          <input data-aos="zoom-in-down" type="time" name="Time" />

          <br />



          <label>Service:</label> <br />
          <select className='select' name="service">
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

          <br />

          <label>Message: </label> <br />
          <textarea data-aos="zoom-in-left" name="message" placeholder='Include any special note'></textarea>

          <br />

          <button data-aos="zoom-in-top" onClick={validateform} className='button' type="submit">Book now</button>

        </form>
      </div>
    );
  }

  export default ContactForm;