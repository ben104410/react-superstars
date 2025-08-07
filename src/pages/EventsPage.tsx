import EventCard from '../components/Eventcard';

const upcomingEvents = [
  {
    title: 'Annual General Meeting',
    date: '2024-12-15',
    description: 'Join us for our annual general meeting to discuss the future of the club and elect new leadership.',
    imageUrl: 'https://via.placeholder.com/400x200?text=AGM',
  },
  {
    title: 'Community Outreach Day',
    date: '2024-11-20',
    description: 'A day dedicated to giving back to our local community through various volunteer activities.',
    imageUrl: 'https://via.placeholder.com/400x200?text=Community+Day',
  },
  {
    title: 'Skills Workshop: Public Speaking',
    date: '2024-10-30',
    description: 'Enhance your public speaking and presentation skills with our expert-led workshop.',
    imageUrl: 'https://via.placeholder.com/400x200?text=Workshop',
  },
];

const EventsPage = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Check out our schedule of upcoming events, workshops, and meetings. We'd love for you to join us!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
