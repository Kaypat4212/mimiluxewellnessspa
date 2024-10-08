import React from 'react';
import '../components/styles/about.css'; // Import the CSS file for styling
import './styles/home.css'

const About = () => {
  return (
    <div className="about-container">
      <h2 data-aos="fade-right">About Mimiluxe Wellness Spa</h2>
      <p data-aos="fade-left">
        Welcome to <strong>Mimiluxe Wellness Spa</strong>, where relaxation meets rejuvenation. 
        At Mimiluxe, we specialize in a diverse range of massage therapies designed to 
        provide relief, relaxation, and revitalization for both body and mind.
      </p>
      <p data-aos="fade-left">
        Our spa is dedicated to offering an exceptional experience through our variety 
        of massage services, including Swedish, deep tissue, hot stone, aromatherapy, 
        and more. 
        
       <br /> Each treatment is tailored to meet the individual needs of our clients, 
        ensuring a personalized experience that addresses your specific wellness goals.
      </p>
      <h3 data-aos="fade-left">Our Expertise</h3>
      <p>
        With years of experience in the wellness industry, our team of highly skilled 
        and certified massage therapists is committed to providing top-notch service 
        and care. Our therapists undergo continuous training to stay updated with the 
        latest techniques and advancements in massage therapy. 
        
        <br /> This dedication to 
        professional growth ensures that you receive the highest standard of care.
      </p>
      <p data-aos="fade-left">
        At Mimiluxe Wellness Spa, we believe that true relaxation begins with an environment 
        designed to soothe and comfort. Our serene and elegant spa ambiance complements 
        our expert therapies, creating a holistic experience that promotes overall well-being.
      </p>
      <p data-aos="fade-down">
        Whether you are seeking relief from stress, recovering from physical strain, or simply 
        indulging in a moment of tranquility, Mimiluxe Wellness Spa is here to cater to 
        your needs with excellence and care. <br />
         We invite you to experience the ultimate in 
        relaxation and wellness with us.
      </p>
      <p data-aos="fade-left">
        Thank you for choosing Mimiluxe Wellness Spa.  <br/>
        
        We look forward to helping you achieve 
        your wellness goals. <br />

      </p>



      {/* <div className="bookapt">
      <Link to="/book" className='btnnn'>
  Book An Appointment Now
    </Link>
      </div> */}
    </div>
  );
};

export default About;
