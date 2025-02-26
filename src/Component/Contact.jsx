import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  const [formData, setFormData] = useState({
    name: '',
    contact: '', // This will store either email or mobile number
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateContact = (contact) => {
    // Regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Regex for 10-digit mobile number validation
    const mobileRegex = /^[0-9]{10}$/;

    return emailRegex.test(contact) || mobileRegex.test(contact);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the contact field
    if (!validateContact(formData.contact)) {
      alert('Please enter a valid email or 10-digit mobile number.');
      return;
    }

    // Replace with your Google Apps Script Web App URL
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbw6KTwMm1hr16WsU2iyirc0_UAINuuM52FtERtsVIly4pD80PQp5sorKFP-P7E0qkSIvg/exec';

    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
        handleReset(); // Clear the form
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      contact: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" dir="">
      <i className="bi bi-arrow-left" onClick={handleNavigation}></i>

      <div className="form-group">
        <h2 className="con_title">Get In Touch :{')'}</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="contact">Email or Mobile Number:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="form-control place"
          placeholder="Enter email or 10-digit mobile number"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-control"
          required
        ></textarea>
      </div>
      <div className="form-buttons">
        <button type="submit" className="submit-button">Submit</button>
        <button type="button" className="submit-button" onClick={handleReset}>Reset</button>
      </div>
      <div className="bg-animation">
        <div id="stars"></div>
      </div>
      <div className="logo">
        <img src="./assets/logo.png" alt="logo" width={'50px'} height={'50px'} />
      </div>
    </form>
  );
};

export default Contact;