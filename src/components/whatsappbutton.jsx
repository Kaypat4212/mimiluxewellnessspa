import React from 'react';
import whatsappicon from './images/whatsapp.svg';
import '../components/styles/whatsappbutton.css'; // Import the CSS file for styling

const WhatsAppButton = () => {
  const whatsappNumber = "+27796249287"; // Replace with your WhatsApp number
  const message = encodeURIComponent("Hello, I want to book an appointment");

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappicon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
