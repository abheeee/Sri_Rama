import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';




// Pages
import Home from './page/Home';
import AboutSection from './components/about/AboutSection';
import LocationPage from './components/about/LocationPage';
import Placements from "./page/placements/Placements";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/about/location" element={<LocationPage />} />
           <Route path="/placements" element={<Placements />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;