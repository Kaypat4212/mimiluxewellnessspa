import React, {useEffect} from 'react';
import '../components/styles/success.css';
import { useNavigate } from 'react-router-dom';


function SuccessPage() {
    const navigate = useNavigate();

  useEffect(() => {
    // Display the success message
    const timer = setTimeout(() => {
      // Redirect to payment page after 5 seconds
      navigate('/payment');
    }, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='body'>
      <h1>Appointment Successfully Booked</h1> <br/>
      <p>Thank you for booking an appointment.<br/>
     </p>

     <p>You will be redirected to the payment portal <br/> to complete your appointment booking. </p>
     <p> If you are not redirected in 5 secs </p> <br/>
    
      <a className='text-center text-decoration-none' href="/payment"> Click Here  </a>
    </div>
  );
}

export default SuccessPage;
