import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./styles/contactform.css";
import "./styles/payment.css";
import logo from '../components/images/logo.jpg';

const App = () => {
  const publicKey = "pk_live_fccc6c2062787ac03ad7c6c68d2908516b442813";
  const amount = 1000000;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!name || !email || !phone) {
      setError("Please fill out all fields.");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      setError("Phone number must be exactly 10 digits.");
      return false;
    }
    setError("");
    return true;
  };

  const handlePayment = () => {
    if (validateForm()) {
      // Trigger payment if form is valid
      return true;
    }
    return false;
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <div className="App">
      <div className="item">
        <img className='logo' style={{width: '100px'}} src={logo} alt="" />
        <h1>Appointment Fee Payment Portal</h1>
      </div>

      <div className="checkout-form">
        <form>
          <p className='p'>Please fill out the form below with your details and click "Pay Now" to proceed with the payment for your appointment.</p>

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

          {error && <p style={{ color: 'red', fontSize: '0.9em' }}>{error}</p>}

          <p className='p'><h3>Note:</h3> The total fee is $20.</p>
        </form>

        <PaystackButton
          id="pay"
          className='btn'
          {...componentProps}
          onClick={handlePayment}
        />
      </div>
    </div>
  );
};

export default App;
