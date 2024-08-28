import React from 'react';

function ContactForm() {
    

    return (
      <div>
        <h1>Contact Us</h1>
        <form
        name="appointment"
        method="POST"
        netlify
        netlify-honeypot="bot-field"
        
    >
        {/* <!-- Hidden field for Netlify form handling --> */}
        <input type="hidden" name="form-name" value="appointment" />

        {/* <!-- Hidden field to prevent spam bots --> */}
        <div style={{display:'none'}}>
            <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
            </label>
        </div>

        {/* <!-- Input field for name --> */}
        <div class="form-group">
            <label htmlFor="name">Your Name</label>
            <input
                type="text"
                id="name"
                name="name"
                required
            />
        </div>

        {/* <!-- Input field for email --> */}
        <div class="form-group">
            <label htmlFor="email">Your Email</label>
            <input
                type="email"
                id="email"
                name="email"
                required
            />
        </div>

        {/* <!-- Input field for phone number --> */}
        <div class="form-group">
            <label htmlFor="phone">Your Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                required
            />
        </div>

        {/* <!-- Select field for service type --> */}
        <div class="form-group">
            <label htmlFor="service">Service Type</label>
            <select
                id="service"
                name="service"
                required
            >
                <option value="" disabled>Select a service</option>
                <option value="consultation">Consultation</option>
                <option value="follow-up">Follow-up</option>
                <option value="review">Review</option>
                {/* <!-- Add more options as needed --> */}
            </select>
        </div>

        {/* <!-- Input field for preferred date --> */}
        <div class="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
                type="date"
                id="date"
                name="date"
                required
            />
        </div>

        {/* <!-- Input field for preferred time --> */}
        <div class="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input
                type="time"
                id="time"
                name="time"
                required
            />
        </div>
{/* 
        <!-- Optional message field --> */}
        <div class="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
                id="message"
                name="message"
                rows="4"
            ></textarea>
        </div>
{/* 
        Submit button */}
        <button type="submit">Book Appointment</button>
    </form>

      </div>
    );
  };
  

export default ContactForm;
