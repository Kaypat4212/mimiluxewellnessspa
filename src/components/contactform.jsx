import React from 'react';

function ContactForm() {
    

    return (
      <div>
        <h1>Contact Us</h1>
        <form name="appointment" method="POST" netlify >
        <input type="hidden" name="form-name" value="appointment"/>
        {/* <div hidden>
            <label>Don’t fill this out if youre human: <input name="bot-field" /></label>
        </div> */}
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required/>
        <br/>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/>
        <br/>
        <label for="date">Date:</label>
        <input type="date" id="date" name="date" required/>
        <br/>
        <label for="time">Time:</label>
        <input type="time" id="time" name="time" required/>
        <br/>
        <button type="submit">Book Appointment</button>
    </form>

      </div>
    );
  };
  

export default ContactForm;
