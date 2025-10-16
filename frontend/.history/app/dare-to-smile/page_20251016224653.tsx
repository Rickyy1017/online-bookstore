import Link from 'next/link';
import Image from 'next/image';

export default function DareToSmile() {
  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-1">
        <Link href="/" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>
      <div className="max-w-4xl mx-auto bg-white p-7.5 shadow-lg mt-5">
        <header className="text-center mb-5">
          <h1 className="text-4xl text-gray-800 mb-2.5">DARE TO SMILE IN THE DARKNESS OF LIFE</h1>
          <Image
            src="/dare.jpg"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dare to Smile in the Darkness of Life is an unusual book and character sketch of the difference maker. The message is:
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          "When you reach an obstacle, turn it into an opportunity. You have a choice. You can overcome and be a winner, or you can allow it to overcome you and be a loser. The choice is yours and yours alone. Refuse to throw in the towel. Go that extra mile that failures refuse to travel. It is far better to be exhausted from success than to be rested from failure." ~ Mary Kay Ash
        </p>
        <p className="text-gray-700 leading-relaxed">
          The cravings of the difference maker are that leadership of the State Executive, including the National & State Assemblies, the Judiciary and of the people must have common understanding that together they enjoy collective membership of the Board of Directors of the landscape as public enterprise.
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
