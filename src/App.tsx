
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/Members';
import EventsPage from './pages/EventsPage';
import Gallerypage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import JoinPage from './pages/JoinPage';
   
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="events" element={<EventsPage />} />
        <Route path="Gallery" element={<Gallerypage />}/>
        <Route path="contact" element={<ContactPage />} />   
        <Route path="/join-us" element={<JoinPage />} />
      </Route>
    </Routes>
  );
}

export default App;