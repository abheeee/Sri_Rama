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
          <Route path="/about/*" element={<AboutPage />} />
          <Route path="/about-us" element={<Navigate to="/about" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;