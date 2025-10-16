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
            We believe that knowledge should be within everyone's reach. That's why our collection spans a wide range of genres, including:
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
