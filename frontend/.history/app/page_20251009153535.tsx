import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
          <h1 className="text-4xl text-gray-800 mb-2.5">DARE TO LIVE MY PASSION</h1>
          <Image
            src="/mypass.jpg"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed">
          Dare To Live My Passion is the Flash Forward /Backward Narrative of how “Passion shaped my experience from my formative years; how it fuelled the fire of inspiration that opened me up to opportunities and challenges; and gave me courage to engage voyages of discovery; confront smokey oven of the Nigerian Civil War and back to dedicated ride by railway train from Ground Alpha as station staff clerk and by GOD’s Grace, to Level Zeta as Nigerian Railway chief executive after the war, but forced prematurely to experience “sunset at dawn” after military invasion of the Nigeria railway management space. The Book is a Pointer to Lessons of my life ; and my understanding of the high points of Life lived truly as an opportunity to be seized; and to blossom where planted...” As Summary the book is an Engagement with Thinkers in the “Thinkers Corner”; and an invitation to the Reader as “Stakeholder and Change Agent, to Share my anecdotal experiences of Life from facts; and as investments of my time and energy in the fields and in ‘schools of hard knocks’ planting seeds I later harvested as fruits; and from the Lives of Great Men as wisdom nuggets captured in the Garden of their Biographies and Memoirs. The Take -Aways have been served in this book “Dare to Live My Passion” as perfect proof of my commitment to deny the graveyard the instructive realties I experienced in my life walking and working at stations on Planet Earth; and owe to the Reader as compelling duty to share facts as refreshing Guidance Notes of Tomorrow. ” Enjoy the Reading.
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
