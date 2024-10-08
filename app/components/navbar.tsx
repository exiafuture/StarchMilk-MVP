"use client";
import React from 'react';
import "./navbar.css"
import Image from 'next/image';
import { Usetheme } from "./themeContext";
import Link from "next/link";

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = Usetheme();

  return (
    <nav className={`navbar ${theme}`}>
      <Link href="/">
        <div className="nav-icon">
          <Image
            src="/images/logo.png"
            alt="Next.js logo"
            width={98}
            height={44}
            priority
          />
          <h1 className="nav-name">Anecdote</h1>
        </div>
      </Link>

      <ul className="nav-links">
        <li><Link href="/" className="nav-link mobile-home">Home</Link></li>
        <li><Link href="/services" className="nav-link">Services</Link></li>
        <li><Link href="/about" className="nav-link">About</Link></li>
        <li><Link href="/pricing-plans" className="nav-link">Pricing</Link></li>
        <li><Link href="/contact" className="nav-link">Contact</Link></li>
        <li>
          <button className="toggle-button-theme" onClick={toggleTheme}>
            {theme === "light" ?
              <svg xmlns="http://www.w3.org/2000/svg" id="moon-svg" width="1.5rem" height="1.5rem" fill="black">
                <path d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 
                  0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243
                  0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 
                  1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953
                  7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483
                  10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 
                  1-1.484 2.059z"></path>
              </svg> :
              <svg xmlns="http://www.w3.org/2000/svg" id="sun-svg" width="1.5rem" height="1.5rem" fill="white">
                <path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 
                  6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 
                  3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 
                  8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 
                  1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122
                  2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 
                  1.414-1.414z"></path>
              </svg>
            }
          </button>
        </li>
      </ul>

      <button className={`access-btn-mobile`}>
        {
          theme === "light"
            ?
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 105 105" fill="none">
              <circle cx="52.5" cy="52.5" r="52.5" fill="#FD8787" />
              <line x1="28.5958" y1="22.0148" x2="76.5085" y2="22.5139" stroke="white" strokeWidth="10" />
              <line x1="28.5958" y1="72.9857" x2="76.5085" y2="73.4848" stroke="white" strokeWidth="10" />
              <line x1="28.5958" y1="47.5003" x2="76.5085" y2="47.9994" stroke="white" strokeWidth="10" />
            </svg>
            : <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 105 106" fill="none">
              <circle cx="52.5" cy="53.366" r="52.5" fill="#78F7FF" />
              <line x1="28.5958" y1="22.8809" x2="76.5093" y2="23.38" stroke="#010101" strokeWidth="10" />
              <line x1="28.5958" y1="73.8517" x2="76.5093" y2="74.3508" stroke="#010101" strokeWidth="10" />
              <line x1="28.5958" y1="48.3663" x2="76.5093" y2="48.8654" stroke="#010101" strokeWidth="10" />
            </svg>
        }
      </button>
    </nav>
  );
};

export default NavBar;
