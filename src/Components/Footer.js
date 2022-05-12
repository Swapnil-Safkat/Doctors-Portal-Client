import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="flex flex-col items-center bg-[url('/src/assets/images/footer.png')] bg-cover pt-16 pb-11 px-24 ">
      <div className='footer flex flex-col sm:flex-row justify-between mb-24 text-["#939393"]'>
        <div className=''>
          <span className="footer-title">Services</span>
          <a href='/' className="link link-hover text-accent">Emergency Checkup</a>
          <a href='/' className="link link-hover text-accent">Monthly Checkup</a>
          <a href='/' className="link link-hover text-accent">Weekly Checkup</a>
          <a href='/' className="link link-hover text-accent">Deep Checkup</a>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <a href='/' className="link link-hover text-accent">Fluoride Treatment</a>
          <a href='/' className="link link-hover text-accent">Cavity Filling</a>
          <a href='/' className="link link-hover text-accent">Teeth Whitening</a>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <a href='/' className="link link-hover text-accent">New York - 101010 Hudson</a>
        </div>
      </div>
      <div>
        <p className='text-center'>Copyright 2022 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;