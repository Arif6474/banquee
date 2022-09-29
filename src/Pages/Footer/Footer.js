import React from 'react';

const Footer = () => {
    return (
        <div className="mt-16">
          <footer className="footer p-10 bg-white text-base-content">
  <div>
  <p className="text-primary text-2xl font-semibold  font-sans">banquee.</p>
  </div> 
  <div>
    <span className=" text-black font-bold opacity-90">About</span> 
    <a className="link link-hover font-medium opacity-70">Features</a> 
    <a className="link link-hover font-medium opacity-70">Pricing</a> 
    <a className="link link-hover font-medium opacity-70">Support</a> 

  </div> 
  <div>
    <span className=" text-black font-bold opacity-90">Blog</span> 
    <a className="link link-hover font-medium opacity-70">Products</a> 
    <a className="link link-hover font-medium opacity-70">Technology</a> 
    <a className="link link-hover font-medium opacity-70">Crypto</a> 
  </div> 
  <div>
    <span className=" text-black font-bold opacity-90">Webflow</span> 
    <a className="link link-hover font-medium opacity-70">Styleguide</a> 
    <a className="link link-hover font-medium opacity-70">Licensing</a> 
    <a className="link link-hover font-medium opacity-70">Changelog</a>
  </div>
  <div>
    <span className=" text-black font-bold opacity-90">Social Media</span> 
    <a className="link link-hover font-medium opacity-70">Twitter</a> 
    <a className="link link-hover font-medium opacity-70">Facebook</a> 
    <a className="link link-hover font-medium opacity-70">Instagram</a> 
  </div>
</footer>
        </div>
    );
};

export default Footer;