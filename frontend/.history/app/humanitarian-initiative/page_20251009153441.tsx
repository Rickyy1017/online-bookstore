import Link from 'next/link';

export default function HumanitarianInitiative() {
  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-1">
        <Link href="/" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>
      <div className="w-4/5 mx-auto p-5 bg-white shadow-lg rounded-lg mt-5">
        <h1 className="text-gray-800">Covenant Daycare Garden Foundation (CDGF)</h1>
        <p className="mb-5">
          At <strong>CDGF</strong>, we are deeply committed to uplifting the elderly and widows in need by providing essential care, financial support, and community development programs. Our mission is to restore dignity, confidence, and hope to those who have given so much to society but now need assistance.
        </p>

        <div className="mb-7">
          <h2 className="text-gray-800">🏡 Elderly Care</h2>
          <ul className="list-none p-0">
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Shelter & Safe Living Spaces:</strong> We provide a secure and comfortable place for elderly individuals.</li>
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Basic Needs & Healthcare:</strong> Access to nutritious meals, medical care, and personal assistance.</li>
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Recreational & Social Programs:</strong> Engaging activities, exercise programs, and wellness workshops.</li>
          </ul>
        </div>

        <div className="mb-7">
          <h2 className="text-gray-800">💰 Support for Widows</h2>
          <ul className="list-none p-0">
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Financial Assistance:</strong> Support programs, micro-loans, and skill-building initiatives.</li>
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Emotional & Psychological Support:</strong> Counseling services and peer support groups.</li>
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Educational & Vocational Training:</strong> Skills training for employment or entrepreneurship.</li>
          </ul>
        </div>

        <div className="mb-7">
          <h2 className="text-gray-800">🌍 Community Development</h2>
          <ul className="list-none p-0">
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Economic Empowerment:</strong> Helping individuals develop sustainable income-generating activities.</li>
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Health & Wellness Programs:</strong> Free medical checkups, mental health support, and wellness workshops.</li>
            <li className="mb-2.5 p-2.5 bg-gray-200 rounded"><span className="text-xl mr-2 text-blue-500">✅</span><strong>Educational & Legal Support:</strong> Access to legal advice, literacy programs, and educational assistance.</li>
          </ul>
        </div>

        <div className="text-center mt-5">
          <h2 className="text-gray-800">How You Can Support CDGF</h2>
          <p className="mb-2">💖 <strong>Shop with Purpose:</strong> A portion of proceeds from <strong>Covenant Books & Consulting</strong> funds our foundation.</p>
          <p className="mb-2">💖 <strong>Donate:</strong> Your contributions help us continue our mission.</p>
          <p className="mb-2">💖 <strong>Volunteer:</strong> Give your time and skills to make an impact.</p>
          <p className="mb-2">💖 <strong>Partner with Us:</strong> Collaborate to expand our programs and reach more people.</p>
          <Link href="/contact" className="no-underline p-2.5 bg-blue-600 text-white rounded font-bold hover:bg-blue-700 inline-block">Join Us Today</Link>
        </div>
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
