import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Superstars Club</h2>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Empowering talents, building connections, and creating opportunities for every member.
      </p>
      <Link
        to="/join-us"
        className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
      >
        Join Us
      </Link>
    </section>
  );
}

export default HeroSection;

