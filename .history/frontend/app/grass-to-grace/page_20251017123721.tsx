import Link from 'next/link';
import Image from 'next/image';

export default function GrassToGrace() {
  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-2">
        <Link href="/" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>
      <div className="max-w-4xl mx-auto bg-white p-7.5 shadow-lg mt-5">
        <header className="text-center mb-5">
          <h1 className="text-4xl text-gray-800 mb-2.5">GRASS TO GRACE FAMILY FOOTPRINTS ON LIFE&apos;S PATHWAY</h1>
          <Image
            src="/grasee (1).jpg"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed mb-4">
          I like it when a flower or a little tuft of grass grows through a crack in the concrete&quot; - John Lubbock
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Pawpaw Plant reminds us to share the pawpaw fruits with those closest to us in our environment where we can be ourselves ; and have time to enjoy the sweetness of life as we celebrate our natural gifts with our friends, family and loved ones.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Grace will lift you out of the grass level. Grass may also, humiliate you but Grace exalts. Grass may hide you that nobody will want to identify with you, but Grace exposes and connects you. In Mark 10:46, Grace visited blind Bartimaeus and turned his blindness into a miracle
        </p>
        <p className="text-gray-700 leading-relaxed">
          This book is for anyone struggling to break through the Plateau of his Latent Potentials ; and desperate to climb from Grass to Grace the way four traditional siblings of a family engaged life as Journey men and climbed the success ladder step by step from ground level Alpha to level Zee in their different fields of national engagement. Thanks to collegiate control mode with mutuality as traditional pattern of living in their homestead.
        </p>
      </div>
      <footer className="bg-blue-800 text-white text-center py-4 mt-8">
        <p>© 2025 Covenant Books &amp; Consulting. All Rights Reserved.</p>
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
