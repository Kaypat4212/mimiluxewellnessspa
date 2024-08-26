import React from 'react';
import '../components/styles/booking.css'; // Specific styles for Booking
import ContactForm from '../components/contactform';

const Booking = () => {
  return (
    <header className='headerr'>
 <h2>Book an Appointment</h2>
 <p>Fill out the form below to schedule your appointment with us.</p>
      <ContactForm/>
    </header>

  );
};

export default Booking;



