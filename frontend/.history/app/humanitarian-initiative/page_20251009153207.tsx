import Link from 'next/link';

export default function HumanitarianInitiative() {
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
        <h1 className="text-blue-800">Humanitarian Initiative</h1>
        <p className="mb-5">
          Covenant Daycare Garden Foundation (CDGF) is dedicated to caring for elders and widows in need. Our foundation provides shelter, basic needs, financial and emotional support, and community programs to promote well-being and self-sufficiency.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Shelter and basic needs for the elderly</li>
          <li>Financial and emotional support for widows in need</li>
          <li>Community programs to promote well-being and self-sufficiency</li>
        </ul>
        <p className="mt-5">
          A percentage of our book sales goes directly to funding these initiatives, ensuring that every purchase contributes to a noble cause.
        </p>
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
