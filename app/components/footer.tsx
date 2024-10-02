"use client";
import "./footer.css";
import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section-a">
        <div className="footer-logo-app">
          <img src="/images/logo.png" alt="Logo" className="footer-logo" />
          <span className="footer-app-name">Ancedote</span>
        </div>

        <div className="footer-terms">
          <Link href="/terms">Terms</Link>
        </div>

        <div className="footer-copyright">© {currentYear} MyApp. All rights reserved.</div>
      </div>

      <div className="footer-section-b">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/pricing-plans">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;

