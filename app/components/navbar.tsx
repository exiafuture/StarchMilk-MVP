import React from 'react';
import "./navbar.css"
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">        
        <Image
          className="nav-icon dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={89}
          height={35}
          priority
        />
        
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Services</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Pricing</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
