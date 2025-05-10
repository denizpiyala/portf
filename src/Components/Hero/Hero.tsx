import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import gif from '../../assets/3Dgif.gif';

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <img src={gif} alt='background gif' className='gif-background' />
      <div className='hero-content'>
        <img src={profile} alt='profile' className='profile' />
        <h1><span>hii I'm Deniz Piyala,</span> frontend developer</h1>
        <p>
          I'm a frontend developer with a passion for creating beautiful and functional web applications.
          I love to learn new technologies and improve my skills.
        </p>
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
