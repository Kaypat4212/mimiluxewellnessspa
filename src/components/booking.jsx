import React from 'react';
import '../components/styles/booking.css'; // Specific styles for Booking
import ContactForm from '../components/contactform';

const Booking = () => {
  return (
    <header className='headerr'>
    <div className="innerheader">
    <h2>Book an Appointment</h2>
    <p>Fill out the form below to schedule your appointment with us.</p>
    </div>
     <div className="contactform">
     <ContactForm/>
     </div>
    </header>

  );
};

export default Booking;



