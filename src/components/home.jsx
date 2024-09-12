import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';

const Home = () => {
  // Function to generate WhatsApp link
  const generateWhatsAppLink = () => {
    const phoneNumber = 'YOUR_PHONE_NUMBER'; // Replace with your WhatsApp phone number
    const text = 'Hello! I would like to book an appointment at Mimiluxe Wellness Spa.';
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <header className="hero">
      <div className="hero-overlay">
        <h1>Welcome to Mimiluxe Wellness Spa</h1>
      </div>

      <div className='text-center'>
        <p>Experience Luxury and Relaxation</p>

        <Link to="/book" className="button l">
          Book An Appointment Online
        </Link>

      
      </div>

      <div className="textcenter">
          {/* WhatsApp Booking Button */}
          <button
          className="buttonn mt-4 whatsapp-buttonn"
          onClick={() => window.open(generateWhatsAppLink(), '_blank')}
        >
          Book Appointment on WhatsApp
        </button>
      </div>
    </header>
  );
}

export default Home;
