import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeLinkStyle = {
    textDecoration: 'underline',
    color: '#1D4ED8', // A prominent blue for the active link
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Superstars Club
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Home</NavLink>
              <NavLink to="/members" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Members</NavLink>
              <NavLink to="/events" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Events</NavLink>
              <NavLink to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>About Us</NavLink>
              <NavLink to ="/Gallery" className="text-grey-600 hover:text-grey-900 px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Gallery</NavLink>
              <NavLink to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Contact</NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;