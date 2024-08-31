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
import './styles/contactform.css'

import React, { useState } from "react";

import { PaystackButton } from "react-paystack";

import "./styles/payment.css";
import logo from '../components/images/logo.jpg';


const App = () => {

  const publicKey = "pk_live_fccc6c2062787ac03ad7c6c68d2908516b442813"

  const amount = 1000000

  const [email, setEmail] = useState("")

  const [name, setName] = useState("")

  const [phone, setPhone] = useState("")


  const componentProps = {

    email,

    amount,

    metadata: {

      name,

      phone,

    },

    publicKey,

    text: "Pay Now",

    onSuccess: () =>

      alert("Thanks for doing business with us! Come back soon!!"),

    onClose: () => alert("Wait! Don't leave :("),

  }


  return (

    <div className="App">



        <div className="item">

          <img className='logo' style={{width: '100px'}} src={logo} alt="" />
          <h1> Appointment Fee Payment Portal</h1>


        </div>

        <div className="checkout-form">

          <form>

          <p className='p'>Please fill out the form below with your details and click "Pay Now" to proceed with the payment for your appointment.</p>

            <label>Name</label> <br/>

            <input

              type="text"

              id="name"

              onChange={(e) => setName(e.target.value)} required

            /> <br/>

            <label>Email</label> <br/>

            <input

              type="email"

              id="email"

              onChange={(e) => setEmail(e.target.value)} required

            /> <br/>

            <label>Phone</label> <br/>

            <input

              type="telp"

              id="phone"

              onChange={(e) => setPhone(e.target.value)} required

            /> 

<p className='p'> <h3>Note:</h3> The total fee is $20.</p>
        
          </form>

          <PaystackButton id="pay" className='btn' {...componentProps} />


        </div>

      </div>


  )

}


export default App
