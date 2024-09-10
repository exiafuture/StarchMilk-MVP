import React from 'react';
import "./navbar.css"
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">        
        <div className="svg-container">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="Next.js logo"
            width={170}
            height={38}
            priority
          />
        </div>
        
        <ul className="nav-links">
          <li><a href="#" className="nav-link">Home</a></li>
          <li><a href="#" className="nav-link">About</a></li>
          <li><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
