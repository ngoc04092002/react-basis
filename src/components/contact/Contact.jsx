import React from 'react'
import './contact.scss'
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_badwnib', 'template_itbweie', form.current, '0a1I0fwcrB4lMG71v')
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__icon"/>
            <h4>Email</h4>
            <h5>vua6040@gmail.com</h5>
            <a href="mailto:vua6040@gmail.com">Send to me</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__icon"/>
            <h4>Messenger</h4>
            <h5>Ngoc Van</h5>
            <a href="https://www.facebook.com/profile.php?id=100009696701104">Send to me</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon"/>
            <h4>WhatsApp</h4>
            <h5>113</h5>
            <a href="https://www.facebook.com/profile.php?id=100009696701104">Send to me</a>
          </article>
        </div>

        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your full name' name='name' required/>
          <input type="email" name='email' placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messenger</button>
        </form>
      </div>
    </section>
  )
}

export default Contact