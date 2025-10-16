"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const addToCart = (title, price, type) => {
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
      <div className={`bg-blue-600 text-white text-center py-2 ${isBannerVisible ? 'block' : 'hidden'}`}>
        <Link href="/donate" className="text-white hover:underline mx-2">Make a Donation Now</Link> |
        <Link href="/buy" className="text-white hover:underline mx-2">Buy Now</Link>
      </div>

      <header className="text-center py-5">
        <h1 className="text-4xl text-gray-800 flex justify-center items-center">
          <Image src="/images/logo.png" alt="Logo" width={130} height={160} className="mr-4" />
          UNUSUAL USUAL MAN
        </h1>
        <h3 className="text-2xl text-gray-700">Online Bookstore</h3>
      </header>

      <nav className="bg-blue-900 flex justify-center py-1">
        <Link href="/" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>

      <button onClick={viewCart} className="fixed top-20 right-5 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        🛒 Cart ({cart.length})
      </button>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 1</h2>
          <h3 className="text-lg">REPOSITION OF CHRIST</h3>
          <Image src="/images/rep.jpg" alt="REPOSITION OF CHRIST" width={200} height={300} className="mx-auto" />
          <Link href="/reposition" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦1000 (Soft Copy) | ₦1700 (Hard Copy)</p>
          <button onClick={() => addToCart('REPOSITION OF CHRIST', 1000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('REPOSITION OF CHRIST', 1700, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 2</h2>
          <h3 className="text-lg">DARE TO LIVE MY PASSION</h3>
          <Image src="/images/mypass.jpg" alt="DARE TO LIVE MY PASSION" width={200} height={300} className="mx-auto" />
          <Link href="/dare-to-live-my-passion" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦8,500 (Soft Copy) | ₦22,000 (Hard Copy)</p>
          <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 8500, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 22000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 3</h2>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 1</h2>
          <h3 className="text-lg">REPOSITION OF CHRIST</h3>
          <Image src="/images/rep.jpg" alt="REPOSITION OF CHRIST" width={200} height={300} className="mx-auto" />
          <Link href="/reposition" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦1000 (Soft Copy) | ₦1700 (Hard Copy)</p>
          <button onClick={() => addToCart('REPOSITION OF CHRIST', 1000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('REPOSITION OF CHRIST', 1700, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 2</h2>
          <h3 className="text-lg">DARE TO LIVE MY PASSION</h3>
          <Image src="/images/mypass.jpg" alt="DARE TO LIVE MY PASSION" width={200} height={300} className="mx-auto" />
          <Link href="/dare-to-live-my-passion" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦8,500 (Soft Copy) | ₦22,000 (Hard Copy)</p>
          <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 8500, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('DARE TO LIVE MY PASSION', 22000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 3</h2>
          <h3 className="text-lg">NIGERIA ENTERPRISE</h3>
          <Image src="/images/nige.jpg" alt="NIGERIA ENTERPRISE" width={200} height={300} className="mx-auto" />
          <Link href="/nigeria-enterprise" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦4,000 (Soft Copy) | ₦6,000 (Hard Copy)</p>
          <button onClick={() => addToCart('NIGERIA ENTERPRISE', 4000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('NIGERIA ENTERPRISE', 6000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 4</h2>
          <h3 className="text-lg">DARE TO SMILE <br /> IN THE DARKNESS OF LIFE</h3>
          <Image src="/images/dare.jpg" alt="DARE TO SMILE IN THE DARKNESS OF LIFE" width={200} height={300} className="mx-auto" />
          <Link href="/dare-to-smile" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦3,000 (Soft Copy) | ₦5,000 (Hard Copy)</p>
          <button onClick={() => addToCart('DARE TO SMILE IN THE DARKNESS OF LIFE', 3000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('DARE TO SMILE IN THE DARKNESS OF LIFE', 5000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 5</h2>
          <h3 className="text-lg">GRASS TO GRACE</h3>
          <Image src="/images/grasee (1).jpg" alt="GRASS TO GRACE" width={200} height={300} className="mx-auto" />
          <Link href="/grass-to-grace" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦7,000 (Soft Copy) | ₦16,000 (Hard Copy)</p>
          <button onClick={() => addToCart('GRASS TO GRACE', 7000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('GRASS TO GRACE', 16000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">Book 6</h2>
          <h3 className="text-lg">DARKNESS AT NOONDAY <br /> DARE TO CHANGE THE SCRIPT</h3>
          <Image src="/images/dark.png" alt="DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT" width={200} height={300} className="mx-auto" />
          <Link href="/darkness-at-noonday" className="text-blue-600 hover:underline">Read more</Link>
          <p><b>Author:</b> Nathaneil C.U.Okoro</p>
          <p>Price: ₦10,000 (Soft Copy) | ₦18,000 (Hard Copy)</p>
          <button onClick={() => addToCart('DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT', 10000, 'Soft Copy')} className="bg-blue-600 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700">Buy Soft Copy</button>
          <button onClick={() => addToCart('DARKNESS AT NOONDAY DARE TO CHANGE THE SCRIPT', 18000, 'Hard Copy')} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Buy Hard Copy</button>
        </div>

        <div className="bg-white shadow-lg rounded p-5">
          <h2 className="text-xl font-bold">On coming Books</h2>
          <ul className="list-disc list-inside">
            <li>EDGU KINGDOM IN HISTORY</li>
            <li>UNUSUAL USUAL MAN.</li>
            <li>THE NIGERIA RAINWAY SYSTEM JUNK & JEWEL.</li>
            <li>NIGERIA INSTITUTE OF TRANSPORT TECHOLOGY ZARIA IN HISTORY.</li>
          </ul>
        </div>
      </section>

      <p className="text-center text-lg font-bold my-5">COVENANT DAYCARE GARDEN FOUNDATION</p>
      <div className="flex justify-center gap-5 mb-5">
        <Image src="/images/daycare1.png" alt="Daycare 1" width={300} height={200} />
        <Image src="/images/daycare2.jpg" alt="Daycare 2" width={300} height={200} />
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded shadow-lg max-w-md w-full">
            <span onClick={closeCart} className="cursor-pointer text-2xl">&times;</span>
            <h2 className="text-xl font-bold mb-4">Your Cart</h2>
            <ul className="mb-4">
              {cart.map((item, index) => (
                <li key={index}>{item.title} - {item.type} - ₦{item.price}</li>
              ))}
            </ul>
            <p>Total: ₦{totalPrice}</p>
            <button onClick={checkout} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Checkout</button>
          </div>
        </div>
      )}

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
    </section>
  );
}
