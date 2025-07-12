import React, { useState } from 'react';
import logo from '../assets/Icons/icon_aino.png';
import { BsList, BsX } from 'react-icons/bs';
import '../Navbar.css'; // استيراد ملف CSS

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-[999] w-full bg-white  shadow-md border-b border-gray-200 px-4 py-2.5">
      <div className="flex justify-between items-center w-full mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[35px] h-auto mr-2 " />
          <span className="text-2xl font-bold">AINO</span>
        </div>

        {/* Hamburger Button */}
        <button
          className={`lg:hidden text-gray-700 text-3xl transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}
          onClick={toggleMenu}
        >
          {menuOpen ? <BsX /> : <BsList />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen
              ? 'flex flex-col gap-2 p-4 absolute top-[55px] left-0 w-full bg-[rgba(255,247,247,0.9)] backdrop-blur-md opacity-100 visible translate-y-0 z-50'
              : 'hidden lg:flex lg:gap-4 lg:items-center lg:static lg:w-auto lg:bg-transparent lg:opacity-100 lg:visible lg:translate-y-0 lg:mt-2'
          } transition-all duration-300 ease-in-out`}
        >
          <li>
            <button className="w-full text-left lg:w-auto text-gray-700 font-bold py-2 px-3 hover:text-blue-500 hover:scale-105 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
              Home
            </button>
          </li>
          <li>
            <button className="w-full text-left lg:w-auto text-gray-700 font-bold py-2 px-3 hover:text-blue-500 hover:scale-105 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300 ">
              Architecture
            </button>
          </li>
          <li>
            <button className="w-full text-left lg:w-auto text-gray-700 font-bold py-2 px-3 hover:text-blue-500 hover:scale-105 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
              Models
            </button>
          </li>
          <li>
            <button className="w-full text-left lg:w-auto text-gray-700 font-bold py-2 px-3 hover:text-blue-500 hover:scale-105 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
              Dateset
            </button>
          </li>
         
          <li>
            <button className="w-full text-left lg:w-auto text-gray-700 font-bold py-2 px-3 hover:text-blue-500 hover:scale-105 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
              Learn
            </button>
          </li>
          <li>
            <button className="w-full text-left lg:w-auto text-gray-700 font-bold py-2 px-3 hover:text-blue-500 hover:scale-105 border-b-2 border-transparent hover:border-blue-500 transition-all duration-300">
              Docs
            </button>
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="hidden lg:flex gap-2.5 lg:mt-2">
          <button className="signup-btn ">
            Sign Up / Log In
          </button>
          <button className="bg-blue-500 text-white rounded-md py-2 px-3 hover:bg-blue-600 transition-all duration-300">
            Download
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;