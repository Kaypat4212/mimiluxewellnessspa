import './App.css';
import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Booking from './components/booking';
import Footer from './components/footer';
import Services from './components/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './components/images/logo.jpg';
import WhatsAppButton from './components/whatsappbutton';

function App() {
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current) {
      // Collapse the navbar using Bootstrap's collapse method
      const collapse = new window.bootstrap.Collapse(navbarCollapseRef.current);
      collapse.hide();
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><img className='logo' src={logo} alt="" /></a>

        <div id="menuToggle" className='p-5' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <input id="checkbox" type="checkbox" />
          <label className="toggle" htmlFor="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </div>

        <div className="collapse navbar-collapse justify-content-lg-end p-5" id="navbarSupportedContent" ref={navbarCollapseRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavLinkClick}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavLinkClick}>About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleNavLinkClick}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book" onClick={handleNavLinkClick}>Book An Appointment</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;