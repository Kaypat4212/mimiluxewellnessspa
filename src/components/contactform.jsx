import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import './styles/contactform.css';

function ContactForm() {
  const [state, handleSubmit] = useForm('xldrkdpq'); // Replace with your Formspree ID
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage submission status

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const getServiceFee = (service) => {
    const fees = {
      DeepTissueMassage: 100,
      FaceMassage: 50,
      ReflexologyMassage: 50,
      ShiatsuMassage: 100,
      AromatherapyMassage: 100,
      SwedishMassage: 100,
      NuruMassage: 150,
      HotstoneMassage: 75,
      MyofascialReleaseMassage: 75,
      ThaiMassage: 75
    };
    return fees[service] || 50; // Default fee
  };

  useEffect(() => {
    if (state.submitting) {
      setIsSubmitting(true); // Set submitting to true when form is being submitted
    } else {
      setIsSubmitting(false); // Set submitting to false when form submission is complete
    }

    if (state.succeeded) {
      const amount = getServiceFee(formData.service);
      sessionStorage.setItem('paymentDetails', JSON.stringify({
        amount: amount * 100, // Convert to kobo
        email: formData.email,
      }));

      navigate('/success');
    }
  }, [state.submitting, state.succeeded, navigate, formData]);

  const validatePhoneNumber = (value) => {
    // A simple regex for validating phone numbers (customize as needed)
    const phoneRegex = /^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    return phoneRegex.test(value);
  };

  const handlePhoneValidation = (e) => {
    const value = e.target.value;
    if (!validatePhoneNumber(value)) {
      e.target.setCustomValidity('Please enter a valid phone number');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const generateWhatsAppLink = () => {
    const phoneNumber = '+27796249287'; // Replace with your WhatsApp phone number
    const text = `*New Appointment Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppClick = () => {
    window.open(generateWhatsAppLink(), '_blank');
  };

  return (
    <div>

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
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
          name="phone"
          placeholder='Eg: +27-103-2345'
          pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          onBlur={handlePhoneValidation}
          required
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <ValidationError
          prefix="Phone Number"
          field="phone"
          errors={state.errors}
        />

        <label htmlFor="dateTime">Date/Time</label>
        <br />
        <input
          data-aos="zoom-in-left"
          id="dateTime"
          type="datetime-local"
          name="dateTime"
          required
        />
        <ValidationError
          prefix="Date/Time"
          field="dateTime"
          errors={state.errors}
        />

        <br />

        <label>Service:</label>
        <br />
        <select
          className='select'
          name="service"
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
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
          field="note"
          errors={state.errors}
        />

            {/* Book Appointment on WhatsApp button */}
            <button
        type="button"
        className="btn-whatsapp"
        onClick={handleWhatsAppClick}
      >
        Book Appointment on WhatsApp
      </button>
        {isSubmitting && <p className="processing-message">Your appointment booking is being processed. <br /> Please wait...</p>}

        <button className='buttonn' type="submit" disabled={state.submitting}>
          {state.submitting ? 'Processing...' : 'Book Now'}
        </button>
      </form>
    </div>

  );
}

export default ContactForm;
