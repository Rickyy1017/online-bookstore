"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS env vars not configured');
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      console.log('EmailJS result', result);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('EmailJS send error', err);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-5">
        <h1 className="text-blue-800">Contact Us</h1>
        <p className="mb-5">
          We would love to hear from you! Whether you have questions about our bookstore, foundation, or business consultation services, please reach out to us.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
          <label className="flex flex-col text-gray-700">
            Name:
            <input required type="text" name="from_name" className="border border-gray-300 rounded p-2 mt-1" />
          </label>
          <label className="flex flex-col text-gray-700">
            Email:
            <input required type="email" name="reply_to" className="border border-gray-300 rounded p-2 mt-1" />
          </label>
          <label className="flex flex-col text-gray-700">
            Message:
            <textarea required name="message" rows={5} className="border border-gray-300 rounded p-2 mt-1" />
          </label>
          <button disabled={status === 'sending'} type="submit" className="bg-blue-800 text-white p-2 rounded font-bold hover:bg-blue-900 disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className="text-green-600">Message sent — thank you!</p>}
          {status === 'error' && <p className="text-red-600">Something went wrong. Please try again later.</p>}
        </form>
      </div>
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold">© 2025 Covenant Books & Consulting. All Rights Reserved.</p>
            <p className="text-gray-300 mt-2">Empowering lives through literature, community support, and global business expertise.</p>
          </div>
          <nav className="flex justify-center mb-8 space-x-6">
            <Link href="/about" className="text-gray-200 hover:text-indigo-400 transition-colors">About Us</Link>
            <Link href="/services" className="text-gray-200 hover:text-indigo-400 transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-200 hover:text-indigo-400 transition-colors">Contact Us</Link>
          </nav>
          <div className="flex justify-center mb-8 space-x-4">
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">LinkedIn</a>
          </div>
          <p className="text-center text-gray-300">Covenant Daycare Garden Foundation is a proud initiative dedicated to supporting elders and widows in need.</p>
        </div>
      </footer>
    </>
  );
}
