// import React, { useEffect } from 'react';
// import './styles/payment.css'

// function Payment() {

//   return (
//     <div className='body'>
//       <h1>Booking Appointment Fee</h1>
//       <p>Please You are expected to make a payment for your appointment</p>

//       <p>Click the button below to make payment </p>

//       <button className='button'>Pay now</button>

//     </div>

//   );
// }

// export default Payment;
import './styles/contactform.css';
import React, { useState } from "react";
import "./styles/payment.css";
import logo from '../components/images/logo.jpg';

const App = () => {
  // Define state hooks to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add form validation here if needed
    
    // After validation, redirect to Paystack payment page
    // You can pass dynamic data in query params if required
    window.location.href = 'https://paystack.com/pay/appointmentfee';
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

          {/* Pay Now button to submit the form and trigger payment */}
          <button type="submit" className="btn btnn">Pay Now</button>
        </form>
      </div>
    </div>
  );
};

export default App;
