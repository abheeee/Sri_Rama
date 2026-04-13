import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './components/layout/UserLayout';




// Pages
import Home from './page/Home';
import AboutPage from './page/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/about/:section" element={<AboutSection />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about/location" element={<LocationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;