// src/App.js
import React from 'react';
import EnquiryForm from './EnquiryForm';
import './App.css'

const App = () => {
  return (
    <div className="App bck" id='h'>
      <div className="background-image"></div>
      <div className="overlay"></div>
      <div className="heading"><img src='./ff_logo_new.png' alt='logo'/>
      <h1 className='ff'>FlowerFox <span>Hospitality</span></h1>
      </div>
      <EnquiryForm />
    </div>
  );
};

export default App;
