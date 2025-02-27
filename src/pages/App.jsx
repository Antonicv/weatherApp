import Weather from './Weather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home.jsx";
import Map from "./map.jsx";
import About from "./about.jsx";
import Navbar from "../components/Navbar";
import "../styles/index.css"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/map" element={<Map />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;