import Link from 'next/link';
import Image from 'next/image';

export default function NigeriaEnterprise() {
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
          <h1 className="text-4xl text-gray-800 mb-2.5">NIGERIA ENTERPRISE</h1>
          <Image
            src="/nige.jpg"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed mb-4">
          The Book The Nigeria Enterprise: Youth as Stakeholder and Change Agent; is all about the lessons of life I learnt from the discipline at home by my Parents, the instruction on work and conduct gained at School; and my readings of the minds of Sages of Ancient Times. I am glad I had the opportunity providentially, to test them all out in the fields of my experience walking through hills and valleys of life on Planet Earth. I care to present them as a cocktail of vegetables I mixed and now serve on this plate. The recipes blended to create the cocktail include:-
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          (1) The Homegrown Fruit I plucked living with my Parents: <br /><br />

          (2) The Kernels of Motivation from Owerri Government Secondary School Mantra ; and from <br /><br />

          (3) Dedicated study of the life of great men and the gems that kept me in good stead - physically, mentally, emotionally, and spiritually, in order to stand out from the crowd in a positive light. <br /><br />

          (4) The Experience I garnered living in the actual world and dealing with challenging people and situations and share in the book to help build positivity in life, sterling character and relationships and quality leadership; and <br /><br />

          (5) The Great Lesson I learnt from retirement that kept me connected responsibly with my professional passion field. <br /><br />

          The Fulcrum of the National Conversation I high pointed in the book *Nigeria Enterprise... is defined under Nigeria - People, Politics and Power and presented under :

          The Challenge of Instability with taproot in Colonial History; <br />

          The Challenge of Leadership and Follower-ship.; <br />

          The Challenge of Socio-economic inequalities;<br />

          The Challenge of Security and Safety of Life and Property.; and <br />

          The Challenge of Nation Building of Strong Institutions for Democracy and Growth of National Loyalty and Cohesion <br /><br />

          The brief presentation has one central purpose- To challenge the True Nigerian Youth to THINK the “NIGERIA QUESTION” ANEW.
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
