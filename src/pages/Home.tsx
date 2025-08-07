import HeroSection from '../components/Herosection';
import MemberCard from '../components/MemberCard';

// Using a more descriptive name for the homepage members list
const featuredMembers = [
  {
    id: 1,
    name: 'Baraka Mutiso',
    role: 'Club Chairman',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Kyalo Syengo',
    role: 'Team Captain',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Mutati Mwendwa',
    role: 'Vice Captain',
    position:'Striker',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const HomePage = () => {
  return (
    // The Layout component already provides the main structure, Navbar, and Footer.
    // This component should only render the content specific to the homepage.
    <>
      <HeroSection />

      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Superstars Club</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Superstars Club is a vibrant community of passionate and driven individuals dedicated to
            personal growth, leadership, and making a positive impact. We create opportunities for
            members to explore their talents, organize events, engage in outreach programs, and
            build lifelong friendships. Our mission is to inspire and empower every member to shine
            in their unique way — because at Superstars, everyone is a star.
          </p>
        </div>
      </section>

      {/* Featured Team Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuredMembers.map((member) => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
