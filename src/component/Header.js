import React from 'react';
import logo from '../assets/logo.png';

const Header = () => (
  <div className="navbar">
    <div className="logo">
      <img src={logo} className="logoImage" alt="spacehub logo" />
      <h1 className="logoText">Space Travellers&apos; Hub</h1>
    </div>
  </div>
);

export default Header;
