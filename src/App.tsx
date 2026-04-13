import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";

// Pages
import Home from './page/Home';
import AboutPage from './page/about';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;