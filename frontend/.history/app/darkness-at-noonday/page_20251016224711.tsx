import Link from 'next/link';
import Image from 'next/image';

export default function DarknessAtNoonday() {
  return (
    <>
      <nav className="bg-blue-900 flex justify-center py-1">
        <Link href="/" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Home</Link>
        <Link href="/services" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Services</Link>
        <Link href="/humanitarian-initiative" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Humanitarian Initiative</Link>
        <Link href="/about" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">About Us</Link>
        <Link href="/contact" className="text-white mx-1.5 no-underline font-bold text-sm hover:underline">Contact</Link>
      </nav>
      <div className="max-w-4xl mx-auto bg-white p-7.5 shadow-lg mt-5">
        <header className="text-center mb-5">
          <h1 className="text-4xl text-gray-800 mb-2.5">DARKNESS AT NOONDAY <br /> Dare To Change The Script</h1>
          <Image
            src="/dark.png"
            alt=""
            width={370}
            height={450}
            className="mx-auto"
          />
        </header>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Section One:</strong> The Nigeria Question. To Nigerian Senior Citizens, who appreciate that the question is not driven by spiritual pride but by desperation for symbolic Nigeria of national dream.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          To Nigerian Mapper, who is disposed to engage with continuous research on the geography, statistics, geometry, algebra, operations and probability of a matter; and ready to analyse and glean insights into its analytics, using specialized tools to create precise, accurate maps of personality pictures embedded in the 26 Alphabets of English language Education Curriculum and presented as:
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The alphabets available thereafter, to be picked by seekers of head-knowledge with zeal for public offices and mindset targeted to access positions for appetite massaging. The majority of the people in this category are those seen floating as politicians in the national spaces and act the image of the: (D)acoit; (F)abricator; (J)ackass; (K)affir; (Q)uack; (U)ncouth; (V)acillator; (W)angler; (X)enophobic; and (Z)ombie individuals with no physical or material value to add but only emotional arousal, disorder and disturbance.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Section Two:</strong> Darkness At Noonday To questioning minds, who understand that the issues raised are not judgmental but to trigger national restoration as end product. To Nigerian Wailer, who is disposed as citizen to support the existing structure by political affiliation and tribal or religious identity; and ready to lament non-action and utter cry of sorrow, pain or rage and feeling of grief when the status quo is shaken. Section Three: Dare To Change The Script To Nigerian Citizens with penchant as analyst, whose inclination is to study or examine composition, patterns,
        </p>
        <p className="text-gray-700 leading-relaxed">
          processes in an organized way and relationships of caustic issues exposed by Mappers in order to understand more about the matter and often to make predictions about what will happen in the future relating to it; and skilled and experienced, as strategist, who knows, understand and define contextual problem, with responsibility to articulate the factors that create the problem; make choices, set goals consider ways to match strengths with emerging opportunities; determine actions to achieve the goals, and mobilize resources to plan and execute the actions towards achievement of goals set especially by organization, business or government. I feel obliged to share my experiences here and without compromise as &apos;Mentor on a Mission.&apos; Mr. Reader may "Dare to Smile in Darkness of Life at Noonday," as I have done in this Book: <br />
          "Hope springs eternal in the human breast, Man never is but forever to be blessed." - Alexander Pope (1688-1744)
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
