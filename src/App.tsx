import { Routes, Route, Link } from "react-router-dom";

import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/Members';
import EventsPage from './pages/EventsPage';
import Gallerypage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
import FixturesAndResultsPage from "./pages/FixturesAndResultsPage";
import Footer from './components/Footer';
   
function App() {
  return (
    <>
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link to="/" className="text-indigo-700 font-semibold">Home</Link>
        <Link to="/about" className="text-indigo-700 font-semibold">About</Link>
        <Link to="/members" className="text-indigo-700 font-semibold">Members</Link>
        <Link to="/events" className="text-indigo-700 font-semibold">Events</Link>
        <Link to="/Gallery" className="text-indigo-700 font-semibold">Gallery</Link>
        <Link to="/contact" className="text-indigo-700 font-semibold">Contact</Link>
        <Link to="/join-us" className="text-indigo-700 font-semibold">Join Us</Link>
        <Link to="/fixtures-results" className="text-indigo-700 font-semibold">Fixtures & Results</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="Gallery" element={<Gallerypage />}/>
          <Route path="contact" element={<ContactPage />} />   
          <Route path="fixtures-results" element={<FixturesAndResultsPage />} />
          <Route path="join-us" element={<JoinPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;