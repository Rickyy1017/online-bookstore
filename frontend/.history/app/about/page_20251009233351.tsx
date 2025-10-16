import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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
      <section className="py-8 px-4 bg-blue-50" id="about">
        <div className="flex flex-wrap items-center justify-center max-w-7xl mx-auto">
          <div className="flex-1 min-w-75 p-4">
            <h2 className="text-blue-800 mb-4">About Our Website</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website was created with a dual purpose: to serve as an online bookstore and to support the Covenant Daycare Garden Foundation (CDGF), a non-governmental organization (NGO) dedicated to caring for elders and widows in need.
            </p>
            <h2 className="text-blue-800 mb-4">Our Bookstore</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide a diverse collection of books across various genres, from educational materials and self-improvement guides to fiction and religious books. Our mission is to make books easily accessible to readers worldwide, offering a seamless online shopping experience with secure payment options and fast delivery.
            </p>
            <h2 className="text-blue-800 mb-4">Covenant Daycare Garden Foundation (CDGF)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a foundation, CDGF is committed to making a meaningful impact in the lives of the elderly and widows. We provide:
              <br />✅ Shelter and basic needs for the elderly <br />
              ✅ Financial and emotional support for widows in need <br />
              ✅ Community programs to promote well-being and self-sufficiency <br /><br />
              A percentage of our book sales goes directly to funding these initiatives, ensuring that every purchase contributes to a noble cause.
            </p>
            <h2 className="text-blue-800 mb-4">Business Consultation Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond selling books and running our foundation, we also offer professional business consultation services worldwide. Our team provides expert guidance in various sectors, including entrepreneurship, investment strategies, and business growth solutions. Whether you're a startup or an established business looking to expand, we help you navigate the global market with confidence.
            </p>
            <h2 className="text-blue-800 mb-4">Join Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By purchasing from our bookstore, donating to our foundation, or seeking our business consulting services, you become part of a larger mission—empowering lives and creating lasting change.
            </p>
          </div>
          <div className="flex-1 min-w-75 p-4 text-center">
            <Image
              src="/onlines.jpeg"
              alt="About Us Image"
              width={400}
              height={300}
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
      <footer className="bg-blue-800 text-white text-center py-4 mt-8">
        <p>© 2025 Covenant Books & Consulting. All Rights Reserved.</p>
        <p className="mb-4">
          Empowering lives through literature, community support, and global business expertise. <br />
          <nav className="inline">
            <Link href="/about" className="text-white hover:underline mx-1">About Us</Link> |
            <Link href="/services" className="text-white hover:underline mx-1">Services</Link> |
            <Link href="/contact" className="text-white hover:underline mx-1">Contact Us</Link>
          </nav> <br />
          Follow us on: Facebook • Twitter • LinkedIn
        </p>
        <p>Covenant Daycare Garden Foundation is a proud initiative dedicated to supporting elders and widows in need.</p>
      </footer>
    </>
  );
}
