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
    <div className=''>
      <h1>Appointment Successfully Booked</h1> <br/>
      <p>Thank you for booking an appointment.<br/>
     </p>
     
    </div>
  );
}

export default SuccessPage;
