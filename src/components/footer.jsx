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
            
            <a
          href="https://snapchat.com/t/5oM0W4HA" // Replace with your Snapchat username
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <i className="fab fa-snapchat-ghost"></i>
        </a>
            
          </div>
          <h2>© 2024 Mimiluxe Wellness Spa</h2>
      </footer>
  )
}

export default footer