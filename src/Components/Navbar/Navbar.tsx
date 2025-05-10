import React from 'react';
import './Navbar.css';
import logo from '../../assets/D.png';

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='logo' />
      <ul className='nav-links'>
        <li>Home</li>
        <li>About me</li>
        <li>My Project</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
