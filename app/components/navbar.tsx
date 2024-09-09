// components/NavBar.js
import React from 'react';

const NavBar = () => {
  return (
    <nav className="
      bg-blue-500 text-white p-4 fixed w-full z-10
      bottom-0 md:bottom-auto md:top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
