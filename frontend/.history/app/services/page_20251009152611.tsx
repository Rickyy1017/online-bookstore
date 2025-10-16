import Link from 'next/link';

export default function Services() {
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
        <h1 className="text-blue-800">Business Consultation Services</h1>
        <p className="mb-5">
          At <strong>Covenant Books & Consulting</strong>, we go beyond books and philanthropy—we are also dedicated to <strong>helping businesses thrive globally</strong>. Our <span className="bg-blue-800 text-white p-2.5 rounded inline-block">business consultation services</span> provide expert guidance in key areas such as entrepreneurship, investment strategies, and business growth solutions. Whether you're a startup or an established enterprise, our team of professionals is committed to helping you <strong>navigate the complexities of the global market with confidence</strong>.
        </p>

        <h2 className="text-blue-800">Our Expertise</h2>
        <ul className="list-none p-0">
          <li className="py-2"><strong>Entrepreneurship & Business Development</strong> – Helping entrepreneurs <strong>build sustainable businesses</strong> with solid strategies.</li>
          <li className="py-2"><strong>Investment & Financial Planning</strong> – Providing insights on <strong>investment opportunities</strong> and financial decision-making.</li>
          <li className="py-2"><strong>Business Growth & Expansion</strong> – Assisting in <strong>scaling businesses</strong> locally and internationally.</li>
          <li className="py-2"><strong>Market Research & Strategy</strong> – Conducting <strong>comprehensive market analysis</strong> for data-driven decisions.</li>
          <li className="py-2"><strong>Branding & Digital Transformation</strong> – Developing <strong>effective branding and online marketing strategies</strong>.</li>
          <li className="py-2"><strong>Corporate Training & Leadership Development</strong> – Empowering teams with leadership and productivity skills.</li>
        </ul>

        <h2 className="text-blue-800">Why Choose Us?</h2>
        <ul className="list-none p-0">
          <li className="py-2"><strong>Industry Expertise</strong> – Our team has years of business consulting experience.</li>
          <li className="py-2"><strong>Customized Solutions</strong> – We tailor our strategies to fit your business needs.</li>
          <li className="py-2"><strong>Global Perspective</strong> – Insights to help businesses compete on a <strong>global scale</strong>.</li>
          <li className="py-2"><strong>Results-Oriented Approach</strong> – Delivering <strong>practical and measurable results</strong>.</li>
        </ul>

        <div className="text-center mt-5">
          <Link href="/contact" className="bg-blue-800 text-white p-2.5 no-underline rounded font-bold hover:bg-blue-900 inline-block">Contact Us Today</Link>
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
