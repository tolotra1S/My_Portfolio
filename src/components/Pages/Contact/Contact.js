import "./Contact.css"
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {MdMarkEmailRead} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

export const Contact = () => {
  return (
  <section className="Contact" id="Contact">
    <h5>Get in touch</h5>
    <h2>Contact me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
        <RiMessengerLine className="contact_option-icon"/>
          <h4>Messenger</h4>
          <h4>Ranarison Tolotras</h4>
          <a href="https://m.me/tolotrass">Send a message</a>
        </article>
        <article className="contact_option">
        <MdMarkEmailRead className="contact_option-icon"/>
          <h4>Email</h4>
          <h4>tolotraranarison@gmail.com</h4>
          <a href="mailto:tolotraranarison@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact_option">
        <BsWhatsapp className="contact_option-icon"/>
          <h4>Whatsapp</h4>
          <h4>+261 34 52 211 78 </h4>
          <a href="https://api.whatsapp.com/send?phone+261345221178">Send a message</a>
        </article>

      </div>
      <form action="" className="form">
        <input type="text" name="name" placeholder="Your full name" required/>
        <input type="email" name="email" placeholder="Your full email" required/>
        <textarea name="message" rows="7" placeholder="Your message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>

    </div>

  </section>
  
  );
};
