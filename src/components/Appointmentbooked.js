import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/appointmentbooked.css'
import { PaystackButton } from 'react-paystack';

function AppointmentBooked() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const service = query.get('service');

  // Map services to prices
  const servicePrices = {
    DeepTissueMassage: 5000,
    FaceMassage: 4000,
    ReflexologyMassage: 4500,
    ShiatsuMassage: 6000,
    AromatherapyMassage: 5500,
    SwedishMassage: 5000,
    NuruMassage: 7000,
    HotstoneMassage: 6500,
    MyofascialReleaseMassage: 6000,
    ThaiMassage: 5500,
  };

  const amount = servicePrices[service] * 100; // Paystack expects amount in kobo (for NGN)

  const paystackConfig = {
    email: query.get('email'), // You can also fetch other details like name, etc.
    amount: amount,
    publicKey: 'pk_live_fccc6c2062787ac03ad7c6c68d2908516b442813',
    text: 'Proceed to Payment',
    onSuccess: () => alert('Thanks for booking! Your payment was successful.'),
    onClose: () => alert('Wait! You need to complete the payment.'),
  };

  return (
    <div>
      <h1>Appointment Booked</h1>
      <p>You have selected: {service}</p>
      <p>Price: ₦{amount / 100}</p>
      <PaystackButton {...paystackConfig} />
    </div>
  );
}

export default AppointmentBooked;
