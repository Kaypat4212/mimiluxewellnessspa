import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import './styles/contactform.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('mgvwdbbr'); // Replace with your Formspree ID
  const navigate = useNavigate();

  const getServiceFee = (service) => {
    const fees = {
      DeepTissueMassage: 100,
      FaceMassage: 50,
      ReflexologyMassage: 50,
      ShiatsuMassage: 100,
      AromatherapyMassage: 100,
      SwedishMassage: 100,
      NuruMassage: 150,
      HotstoneMassage: 75, // Example fee
      MyofascialReleaseMassage: 75, // Example fee
      ThaiMassage: 75 // Example fee
    };
    return fees[service] || 50; // Default fee
  };

  useEffect(() => {
    if (state.succeeded) {
      // Assuming that the Formspree response includes form data
      const formData = new FormData(state.submission);
      const service = formData.get('service');
      const amount = getServiceFee(service);

      // Store payment details in session storage
      sessionStorage.setItem('paymentDetails', JSON.stringify({
        amount: amount * 100, // Convert to kobo
        email: formData.get('email'),
      }));

      navigate('/success');
    }
  }, [state.succeeded, navigate]);

  return (
    <form className='form mt-3' onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input
        data-aos="zoom-in-down"
        id="name"
        type="text"
        name="name"
        placeholder='EG: John Doe'
        required
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">Email Address</label>
      <br />
      <input
        id="email"
        type="email"
        name="email"
        placeholder='Eg: JohnDoe@email.com'
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="phone">Phone Number</label>
      <br />
      <input
        data-aos="zoom-in-right"
        id="phone"
        type="tel"
        name="phone" // Ensure this matches the backend field name
        placeholder='Eg: +27-103-2345'
        required
      />
      <ValidationError
        prefix="Phone Number"
        field="phone" // Ensure this matches the backend field name
        errors={state.errors}
      />

      <label htmlFor="dateTime">Date/Time</label>
      <br />
      <input
        data-aos="zoom-in-left"
        id="dateTime"
        type="datetime-local"
        name="dateTime" // Ensure this matches the backend field name
        required
      />
      <ValidationError
        prefix="Date/Time"
        field="dateTime" // Ensure this matches the backend field name
        errors={state.errors}
      />

      <label>Service:</label>
      <br />
      <select className='select' name="service">
        <option value="">Click to select</option>
        <option value="DeepTissueMassage">Deep Tissue Massage - $100</option>
        <option value="FaceMassage">Face Massage - $50</option>
        <option value="ReflexologyMassage">Reflexology Massage - $50</option>
        <option value="ShiatsuMassage">Shiatsu Massage - $100</option>
        <option value="AromatherapyMassage">Aromatherapy Massage - $100</option>
        <option value="SwedishMassage">Swedish Massage - $100</option>
        <option value="NuruMassage">Nuru Massage - $150</option>
        <option value="HotstoneMassage">Hot Stone Massage - $75</option>
        <option value="MyofascialReleaseMassage">Myofascial Release Massage - $75</option>
        <option value="ThaiMassage">Thai Massage - $75</option>
      </select>
      <br />

      <label htmlFor="note">Important Note</label>
      <br />
      <textarea
        id="note"
        name="note"
        placeholder='Include any special notes'
      />
      <ValidationError
        prefix="Note"
        field="note" // Ensure this matches the backend field name
        errors={state.errors}
      />

      <button className='button' type="submit" disabled={state.submitting}>
        Book Now
      </button>
    </form>
  );
}

export default ContactForm;
