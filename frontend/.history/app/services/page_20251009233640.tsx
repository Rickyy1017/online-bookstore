import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
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
      <div className="bg-gray-100 py-5">
        <h2 className="text-3xl text-blue-800 text-center">Our Services</h2>
      </div>
      <section className="flex flex-wrap justify-center gap-6 p-10 bg-gray-100">
        <div className="text-center w-75 border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
          <Image src="/onlinst.jpeg" alt="Online Bookstore Icon" width={220} height={200} className="mx-auto mb-4" />
          <h3 className="text-blue-800 mb-2">Online Bookstore</h3>
          <p className="mb-4 text-gray-700">
            <ul className="text-left">
              <li className="mb-2"><strong>Wide Selection of Books:</strong> Discover an extensive collection of genres including educational materials, fiction, self-improvement guides, and more.</li>
              <li className="mb-2"><strong>Seamless Shopping Experience:</strong> Enjoy secure payment options and prompt delivery services.</li>
              <li className="mb-2"><strong>Community Impact:</strong> A portion of every book purchase helps fund our charitable initiatives.</li>
            </ul>
          </p>
          <Link href="/bookstore" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 no-underline">Learn More</Link>
        </div>

        <div className="text-center w-75 border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
          <Image src="/conv.jpg" alt="Covenant Daycare Garden Foundation (CDGF) Icon" width={220} height={200} className="mx-auto mb-4" />
          <h3 className="text-blue-800 mb-2">Covenant Daycare Garden Foundation (CDGF)</h3>
          <p className="mb-4 text-gray-700">
            <ul className="text-left">
              <li className="mb-2"><strong>Elderly Care:</strong> Provides shelter, basic needs, and community programs designed to support the well-being of the elderly.</li>
              <li className="mb-2"><strong>Support for Widows:</strong> Offers financial and emotional assistance to widows in need, empowering them to lead stable lives.</li>
              <li className="mb-2"><strong>Community Development:</strong> Runs programs that promote self-sufficiency and overall quality of life within the community.</li>
            </ul>
          </p>
          <Link href="/humanitarian-initiative" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 no-underline">Learn More</Link>
        </div>

        <div className="text-center w-75 border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
          <Image src="/const.jpeg" alt="Business Consultation Services Icon" width={220} height={200} className="mx-auto mb-4" />
          <h3 className="text-blue-800 mb-2">Business Consultation Services</h3>
          <p className="mb-4 text-gray-700">
            <ul className="text-left">
              <li className="mb-2"><strong>Global Expertise:</strong> Offers professional consulting services to businesses worldwide.</li>
              <li className="mb-2"><strong>Entrepreneurial Guidance:</strong> Provides strategic advice on entrepreneurship, investment strategies, and business growth solutions.</li>
              <li className="mb-2"><strong>Market Expansion:</strong> Assists both startups and established businesses in navigating global market challenges and opportunities.</li>
            </ul>
          </p>
          <Link href="/business" className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 no-underline">Learn More</Link>
        </div>

        <div className="text-center w-75 border border-gray-300 rounded-lg p-6 shadow-lg bg-white">
          <Image src="/eco.png" alt="Ecosystem Icon" width={220} height={200} className="mx-auto mb-4" />
          <h3 className="text-blue-800 mb-2">Ecosystem</h3>
          <p className="mb-4 text-gray-700">
            These services combine to create a unique ecosystem where commerce, social responsibility, and professional guidance work together to make a positive impact on both individuals and the broader community.
          </p>
        </div>
      </section>
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
