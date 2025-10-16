"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type CartItem = {
  title: string;
  price: number;
  type: string;
};

export default function Page() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const addToCart = (title: string, price: number, type: string) => {
    setCart(prev => [...prev, { title, price, type }]);
  };

  const viewCart = () => {
    setIsModalOpen(true);
  };

  const closeCart = () => {
    setIsModalOpen(false);
  };

  const checkout = () => {
    alert('Checkout functionality not implemented yet.');
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <header className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={80} height={100} className="mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">UNUSUAL USUAL MAN</h1>
              <p className="text-sm text-gray-600">Online Bookstore</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="/humanitarian-initiative" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Humanitarian Initiative</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12 md:py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Welcome to Our Online Bookstore</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Discover inspiring and transformative books by Nathaneil C.U.Okoro. Empowering lives through literature and knowledge.</p>
          <div className="flex justify-center space-x-4">
            <Link href="#books" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">Browse Books</Link>
            <Link href="/donate" className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium">Make a Donation</Link>
          </div>
        </div>
      </section>

      <button onClick={viewCart} className="fixed top-24 right-6 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all z-10">
        🛒 Cart ({cart.length})
      </button>

      <section id="books" className="container mx-auto py-12 md:py-16 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">Our Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 shadow-md">
            <Image src="/images/rep.jpg" alt="REPOSITION OF CHRIST" width={200} height={300} className="mx-auto mb-4 md:mb-6 rounded" />
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">REPOSITION OF CHRIST</h3>
            <p className="text-gray-600 text-center mb-4"><b>Author:</b> Nathaneil C.U.Okoro</p>
            <div className="text-center mb-4 md:mb-6">
              <p className="text-base md:text-lg text-gray-800 font-semibold">₦1000 (Soft Copy) | ₦1700 (Hard Copy)</p>
            </div>
            <div className="space-y-2">
              <button onClick={() => addToCart('REPOSITION OF CHRIST', 1000, 'Soft Copy')} className="w-full bg-indigo-600 text-white py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Soft Copy</button>
              <button onClick={() => addToCart('REPOSITION OF CHRIST', 1700, 'Hard Copy')} className="w-full bg-indigo-600 text-white py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Hard Copy</button>
            </div>
          </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <Image src="/images/mypass.jpg" alt="DARE TO LIVE MY PASSION" width={200} height={300} className="mx-auto mb-6 rounded" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">DARE TO LIVE MY PASSION</h3>
          <p className="text-gray-600 text-center mb-4"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-800 font-semibold">₦8,500 (Soft Copy) | ₦22,000 (Hard Copy)</p>
          </div>
          <div className="space-y-2">
            <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 8500, 'Soft Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Soft Copy</button>
            <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 22000, 'Hard Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <Image src="/images/nige.jpg" alt="NIGERIA ENTERPRISE" width={200} height={300} className="mx-auto mb-6 rounded" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">NIGERIA ENTERPRISE</h3>
          <p className="text-gray-600 text-center mb-4"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-800 font-semibold">₦4,000 (Soft Copy) | ₦6,000 (Hard Copy)</p>
          </div>
          <div className="space-y-2">
            <button onClick={() => addToCart('NIGERIA ENTERPRISE', 4000, 'Soft Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Soft Copy</button>
            <button onClick={() => addToCart('NIGERIA ENTERPRISE', 6000, 'Hard Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <Image src="/images/dare.jpg" alt="DARE TO SMILE IN THE DARKNESS OF LIFE" width={200} height={300} className="mx-auto mb-6 rounded" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">DARE TO SMILE <br /> IN THE DARKNESS OF LIFE</h3>
          <p className="text-gray-600 text-center mb-4"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-800 font-semibold">₦3,000 (Soft Copy) | ₦5,000 (Hard Copy)</p>
          </div>
          <div className="space-y-2">
            <button onClick={() => addToCart('DARE TO SMILE IN THE DARKNESS OF LIFE', 3000, 'Soft Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Soft Copy</button>
            <button onClick={() => addToCart('DARE TO SMILE IN THE DARKNESS OF LIFE', 5000, 'Hard Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <Image src="/images/grasee (1).jpg" alt="GRASS TO GRACE" width={200} height={300} className="mx-auto mb-6 rounded" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">GRASS TO GRACE</h3>
          <p className="text-gray-600 text-center mb-4"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-800 font-semibold">₦7,000 (Soft Copy) | ₦16,000 (Hard Copy)</p>
          </div>
          <div className="space-y-2">
            <button onClick={() => addToCart('GRASS TO GRACE', 7000, 'Soft Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Soft Copy</button>
            <button onClick={() => addToCart('GRASS TO GRACE', 16000, 'Hard Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <Image src="/images/dark.png" alt="DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT" width={200} height={300} className="mx-auto mb-6 rounded" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">DARKNESS AT NOONDAY <br /> DARE TO CHANGE THE SCRIPT</h3>
          <p className="text-gray-600 text-center mb-4"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-800 font-semibold">₦10,000 (Soft Copy) | ₦18,000 (Hard Copy)</p>
          </div>
          <div className="space-y-2">
            <button onClick={() => addToCart('DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT', 10000, 'Soft Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Soft Copy</button>
            <button onClick={() => addToCart('DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT', 18000, 'Hard Copy')} className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Books</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>EDGU KINGDOM IN HISTORY</li>
            <li>UNUSUAL USUAL MAN.</li>
            <li>THE NIGERIA RAINWAY SYSTEM JUNK & JEWEL.</li>
            <li>NIGERIA INSTITUTE OF TRANSPORT TECHOLOGY ZARIA IN HISTORY.</li>
          </ul>
        </div>
        </div>
      </section>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">COVENANT DAYCARE GARDEN FOUNDATION</h2>
          <div className="flex justify-center gap-8 mb-8">
            <Image src="/images/daycare1.png" alt="Daycare 1" width={300} height={200} className="rounded-lg shadow-md" />
            <Image src="/images/daycare2.jpg" alt="Daycare 2" width={300} height={200} className="rounded-lg shadow-md" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">A proud initiative dedicated to supporting elders and widows in need through community care and support programs.</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
              <span onClick={closeCart} className="cursor-pointer text-3xl text-gray-400 hover:text-gray-600">&times;</span>
            </div>
            <ul className="mb-6 space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="text-gray-700 bg-gray-100 p-3 rounded">{item.title} - {item.type} - ₦{item.price}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-semibold text-gray-900">Total: ₦{totalPrice}</p>
            </div>
            <button onClick={checkout} className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 font-medium">Proceed to Checkout</button>
          </div>
        </div>
      )}

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
