import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import './styles/contactform.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('mgvwdbbr');
  const navigate = useNavigate();

  const getServiceFee = (service) => {
    const fees = {
      DeepTissueMassage: 50,
      FaceMassage: 50,
      ReflexologyMassage: 50,
      ShiatsuMassage: 50,
      AromatherapyMassage: 50,
      SwedishMassage: 50,
      NuruMassage: 50,
      HotstoneMassage: 50,
      MyofascialReleaseMassage: 50,
      ThaiMassage: 50,
    };
    return fees[service] || 50; // Default fee
  };

  React.useEffect(() => {
    if (state.succeeded) {
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
    <form className='form mt-3' name='contact' onSubmit={handleSubmit}>
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

      <label htmlFor="Phone-number">Phone number</label>
      <br />
      <input
        data-aos="zoom-in-right"
        id="Phone"
        type="tel"
        name="Phone-number"
        placeholder='Eg: +27-103-2345'
        required
      />
      <br />
      <ValidationError
        prefix="Phone number"
        field="Phone-number"
        errors={state.errors}
      />

      <label htmlFor="Date/Time">Date/Time</label>
      <br />
      <input
        data-aos="zoom-in-left"
        id="Date/Time"
        type="datetime-local"
        name="Date/Time"
        required
      />
      <br />
      <ValidationError
        prefix="Date/Time"
        field="Date/Time"
        errors={state.errors}
      />

      <label>Service:</label>
      <br />
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

      <label htmlFor="Note">Important Note</label>
      <br />
      <textarea
        id="Note"
        name="Note"
        placeholder='Include any special notes'
      />
      <br />
      <ValidationError
        prefix="Note"
        field="Note"
        errors={state.errors}
      />

      <button className='button' type="submit" disabled={state.submitting}>
        Book Now
      </button>
    </form>
  );
}

export default ContactForm;
