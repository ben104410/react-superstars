import MemberCard from '../components/MemberCard';

// Define the type for a single member
interface Member {
  id: number;
  name: string;
  role: string;
  position: string;
  imageUrl: string;
}

// Use camelCase for the array variable and add more members for a richer display
const members: Member[] = [
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
  {
    id: 4,
    name: 'Mutiso Mwasya',
    role: 'Secretary',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Muimi Kasyula',
    role: 'Treasurer',
    position:'Team Manager',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'mutati Muimi',
    role: 'Secretary',
    position:'Striker',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Mumo Mwasya',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    name: 'Sammy Mwasya',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    name: 'Mutinda katunge',
    role: 'Member',
    position:'Goalkeeper',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 10,
    name: 'Mutati Michael',
    role: 'Vice Secretary',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  { 
    id: 11,
    name: 'Musyoka Kathuru',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 12,
    name: 'Mutava John',
    role: 'member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 13,
    name: 'Smarto John',
    role: 'Vice Secretary',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 14,
    name: 'Mumo ',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 15,
    name: 'Muimi Maaluki',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 16,
    name: 'Job Musyoki',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 17,
    name: 'Robert Mwenga',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 18,
    name: 'Muithya Mwange',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 19,
    name: 'Danny Musyoki',
    role: 'Member',
    position:'Striker',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 20,
    name: 'Sinzi Musyoki',
    role: 'Member',
    position:'Striker',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 21,
    name: 'Morris Mwenga',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 22,
    name: 'Tonny Musyoki',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 23,
    name: 'Kajooh',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 24,
    name: 'Mutati Musyoka',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 25,
    name: 'Kyalo Musyoka',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 26,
    name: 'Kimanzi Mutunga',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 27,
    name: 'Mumo Kasyula',
    role: 'Member',
    position:'Striker',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 28,
    name: 'Maluki Mwasya',
    role: 'Discipline Master',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 29,
    name: 'Martin Kanini',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 30,
    name: 'Kioko Kauli',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 31,
    name: 'Mutati Japeth',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
   {
    id: 32,
    name: 'Sammy Japeth',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 33,
    name: 'John Japeth',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 34,
    name: 'Mwaniki Japeth',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 35,
    name: 'Mwanzia Mwendwa',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 36,
    name: 'Patrick Mbaluka',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  },
  
  {
    id: 37,
    name: ' Andrew Mwendwa ',
    role: 'Member',
    position:'Defender',
    imageUrl: 'https://via.placeholder.com/150',
  },  
  {
    id: 38,
    name: ' Mutavania Muimi ',
    role: 'Member',
    position:'Midfielder',
    imageUrl: 'https://via.placeholder.com/150',
  }, 
  {
    id: 38,
    name: ' Mbithi Kingangi',
    role: 'Member',
    position:'Goalkeeper',
    imageUrl: 'https://via.placeholder.com/150',
  }, 
  {
    id: 39,
    name: ' Munyoki Mutunga ',
    role: 'Team Coach',
    position:'Keeper',
    imageUrl: 'https://via.placeholder.com/150',
  }, 
];

const MembersPage = () => {
  return (
    // The Layout component provides the main structure, so we only need to render the page-specific section.
    <>
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Members</h1>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet the dedicated and passionate individuals that make up the Superstars Club.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map(member => (
              <MemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MembersPage;
