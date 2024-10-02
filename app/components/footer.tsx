"use client";
import "./footer.css";
import Link from 'next/link';
import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <div className="">
          <img src="/images/logo.png" alt="Logo" className="" />
          <span className="">Ancedote</span>
        </div>

        <div className="">
          <Link href="/terms">Terms</Link>
        </div>

        <div className="">© {currentYear} MyApp. All rights reserved.</div>
      </div>

      <div className="">
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

