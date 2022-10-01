import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
       
        <div   className="navbar lg:px-16 sticky top-0  bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact font-bold dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
        <li className=" font-sans font-semibold"><a>Features</a></li>
        <li className=" font-sans font-semibold" tabIndex={0}>
          <a className="justify-between">
            Compare
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-white">
            <li className=" font-sans font-semibold"><a>Submenu 1</a></li>
            <li className=" font-sans font-semibold"><a>Submenu 2</a></li>
          </ul>
        </li>
        <li className=" font-sans font-semibold"><a>Support</a></li>
        <li className=" font-sans font-semibold" tabIndex={0}>
          <a className="justify-between">
           Blog
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2 bg-white">
            <li className=" font-sans font-semibold"><a>Submenu 1</a></li>
            <li className=" font-sans font-semibold"><a>Submenu 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <Link to='/' className="text-primary text-2xl font-semibold  font-sans">banquee.</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li className=" font-sans font-semibold"><a>Features</a></li>
      <li tabIndex={0} className=" font-sans font-semibold">
        <a>
        Compare
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li className=" font-sans font-semibold"><a>Submenu 1</a></li>
          <li className=" font-sans font-semibold"><a>Submenu 2</a></li>
        </ul>
      </li>
      <li className=" font-sans font-semibold"><a>Support</a></li>
      <li className=" font-sans font-semibold" tabIndex={0}>
        <a>
        Blog
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-white">
          <li className=" font-sans font-semibold"><a>Submenu 1</a></li>
          <li className=" font-sans font-semibold"><a>Submenu 2</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="text-primary px-2 lg:px-6 font-sans font-semibold">Login</Link>
    <Link to="/register" className="btn btn-primary btn-sm text-white">Open account</Link>
  </div>
</div>
   
    );
};

export default Header;