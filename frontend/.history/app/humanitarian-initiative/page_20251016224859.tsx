import Link from 'next/link';
import Image from 'next/image';

export default function HumanitarianInitiative() {
  return (
    <>
      <header className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/images/logo.png" alt="Logo" width={80} height={100} className="mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">UNUSUAL USUAL MAN</h1>
              <p className="text-sm text-gray-600">Online Bookstore</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Services</Link>
            <Link href="/humanitarian-initiative" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Humanitarian Initiative</Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-indigo-600 transition-colors">Contact</Link>
          </nav>
        </div>
      </header>
      <div className="max-w-4xl mx-auto bg-white p-7.5 shadow-lg mt-5">
        <header className="text-center mb-5">
          <h1 className="text-4xl text-gray-800 mb-2.5">COVENANT DAYCARE GARDEN</h1>
          <p className="text-lg text-gray-600">
            Humanity, impartiality, neutrality, independence, voluntary service, unity and universality: these seven Fundamental Principles sum up Humanitarian ethics and are at the core of its approach to helping people in need during armed conflict, natural disasters and other emergencies.
          </p>
        </header>

        <section className="mb-7">
          <h2 className="text-3xl text-gray-800 mb-2.5 border-b-2 border-gray-800 pb-1">COVENANT DAYCARE GARDEN FOUNDATION INVITATION</h2>
          <article className="mb-5">
            <p className="mb-4 text-justify">
              I am sending this personal invitation to you, to formally inform you of my Family plan to establish a Covenant Daycare Garden Initiative for care of the elderly and the widows. We purpose to host the Garden at Egbu -Owerri, Imo State in Memory of our Parents - Pa Joseph Ugochukwu and Mama Bernice Nwobiara Okoro for reason that in life and by GOD&apos;s Grace, they were the bedrocks of four children who became notable citizens as "Stars Not Scars."
            </p>
            <p className="mb-4 text-justify">
              The primary objective is to cater for the healthcare and welfare needs of Covenant &apos;Elders and Widows Indeed&apos; in Owerri and environs; and in the manner that could restore their confidence and dignity as respected individuals and a welcoming community. I am confident that as a man of understanding and a devout and altruistic person, you may feel persuaded to respond positively to this request for support towards establishing the Foundation. May I formally invite you to please consider and accept to be our Soul-Partner with a sense of ownership in this initiative.
            </p>
            <p className="mb-4 text-justify">
              I enclose a one-page outline of the Covenant Daycare Garden Initiative for your orientation. The page will present Statement of Vision &amp; Mission; Garden Management Funding, Administration and Accountability Framework; Bank Lodgement Account. I feel persuaded that by the Grace of GOD, you shall stand to reap commensurate returns from the prayers of the beneficiaries of unmerited Love you have sown by your &apos;across-the-Niger&apos; contribution and generous funding of this initiative; towards fixing the problems and pains of &apos;Covenant Elders and Widows Indeed&apos; in Egbu - Owerri and environs.
            </p>
            <p className="mb-4 text-justify">
              I hope you may find the time to join my family on a date, time and venue which I shall, respectfully, communicate to you for the planned presentation of my Memoir captioned "Dare to Live My Passion (The Authentic Memoir of a Passionate Railwayman)" to Soul-Mates, Well-Wishers and Discerning Public for donations towards the Project&apos;s kick-off and sustainability.
            </p>
            <p className="mb-4 text-justify">
              May I contact your office within the next fortnight to follow up on this invitation? Thanks for your attention and commitment to philanthropy.
            </p>
            <p className="text-justify">
              <strong>Yours Sincerely,</strong><br />
              Elder Nath Okoro.
            </p>
          </article>
        </section>

        <section className="mb-7">
          <h2 className="text-3xl text-gray-800 mb-2.5 border-b-2 border-gray-800 pb-1">For "ELDERS &amp; WIDOWS INDEED" Statement of Vision &amp; Mission</h2>
          <div className="flex flex-wrap gap-5">
            <div className="flex-1 min-w-75 bg-gray-200 p-4 rounded">
              <h3 className="mb-2.5 text-blue-600">VISION</h3>
              <p>
              Inspired Elders &amp; Confident "Widows Indeed" associating and networking with a cheerful attitude and a noble, positive outlook on life even during difficult times.
              </p>
            </div>
            <div className="flex-1 min-w-75 bg-gray-200 p-4 rounded">
              <h3 className="mb-2.5 text-blue-600">MISSION</h3>
              <p>
                Recreation Programmes designed to enable Elders and Widows to maintain/restore their optimum physical, mental, and emotional health; a facility for healthcare, networking and fruitful engagement in social activities; opportunities for social and mental stimulation in a safe and comfortable environment; access to library, social and legal services as may be necessary towards the advancement of their individual rights, protection and care.
              </p>
            </div>
            <div className="flex-1 min-w-75 bg-gray-200 p-4 rounded">
              <h3 className="mb-2.5 text-blue-600">Board of Trustees</h3>
              <p>Dr. Pascal G. Dozie-Board Chairman.</p>
              <p>Pastor SLJ Wiqwe Elder at the Gate.</p>
              <p>Elder Nath C.U.Okoro - Member.</p>
              <p>Mr. Oguguo Manasseh Peters Igwe Member.</p>
              <p>Mr. Dennis CU Okaro Member.</p>
              <p>Mr Reginald Akujobi-Robert-Secretary.</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-lg font-semibold">© 2025 Covenant Books & Consulting. All Rights Reserved.</p>
            <p className="text-gray-300 mt-2">Empowering lives through literature, community support, and global business expertise.</p>
          </div>
          <nav className="flex justify-center mb-8 space-x-6">
            <Link href="/about" className="text-gray-200 hover:text-indigo-400 transition-colors">About Us</Link>
            <Link href="/services" className="text-gray-200 hover:text-indigo-400 transition-colors">Services</Link>
            <Link href="/contact" className="text-gray-200 hover:text-indigo-400 transition-colors">Contact Us</Link>
          </nav>
          <div className="flex justify-center mb-8 space-x-4">
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Twitter</a>
            <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">LinkedIn</a>
          </div>
          <p className="text-center text-gray-300">Covenant Daycare Garden Foundation is a proud initiative dedicated to supporting elders and widows in need.</p>
        </div>
      </footer>
    </>
  );
}
