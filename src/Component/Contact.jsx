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
  
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxZhkTt0sVmvMokO6dcCzvfvxA8clEr9KFMsj8v0vX9YdkF70zN9nlUKvTn7X_XdPeuig/exec';
  
    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST',
        mode: 'no-cors', // Set mode to 'no-cors'
        headers: {
          'Content-Type': 'application/json', // This header may not work in 'no-cors' mode
        },
        body: JSON.stringify(formData),
      });
  
      // Since 'no-cors' mode returns an opaque response, you can't check response.ok or read the response body
      alert('Form submitted successfully!'); // Assume success
      handleReset(); // Clear the form
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
          className="form-control"
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