import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';






import Home from './page/Home';
import PlacementsPage from "./page/PlacementsPage";
import AboutSection from './components/about/AboutSection';
import LocationPage from './components/about/LocationPage';
import AboutPage from './page/about';
import AboutSectionPage from './page/AboutSection';
import ScholarshipApplyPage from './page/ScholarshipApply';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about-us" element={<AboutPage />} />

          <Route path="/about/location" element={<LocationPage />} />
          <Route path="/placements" element={<PlacementsPage />} />
          
          
          <Route path="/about/scholarship/apply" element={<ScholarshipApplyPage />} />
          <Route path="/about/:section" element={<AboutSectionPage />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;