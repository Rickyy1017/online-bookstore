"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="relative z-10 bg-white shadow-md border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={80} height={100} className="mr-4" />
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-gray-900">UNUSUAL USUAL MAN</h1>
            <p className="text-sm text-gray-600">Online Bookstore</p>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span className="text-2xl">{mobileNavOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/services" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Services</Link>
          <Link href="/humanitarian-initiative" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Humanitarian Initiative</Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Contact</Link>
        </nav>
      </div>

      {/* Mobile navigation dropdown (absolute so it floats and doesn't push content) */}
      <div
        className={`md:hidden absolute inset-x-0 top-full z-50 transform transition-all duration-300 ease-in-out ${mobileNavOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileNavOpen}
      >
        <div className="bg-white border-b shadow-sm rounded-b-md">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            <Link href="/" onClick={() => setMobileNavOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">Home</Link>
            <Link href="/services" onClick={() => setMobileNavOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">Services</Link>
            <Link href="/humanitarian-initiative" onClick={() => setMobileNavOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">Humanitarian Initiative</Link>
            <Link href="/about" onClick={() => setMobileNavOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">About Us</Link>
            <Link href="/contact" onClick={() => setMobileNavOpen(false)} className="text-gray-700 font-medium hover:text-indigo-600">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
