import React from 'react';
import logo from '../../assets/logo.png';
import './Logo.css';

const Logo = () => {
  return <img src={logo} alt="QTify Logo" className="logo" />;
};

export default Logo; // ✅ this must be present
