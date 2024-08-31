import './App.css';
import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Booking from './components/booking';
import Footer from './components/footer';
import Appointmentbooked from './components/appointmentbooked'
// import Successpage from './components/success';
import Services from './components/services';
import './components/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './components/images/logo.jpg';
import WhatsAppButton from './components/whatsappbutton'; // Import the WhatsAppButton component
import SuccessPage from './components/success';
import Payment from './components/payment';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const navbarCollapseRef = useRef(null);

  useEffect(() => {
    const navbarLinks = document.querySelectorAll('.nav-link');
    
    navbarLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapseRef.current.classList.contains('show')) {
          // Collapse the navbar by toggling the 'show' class off
          const collapse = new window.bootstrap.Collapse(navbarCollapseRef.current, {
            toggle: true
          });
          collapse.hide();
        }
      });
    });

    // Cleanup event listeners
    return () => {
      navbarLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
<HelmetProvider>
<Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img className='logo' src={logo} alt="" /></a>

          <div id="menuToggle" className='p-5' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <input id="checkbox" type="checkbox" />
          <label className="toggle" for="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>
        
        <div data-aos="zoom-in-down" className="collapse navbar-collapse justify-content-lg-end p-5" id="navbarSupportedContent" ref={navbarCollapseRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">Book An Appointment</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/services" element={<Services />} />
        <Route path="/appointmentbooked" element={<Appointmentbooked />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/payment" element={<Payment/>} />
        {/* <Route path="/thankyou" element={<Thankyou />} /> */}
      </Routes>
      <WhatsAppButton /> {/* Include the WhatsAppButton component */}
      <Footer />
    </Router>
</HelmetProvider>
  );
}

export default App;