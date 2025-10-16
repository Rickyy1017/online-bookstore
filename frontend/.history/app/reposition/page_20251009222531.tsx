import Link from 'next/link';
import Image from 'next/image';

export default function Reposition() {
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
          <h1 className="text-4xl text-gray-800 mb-2.5">REPOSITION OF CHRIST</h1>
          <Image
            src="/rep.jpg"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed">
          Introduction this living testimony is to the Glory of God and celebration of the Faith of Christ. Any references to man should be seen as an acknowledgement of the person as a vessel unto honour used by God to draw all men unto His marvelous light for fulfillment of His purpose. The testimony is living because the experience is still alive as heat, light and sound; and active, moving from the umbra zone of biblical light through the penumbra region, hopefully to the region of complete illumination. The testimony is to the Glory of God because His thoughts towards us are thoughts of peace, not of evil. The testimony is to the Faith of Christ because in our own righteousness we cannot stand in God's presence; but in the righteousness and Faith of Christ we shall in Him stand strong in the presence of God, which is the place of victory. Elder Nath C.U. Okoro
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
