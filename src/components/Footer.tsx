import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text- black-100">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Superstars Club</h3>
            <p className="text-blue-400">
              A community of passionate individuals driving change and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-400 hover:text-red transition-colors">Home</Link></li>
              <li><Link to="/members" className=" text-blue-400 hover:text-white transition-colors">Members</Link></li>
              <li><Link to="/events" className="text-blue-400 hover:text-white transition-colors">Events</Link></li>
              <li><Link to="/about" className="text-blue-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-blue-400 hover:text-white transition-colors">Contact</Link></li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-blue-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-blue-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-blue-400 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-blue-400">
          <p>&copy; {new Date().getFullYear()} Superstars Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;