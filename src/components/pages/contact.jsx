import React, { useRef } from 'react'
import '../../App.css'
import emailjs from '@emailjs/browser'

function Contact () {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='sign-up'>
    <form className='contact-form' ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection: 'column'}}>
      <h1 className='contact-header' style={{color: '#fee7d5', paddingBottom: 60, textAlign: 'center'}}> Leave Me a Message 👇</h1>
      <label>Name</label>
      <input className='contact-input' type="text" name="user_name" />
      <label>Email</label>
      <input className='contact-input' type="email" name="user_email" />
      <label>Message</label>
      <textarea className='contact-input' name="message" style={{width: '100%', height: '80px', maxWidth: '100%'}} />
      <input className='contact-input-button' type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contact