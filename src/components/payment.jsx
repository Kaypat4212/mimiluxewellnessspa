import React, { useEffect } from 'react';
import './styles/payment.css'

function Payment() {
  useEffect(() => {
    const paymentDetails = JSON.parse(sessionStorage.getItem('paymentDetails'));

    if (paymentDetails) {
      const handler = window.PaystackPop.setup({
        key: 'pk_live_fccc6c2062787ac03ad7c6c68d2908516b442813', // Replace with your actual public key
        email: paymentDetails.email,
        amount: paymentDetails.amount, // Amount in kobo
        currency: 'NGN', // Adjust if needed
        callback: function (response) {
          // Handle successful payment
          alert('Payment successful! Reference: ' + response.reference);
          sessionStorage.removeItem('paymentDetails'); // Clear payment details
        },
        onClose: function () {
          // Handle cases where payment is cancelled
          alert('Transaction was not completed.');
        }
      });

      handler.openIframe(); // Open Paystack checkout
    }
  }, []);

  return (
    <div className='body'>
      <h1>Processing Payment...</h1>
      <p>Please wait while we process your payment.</p>
    </div>
  );
}

export default Payment;
