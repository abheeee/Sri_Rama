import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";

// Pages
import Home from './page/Home';
import Placements from './components/Placements'  ;


import Campus from './components/campus/Campus';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/Placements/PlacementHer" element={<Placements />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;