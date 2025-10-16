import Link from 'next/link';

export default function Bookstore() {
  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-2">
        <Link href="/" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>
      <div className="max-w-4xl mx-auto bg-white p-5 shadow-lg rounded mt-10">
        <h1 className="text-4xl text-blue-800 text-center mb-5">Our Bookstore</h1>
        <section className="mb-10">
          <p className="mb-4">
            At <strong>Covenant Books & Consulting</strong>, we harness the transformative power of literature to educate, inspire, and enrich lives. Our online bookstore offers an extensive, carefully curated selection of titles that cater to readers of all ages and interests.
          </p>
          <h2 className="text-3xl text-blue-800 mb-4 border-b-2 border-blue-800 pb-1">Diverse Collection of Books</h2>
          <p className="mb-4">
            We believe that knowledge should be within everyone&apos;s reach. That&apos;s why our collection spans a wide range of genres, including:
          </p>
          <ul className="mb-5 ml-5">
            <li className="mb-2.5"><strong>Educational Materials:</strong> Textbooks, academic guides, and study aids designed to support students, educators, and lifelong learners.</li>
            <li className="mb-2.5"><strong>Self-Improvement & Personal Development:</strong> Inspiring resources on leadership, motivation, success strategies, and emotional well-being.</li>
            <li className="mb-2.5"><strong>Fiction & Literature:</strong> A captivating mix of engaging novels, short stories, and timeless classics to entertain and provoke thought.</li>
            <li className="mb-2.5"><strong>Religious & Inspirational Books:</strong> Devotionals, faith-based writings, and spiritual guides meant to uplift and encourage.</li>
            <li className="mb-2.5"><strong>Business & Entrepreneurship:</strong> Insightful works for professionals and entrepreneurs on leadership, investment strategies, and effective business management.</li>
            <li className="mb-2.5"><strong>Children’s Books:</strong> Delightful stories and educational materials crafted to spark young imaginations and foster learning.</li>
          </ul>
          <h2 className="text-3xl text-blue-800 mb-4 border-b-2 border-blue-800 pb-1">Seamless Online Shopping Experience</h2>
          <p className="mb-4">
            Our platform is built for ease and efficiency, ensuring that finding and purchasing your next great read is a breeze:
          </p>
          <ul className="mb-5 ml-5">
            <li className="mb-2.5"><strong>User-Friendly Interface:</strong> Effortlessly browse by category, author, or keyword to discover exactly what you need.</li>
            <li className="mb-2.5"><strong>Secure Payment Options:</strong> Enjoy peace of mind with multiple safe and reliable payment methods, including credit/debit cards, PayPal, and direct bank transfers.</li>
            <li className="mb-2.5"><strong>Fast & Reliable Delivery:</strong> Whether you’re ordering locally or internationally, we guarantee prompt delivery of your books.</li>
          </ul>
          <h2 className="text-3xl text-blue-800 mb-4 border-b-2 border-blue-800 pb-1">Supporting a Greater Cause</h2>
          <p>
            Every purchase you make supports a meaningful mission. A portion of our proceeds directly funds the <strong>Covenant Daycare Garden Foundation</strong>, which is dedicated to providing care and support for the elderly and widows in need.
          </p>
        </section>

        <div className="border-t border-gray-300 my-10"></div>

        <h1 className="text-4xl text-blue-800 text-center mb-5">Expanding Opportunities for Writers</h1>
        <section className="mb-10">
          <p className="mb-4">
            At <strong>Covenant Books & Consulting</strong>, we believe in empowering the literary community. We not only offer a platform for readers but also invite authors and publishers to join us in making great literature accessible worldwide.
          </p>
          <h2 className="text-3xl text-blue-800 mb-4 border-b-2 border-blue-800 pb-1">Why Partner With Us?</h2>
          <ul className="mb-5 ml-5">
            <li className="mb-2.5"><strong>Wide Audience Reach:</strong> Expand your readership and gain visibility on our established online platform.</li>
            <li className="mb-2.5"><strong>Seamless Transactions:</strong> We ensure secure payments and timely disbursement of your earnings.</li>
            <li className="mb-2.5"><strong>Marketing Support:</strong> Benefit from our robust promotional strategies, including featured listings, email campaigns, and social media exposure.</li>
            <li className="mb-2.5"><strong>Flexible Partnership:</strong> Whether you’re an independent author or a publishing house, we offer tailored solutions to meet your needs.</li>
          </ul>
          <h2 className="text-3xl text-blue-800 mb-4 border-b-2 border-blue-800 pb-1">How to Get Started</h2>
          <ol className="mb-5 ml-5">
            <li className="mb-2.5"><strong>Submit Your Book:</strong> Provide details such as title, genre, pricing, and a brief description of your work.</li>
            <li className="mb-2.5"><strong>Approval & Listing:</strong> Once approved, your book will be listed on our platform, ready for readers to discover and purchase.</li>
            <li className="mb-2.5"><strong>Sell & Earn:</strong> We handle the transactions so you can focus on writing and engaging with your audience, while you enjoy hassle-free earnings.</li>
          </ol>
          <p>
            Join us today and transform your passion for writing into a rewarding venture, all while contributing to a greater cause. Explore our collection or partner with us to make books more accessible to readers around the globe!
          </p>
        </section>

        <div className="text-center mt-10">
          <Link href="/get-started" className="inline-block px-5 py-2.5 bg-blue-800 text-white no-underline rounded font-bold hover:bg-blue-900">Get Started</Link>
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
