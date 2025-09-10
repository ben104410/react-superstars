import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/Members';
import EventsPage from './pages/EventsPage';
import Gallerypage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
import FixturesAndResultsPage from "./pages/FixturesAndResultsPage";
   
function App() {
  return (
    <Router>
      <nav className="bg-white shadow p-4 flex gap-4">
        <Link to="/" className="text-indigo-700 font-semibold">Home</Link>
        <Link to="/fixtures-results" className="text-indigo-700 font-semibold">Fixtures & Results</Link>
        {/* Add other quick links here */}
      </nav>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="Gallery" element={<Gallerypage />}/>
          <Route path="contact" element={<ContactPage />} />   
          <Route path="/join-us" element={<JoinPage />} />
          <Route path="/fixtures-results" element={<FixturesAndResultsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;