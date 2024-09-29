"use client";
import "./footer.css";

import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center px-4 py-6 border-t">
      {/* Section A */}
      <div className="flex flex-col items-center md:items-start">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-lg">MyApp</span>
        </div>

        {/* Terms and Privacy */}
        <div className="flex space-x-4 mb-2">
          <Link href="/terms" className="text-sm">Terms</Link>
          <Link href="/privacy" className="text-sm">Privacy</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm">© 2024 MyApp. All rights reserved.</div>
      </div>

      {/* Section B - Navigation Links */}
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
        <Link href="/" className="text-sm">Home</Link>
        <Link href="/products" className="text-sm">Products</Link>
        <Link href="/contact" className="text-sm">Contact</Link>
        <Link href="/about" className="text-sm">About</Link>
        <Link href="/pricing" className="text-sm">Pricing</Link>
      </div>
    </footer>
  );
};

export default Footer;

