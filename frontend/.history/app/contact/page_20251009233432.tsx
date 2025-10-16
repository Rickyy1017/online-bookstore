import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
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
      <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg rounded-lg mt-5">
        <h1 className="text-blue-800">Contact Us</h1>
        <p className="mb-5">
          We would love to hear from you! Whether you have questions about our bookstore, foundation, or business consultation services, please reach out to us.
        </p>
        <form className="flex flex-col gap-4 max-w-md mx-auto">
          <label className="flex flex-col text-gray-700">
            Name:
            <input type="text" name="name" className="border border-gray-300 rounded p-2 mt-1" />
          </label>
          <label className="flex flex-col text-gray-700">
            Email:
            <input type="email" name="email" className="border border-gray-300 rounded p-2 mt-1" />
          </label>
          <label className="flex flex-col text-gray-700">
            Message:
            <textarea name="message" rows={5} className="border border-gray-300 rounded p-2 mt-1" />
          </label>
          <button type="submit" className="bg-blue-800 text-white p-2 rounded font-bold hover:bg-blue-900">
            Send Message
          </button>
        </form>
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
