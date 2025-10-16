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
          <h1 className="text-4xl text-gray-800 mb-2.5">GRASS TO GRACE FAMILY FOOTPRINTS ON LIFE'S PATHWAY</h1>
          <Image
            src="/grasee (1).jpg"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed mb-4">
          I like it when a flower or a little tuft of grass grows through a crack in the concrete”- John Lubbock
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Pawpaw Plant reminds us to share the pawpaw fruits with those closest to us in our environment where we can be ourselves ; and have time to enjoy the sweetness of life as we celebrate our natural gifts with our friends, family and loved ones.
        </p>
