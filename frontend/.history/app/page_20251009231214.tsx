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
      <div className={`bg-gray-800 text-white text-center py-3 ${isBannerVisible ? 'block' : 'hidden'}`}>
        <Link href="/donate" className="text-white hover:text-blue-300 mx-4 transition-colors">Make a Donation Now</Link> |
        <Link href="/buy" className="text-white hover:text-blue-300 mx-4 transition-colors">Buy Now</Link>
      </div>

      <header className="bg-white text-center py-8 shadow-md border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 flex justify-center items-center mb-2">
            <Image src="/images/logo.png" alt="Logo" width={130} height={160} className="mr-6" />
            UNUSUAL USUAL MAN
          </h1>
          <h3 className="text-xl text-gray-600">Online Bookstore</h3>
        </div>
      </header>

      <nav className="bg-gray-50 shadow-sm">
        <div className="container mx-auto flex justify-center py-4">
          <Link href="/" className="text-gray-700 mx-6 no-underline font-medium text-lg hover:text-indigo-600 transition-colors">Home</Link>
          <Link href="/services" className="text-gray-700 mx-6 no-underline font-medium text-lg hover:text-indigo-600 transition-colors">Services</Link>
          <Link href="/humanitarian-initiative" className="text-gray-700 mx-6 no-underline font-medium text-lg hover:text-indigo-600 transition-colors">Humanitarian Initiative</Link>
          <Link href="/about" className="text-gray-700 mx-6 no-underline font-medium text-lg hover:text-indigo-600 transition-colors">About Us</Link>
          <Link href="/contact" className="text-gray-700 mx-6 no-underline font-medium text-lg hover:text-indigo-600 transition-colors">Contact</Link>
        </div>
      </nav>

      <button onClick={viewCart} className="fixed top-24 right-6 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-all z-10">
        🛒 Cart ({cart.length})
      </button>

      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <Image src="/images/rep.jpg" alt="REPOSITION OF CHRIST" width={200} height={300} className="mx-auto mb-4 rounded" />
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">REPOSITION OF CHRIST</h3>
          <p className="text-gray-700 text-center mb-3"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <div className="text-center mb-4">
            <p className="text-gray-700">Soft Copy: ₦1000 | Hard Copy: ₦1700</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => addToCart('REPOSITION OF CHRIST', 1000, 'Soft Copy')} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 flex-1">Buy Soft Copy</button>

        <div className="bg-gray-700 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Book 2</h2>
          <h3 className="text-xl font-bold text-white mb-4">DARE TO LIVE MY PASSION</h3>
          <Image src="/images/mypass.jpg" alt="DARE TO LIVE MY PASSION" width={200} height={300} className="mx-auto mb-4 rounded" />
          <Link href="/dare-to-live-my-passion" className="text-blue-400 hover:text-blue-300 font-medium">Read more</Link>
          <p className="text-gray-300 mt-2"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p className="text-gray-300 mb-4">Price: ₦8,500 (Soft Copy) | ₦22,000 (Hard Copy)</p>
          <div className="flex gap-2">
            <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 8500, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Soft Copy</button>
            <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 22000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-gray-700 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Book 3</h2>
          <h3 className="text-xl font-bold text-white mb-4">NIGERIA ENTERPRISE</h3>
          <Image src="/images/nige.jpg" alt="NIGERIA ENTERPRISE" width={200} height={300} className="mx-auto mb-4 rounded" />
          <Link href="/nigeria-enterprise" className="text-blue-400 hover:text-blue-300 font-medium">Read more</Link>
          <p className="text-gray-300 mt-2"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p className="text-gray-300 mb-4">Price: ₦4,000 (Soft Copy) | ₦6,000 (Hard Copy)</p>
          <div className="flex gap-2">
            <button onClick={() => addToCart('NIGERIA ENTERPRISE', 4000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Soft Copy</button>
            <button onClick={() => addToCart('NIGERIA ENTERPRISE', 6000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-gray-700 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Book 4</h2>
          <h3 className="text-xl font-bold text-white mb-4">DARE TO SMILE <br /> IN THE DARKNESS OF LIFE</h3>
          <Image src="/images/dare.jpg" alt="DARE TO SMILE IN THE DARKNESS OF LIFE" width={200} height={300} className="mx-auto mb-4 rounded" />
          <Link href="/dare-to-smile" className="text-blue-400 hover:text-blue-300 font-medium">Read more</Link>
          <p className="text-gray-300 mt-2"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p className="text-gray-300 mb-4">Price: ₦3,000 (Soft Copy) | ₦5,000 (Hard Copy)</p>
          <div className="flex gap-2">
            <button onClick={() => addToCart('DARE TO SMILE IN THE DARKNESS OF LIFE', 3000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Soft Copy</button>
            <button onClick={() => addToCart('DARE TO SMILE IN THE DARKNESS OF LIFE', 5000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-gray-700 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Book 5</h2>
          <h3 className="text-xl font-bold text-white mb-4">GRASS TO GRACE</h3>
          <Image src="/images/grasee (1).jpg" alt="GRASS TO GRACE" width={200} height={300} className="mx-auto mb-4 rounded" />
          <Link href="/grass-to-grace" className="text-blue-400 hover:text-blue-300 font-medium">Read more</Link>
          <p className="text-gray-300 mt-2"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p className="text-gray-300 mb-4">Price: ₦7,000 (Soft Copy) | ₦16,000 (Hard Copy)</p>
          <div className="flex gap-2">
            <button onClick={() => addToCart('GRASS TO GRACE', 7000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Soft Copy</button>
            <button onClick={() => addToCart('GRASS TO GRACE', 16000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-gray-700 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-lg font-semibold text-gray-300 mb-2">Book 6</h2>
          <h3 className="text-xl font-bold text-white mb-4">DARKNESS AT NOONDAY <br /> DARE TO CHANGE THE SCRIPT</h3>
          <Image src="/images/dark.png" alt="DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT" width={200} height={300} className="mx-auto mb-4 rounded" />
          <Link href="/darkness-at-noonday" className="text-blue-400 hover:text-blue-300 font-medium">Read more</Link>
          <p className="text-gray-300 mt-2"><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p className="text-gray-300 mb-4">Price: ₦10,000 (Soft Copy) | ₦18,000 (Hard Copy)</p>
          <div className="flex gap-2">
            <button onClick={() => addToCart('DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT', 10000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Soft Copy</button>
            <button onClick={() => addToCart('DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT', 18000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex-1">Buy Hard Copy</button>
          </div>
        </div>

        <div className="bg-gray-700 shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow transform hover:scale-105">
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Books</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>EDGU KINGDOM IN HISTORY</li>
            <li>UNUSUAL USUAL MAN.</li>
            <li>THE NIGERIA RAINWAY SYSTEM JUNK & JEWEL.</li>
            <li>NIGERIA INSTITUTE OF TRANSPORT TECHOLOGY ZARIA IN HISTORY.</li>
          </ul>
        </div>
      </section>

      <div className="container mx-auto text-center py-12">
        <h2 className="text-3xl font-bold text-white mb-8">COVENANT DAYCARE GARDEN FOUNDATION</h2>
        <div className="flex justify-center gap-8 mb-8">
          <Image src="/images/daycare1.png" alt="Daycare 1" width={300} height={200} className="rounded-lg shadow-lg" />
          <Image src="/images/daycare2.jpg" alt="Daycare 2" width={300} height={200} className="rounded-lg shadow-lg" />
        </div>
        <p className="text-gray-300 max-w-2xl mx-auto">A proud initiative dedicated to supporting elders and widows in need through community care and support programs.</p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Your Cart</h2>
              <span onClick={closeCart} className="cursor-pointer text-3xl text-gray-400 hover:text-white">&times;</span>
            </div>
            <ul className="mb-6 space-y-2">
              {cart.map((item, index) => (
                <li key={index} className="text-gray-300 bg-gray-700 p-3 rounded">{item.title} - {item.type} - ₦{item.price}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-semibold text-white">Total: ₦{totalPrice}</p>
            </div>
            <button onClick={checkout} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-medium">Proceed to Checkout</button>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold">© 2025 Covenant Books & Consulting. All Rights Reserved.</p>
            <p className="text-gray-400 mt-2">Empowering lives through literature, community support, and global business expertise.</p>
          </div>
          <nav className="flex justify-center mb-8 space-x-6">
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link>
            <Link href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Us</Link>
          </nav>
          <div className="flex justify-center mb-8 space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">LinkedIn</a>
          </div>
          <p className="text-center text-gray-400">Covenant Daycare Garden Foundation is a proud initiative dedicated to supporting elders and widows in need.</p>
        </div>
      </footer>
    </>
  );
}
