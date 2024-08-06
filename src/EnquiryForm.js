// src/EnquiryForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './EnquiryForm.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    property: '',
    checkin: '',
    checkout: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/enquiry`, formData)
      .then(response => {
        alert('Enquiry submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          property: '',
          checkin: '',
          checkout: '',
          message: ''
        });
      })
      .catch(error => {
        console.log('Error:', error);
        alert('Error submitting enquiry');
      });
  };

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Property:</label>
        <select
          name="property"
          value={formData.property}
          onChange={handleChange}
          required
        >
          <option value="">Select a property</option>
          <option value="CyberNest:Spacious APT in IT hub Hinjewadi">CyberNest:Spacious APT in IT hub Hinjewadi</option>
          <option value="Millennia:2BHK APT in Hinjewadi">Millennia:2BHK APT in Hinjewadi</option>
          <option value="Skyline:Large modern 3BHK APT w/balcony">Skyline:Large modern 3BHK APT w/balcony</option>
          <option value="Tranquil:2 Bed Villa with Pool">Tranquil:2 Bed Villa with Pool</option>
          <option value="Prop">Tranquil:3BHK Villa with PVT POOL in Gold Valley</option>
        </select>
      </div>
      <div className="form-group">
        <label>Check-in Date:</label>
        <input
          type="date"
          name="checkin"
          value={formData.checkin}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Check-out Date:</label>
        <input
          type="date"
          name="checkout"
          value={formData.checkout}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='type here..'
        />
      </div>
      <div className='submitbtn'>
      <button type="submit">Enquire Now!</button>
      </div>
    </form>
  );
};

export default EnquiryForm;

