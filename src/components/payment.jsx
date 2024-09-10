import './styles/contactform.css';
import React, { useState } from "react";
import "./styles/payment.css";
import logo from '../components/images/logo.jpg';

const App = () => {
  // Define state hooks to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formspree endpoint URL (replace with your form endpoint)
    const formspreeUrl = 'https://formspree.io/f/YOUR_FORM_ID';

    // Send the form data to Formspree
    fetch(formspreeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone
      })
    })
    .then((response) => {
      setIsSubmitting(false);
      if (response.ok) {
        setMessage("Form submitted successfully! Redirecting to payment...");
        // Redirect to Paystack payment page
        setTimeout(() => {
          window.location.href = 'https://paystack.com/pay/appointmentfee';
        }, 2000);
      } else {
        setMessage("Form submission failed. Please try again.");
      }
    })
    .catch(() => {
      setIsSubmitting(false);
      setMessage("There was an error submitting the form.");
    });
  };

  return (
    <div className="App">
      <div className="item">
        <img className='logo' style={{width: '100px'}} src={logo} alt="Logo" />
        <h1>Appointment Fee Payment Portal</h1>
      </div>

      <div className="checkout-form">
        <form onSubmit={handleSubmit}>
          <p className='p'>
            Please fill out the form below with your details and click "Pay Now" to proceed with the payment for your appointment.
          </p>

          <label>Name</label> <br/>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          /> <br/>

          <label>Email</label> <br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          /> <br/>

          <label>Phone</label> <br/>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
            required
          /> 

          <p className='p'>
            <h3>Note:</h3> The total fee is $20.
          </p>

          {/* Display the message */}
          {message && <p>{message}</p>}

          {/* Pay Now button to submit the form and trigger payment */}
          <button type="submit" className="btn btnn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;