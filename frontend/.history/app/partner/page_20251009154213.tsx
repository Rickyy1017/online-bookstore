import Link from 'next/link';
import { useState } from 'react';

export default function Partner() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const bookDetails = e.target.bookDetails.value.trim();
    const message = e.target.message.value.trim();

    let newErrors = {};
    if (!name) newErrors.name = true;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const mailto = `mailto:neptunhomes@gmail.com?subject=Partnership Request&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0APhone: ${encodeURIComponent(phone)}%0ABook Details: ${encodeURIComponent(bookDetails)}%0AMessage: ${encodeURIComponent(message)}`;
      window.location.href = mailto;
    }
  };

  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-1">
        <Link href="/" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>
      <div className="font-sans bg-gray-100 m-0 p-0 flex justify-center items-center min-h-screen">
        <div className="bg-white p-5 w-full max-w-md shadow-lg rounded-lg m-2.5">
          <h2 className="text-center text-blue-800">Partner with Us</h2>
          <form id="partnerForm" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="font-bold block mb-1">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" className={`w-full p-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded text-base`} />
              <span className={`text-red-500 text-sm ${errors.name ? 'block' : 'hidden'}`}>Please enter your name.</span>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="font-bold block mb-1">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" className={`w-full p-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded text-base`} />
              <span className={`text-red-500 text-sm ${errors.email ? 'block' : 'hidden'}`}>Please enter a valid email.</span>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="font-bold block mb-1">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" className="w-full p-2.5 border border-gray-300 rounded text-base" />
            </div>

            <div className="mb-4">
              <label htmlFor="bookDetails" className="font-bold block mb-1">Book Details</label>
              <textarea id="bookDetails" placeholder="Describe your book(s)" className="w-full p-2.5 border border-gray-300 rounded text-base resize-y h-24" />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="font-bold block mb-1">Additional Message</label>
              <textarea id="message" placeholder="Tell us more about your interest in partnering with us" className="w-full p-2.5 border border-gray-300 rounded text-base resize-y h-24" />
            </div>

            <button type="submit" className="w-full p-2.5 bg-blue-800 text-white border-none rounded text-lg cursor-pointer transition-colors hover:bg-blue-900">Submit</button>
          </form>
        </div>
      </div>
      <footer className="bg-blue-800 text-white text-center py-4 mt-8">
        <p>© 2025 Covenant Books & Consulting. All Rights Reserved.</p>
        <p className="mb-4">Empowering lives through literature, community support, and global business expertise.</p>
        <nav className="mb-4">
          <Link href="/about" className="text-white hover:underline mx-1">About Us</Link> |
          <Link href="/services" className="text-white hover:underline mx-1">Services</Link> |
          <Link href="/contact" className="text-white hover:underline mx-1">Contact Us</Link>
        </nav>
        <div className="mb-4">
          <a href="#" className="text-blue-300 mx-1 no-underline">Facebook</a> •
          <a href="#" className="text-blue-300 mx-1 no-underline">Twitter</a> •
          <a href="#" className="text-blue-300 mx-1 no-underline">LinkedIn</a>
        </div>
        <p>Covenant Daycare Garden Foundation is a proud initiative dedicated to supporting elders and widows in need.</p>
      </footer>
    </>
  );
}
