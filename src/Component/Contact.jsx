import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form" dir="">
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
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
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
