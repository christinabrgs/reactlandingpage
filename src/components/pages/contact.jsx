import React, { useRef, useState } from 'react'
import '../../App.css'
import emailjs from '@emailjs/browser'

function Contact () {
  const [buttonText, setButtonText] = useState("Send");

  const serviceID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID
  const templateID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID
  const emailAPI = process.env.REACT_APP_EMAIL_JS_API_KEY
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${serviceID}`, `${templateID}`, form.current, `${emailAPI}`)
      .then((result) => {
        console.log(result.text);
        // Update button text
        setButtonText("Message Sent!");
        
        // Clear the form and reset button text after 2 seconds
        setTimeout(() => {
          form.current.reset(); // Clear form fields
          setButtonText("Send"); // Reset button text
        }, 2000);

      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='sign-up'>
    <form className='contact-form' ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column'}}>
      <h1 className='contact-header' style={{color: '#fee7d5', paddingBottom: 60, textAlign: 'center'}}> Leave Me a Message 👇</h1>
      <label>Name</label>
      <input className='contact-input' style={{padding: 18}} type="text" name="user_name" />
      <label>Email</label>
      <input className='contact-input' style={{padding: 18}} type="email" name="user_email" />
      <label>Message</label>
      <textarea className='contact-input' name="message" style={{padding: 15, width: '100%', height: '80px', maxWidth: '100%'}} />
      <input className='contact-input-button' type="submit" value={buttonText} />
    </form>
    </div>
  )
}

export default Contact