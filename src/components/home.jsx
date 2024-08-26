import React from 'react'
import { Link } from 'react-router-dom';
import './styles/home.css'

const home = () => {

    return (
        <header className="hero">
            <div className="hero-overlay">
                <h1>Welcome to Mimiluxe Wellness Spa</h1>

            </div>

            <div className='text-center'>
                <p>Experience Luxury and Relaxation</p>
                
                <Link to="/book" className="button l">
  Book An Appointment
    </Link>
            </div>
        </header>
    )
}

export default home