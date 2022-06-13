import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => (
  <header className="navbar">
    <NavLink className="logo" to="/">
      <img src={logo} className="logoImage" alt="spacehub logo" />
      <h1 className="logoText">Space Travellers&apos; Hub</h1>
    </NavLink>
    <nav>
      <NavLink
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
        className="nav__link"
        to="/missions"
      >
        Missions
      </NavLink>
      <NavLink
        style={({ isActive }) => ({
          textDecoration: isActive ? 'underline' : 'none',
        })}
        className="nav__link"
        to="/profile"
      >
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default Header;
