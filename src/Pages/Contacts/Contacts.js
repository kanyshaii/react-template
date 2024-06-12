import React, { useState } from 'react';
import './Contacts.css';
import Title from '../../Components/Title/Title';

const Contacts = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Message sent successfully!');
  };

  return (
    <div className="Contacts-container container">
      <Title >Our Contacts</Title> 
      <div className="Contact-details">
        <p>
          <strong className="Contact-label">Address:</strong> 123 Music Street, Cityville, State, Country
        </p>
        <p>
          <strong className="Contact-label">Phone:</strong> +996 707 50 45 99
        </p>
        <p>
          <strong className="Contact-label">Email:</strong> kanyshaibaktybekova07@gmail.com
        </p>
        <p>
          <strong className="Contact-label">Working Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM
        </p>
      </div>
      <div className="Contact-icons">
        <ul className="social-media">
          <li>
            <a href="https://facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://wa.me/0707504599">
            <i class="fab fa-whatsapp"></i>
            </a>
          </li>
          
          <li>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/qanyshaii/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="Message-form-container">
        <h2 className="Message-form-heading">Send us a message</h2>
        <form onSubmit={handleSubmit} className="Message-form">
          <label className="Message-form-label">
            Name:
            <input type="text" name="name" required className="Message-form-input" />
          </label>
          <label className="Message-form-label">
            Email:
            <input type="email" name="email" required className="Message-form-input" />
          </label>
          <label className="Message-form-label">
            Message:
            <textarea name="message" required className="Message-form-textarea"></textarea>
          </label>
          <button type="submit" className="Message-form-button">Submit</button>
        </form>
        {formStatus && <p className="Form-status">{formStatus}</p>}
      </div>
      <div className="Contacts_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15466.31345645536!2d78.391487!3d42.490203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1625684054483!5m2!1sen!2sus"
          title="Контактная информация"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacts;
