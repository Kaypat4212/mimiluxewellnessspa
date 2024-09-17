// import React from 'react';
import './styles/footer.css';
// import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

// import './components/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import logo from './components/images/logo.jpg';

const footer = () => {
  return (
    <footer className='footer'>
     

      <div className="text-white text-center ul" >
            
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> 
          
            
              <Link className="nav-link" to="/about">About</Link> 
          
            
              <Link className="nav-link" to="/services">Services</Link> 
          
            
              <Link className="nav-link" to="/book">Book An Appointment</Link> 
          
          </div>
          <div>
            
<div className=" mauto">
<a
          href="https://snapchat.com/t/5oM0W4HA" // Replace with your Snapchat username
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <i className="fab fa-snapchat-ghost"></i>
        </a>


        <br/>

            <a
          href="https://www.instagram.com/mimiluxe_wellness_theraptistsa?igsh=Y3o2YWt2cTNsbDJ3" // Replace with your Snapchat username
          target="_blank"
          rel="noopener noreferrer"
          
        >
<i class="fa-brands fa-instagram"></i>
        </a>
</div>
            
          </div>
         <h2 >© 2024 Mimiluxe Wellness Spa</h2>
         <small>Built & Developed by <a className='text-decoration-none text-white' href="https://www.kaypat.dev">Kaypat.dev</a></small>
 
      </footer>
  )
}

export default footer