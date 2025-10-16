"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CartItem {
  name: string;
  type: string;
  price: number;
}

export default function Payment() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(cartData);
    const sum = cartData.reduce((acc: number, item: CartItem) => acc + item.price, 0);
    setTotal(sum);
  }, []);

  return (
    <>
      <header className="text-center py-5">
        <h1 className="text-4xl text-gray-800 mb-5">Payment Details</h1>
        <nav className="bg-blue-900 flex justify-center py-2">
          <Link href="/" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Home</Link>
          <Link href="/services" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Services</Link>
          <Link href="/about" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">About Us</Link>
          <Link href="/contact" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Contact</Link>
        </nav>
      </header>
      <main className="max-w-4xl mx-auto p-5">
        <section className="mb-10">
          <h2 className="text-3xl text-gray-800 mb-5">Order Summary</h2>
          <ul className="mb-5">
            {cart.map((item, index) => (
              <li key={index} className="mb-2">{item.name} ({item.type}) - ₦{(item.price / 100).toFixed(2)}</li>
            ))}
          </ul>
          <p>Total Amount: ₦{(total / 100).toFixed(2)}</p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl text-gray-800 mb-5">Payment Information</h2>
          <p className="mb-4">Please transfer the total amount to the following account or use the provided payment method:</p>
          <p><strong>Account Name:</strong> COVENANT DAYCARE GARDEN FOUNDATION</p>
          <p><strong>Account Number:</strong> 2036201646</p>
          <p><strong>Bank:</strong> FIRST BANK Plc</p>
          <p>Kindly attach the books you order in your payment slip</p>
        </section>

        <section>
          <h2 className="text-3xl text-gray-800 mb-5">Submit Payment Proof</h2>
          <p className="mb-4">After making the payment, click the button below to send us your payment proof via email.</p>
          <a
            href="mailto:addpr467@gmail.com,nathchuks_consulting@yahoo.com?subject=Payment Proof for Order"
            className="inline-block px-5 py-2.5 bg-blue-600 text-white no-underline rounded hover:bg-blue-700"
          >
            Email Payment Proof
          </a>
        </section>
      </main>
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
