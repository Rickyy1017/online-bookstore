import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-1">
        <Link href="/" className="text-white mx-1 no-underline font-bold text-xs hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1 no-underline font-bold text-xs hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1 no-underline font-bold text-xs hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1 no-underline font-bold text-xs hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1 no-underline font-bold text-xs hover:underline">Contact</Link>
      </nav>
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
