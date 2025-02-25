import Weather from './Weather';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./home.jsx";
import Map from "./map.jsx";
import About from "./about.jsx";
import Weather from './Weather';
import Navbar from "./NavBar.jsx"; 


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/map" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;