import React from 'react';
import '../components/styles/booking.css'; // Specific styles for Booking
import ContactForm from '../components/contactform';

const Booking = () => {
  return (
   <div>
    <div className="innerheader">
    <h2>Book an Appointment</h2>
    <p>Fill out the form below to schedule your appointment with us.</p>
    </div> <br />
    <header className='headerr'>

     <div className="contactform">
     <ContactForm/>
     </div>
    </header>
   </div>

  );
};

export default Booking;



