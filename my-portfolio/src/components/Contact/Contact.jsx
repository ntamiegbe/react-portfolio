import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {FaTwitter} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x8zshib', 'template_3fknebk', form.current, "OsdoFHjOlBfWiMz0b")

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='Contact'>
      <h5> Get in touch </h5>
      <h2> Contact Me </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4> E-mail </h4>
            <h5> ntamiegbe00@gmail.com </h5>
            <a href="mailto:ntamiegbe00@gmail.com" target="_blank"> Send a mail </a>
          </article>
          
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4> WhatsApp </h4>
            <h5> +234 808 708 1503 </h5>
            <a href="https://api.whatsapp.com/send?phone=+2348087081503" target="_blank"> Send a message </a>
          </article>
          
          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4> Twitter </h4>
            <h5> @ntamiegbe</h5>
            <a href="https://twitter.com/ntamiegbe" target="_blank"> Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Full Name' required/>
            <input type="email" name='email' placeholder='Email' required/>
            <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact