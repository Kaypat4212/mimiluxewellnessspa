import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Booking from './components/booking';
import Footer from './components/footer';
import Services from './components/services';
import './components/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './components/images/logo.jpg'
import './components/styles/style.css'
import { Link } from 'react-router-dom';
import './components/styles/whatsappbutton.css'
import WhatsAppButton from './components/whatsappbutton'; // Import the WhatsAppButton component
function App() {
  return (

    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/"><img className='logo' src={logo} alt="" /></a>



        <div id="menuToggle" className='p-5' type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <input id="checkbox" type="checkbox" />
          <label class="toggle" for="checkbox">
            <div class="bar bar--top"></div>
            <div class="bar bar--middle"></div>
            <div class="bar bar--bottom"></div>
          </label>
        </div>

        <div class="collapse navbar-collapse justify-content-lg-end p-5" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services">Services</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/book">Book An Appointment</Link>
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
      <WhatsAppButton /> {/* Include the WhatsAppButton component */}
      <Footer />
    </Router>
    
  );
}

export default App;

