import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
      <Link to="/"> Home</Link>
      <Link to="/weather"> Weather</Link>
      <Link to="/map">Map</Link>
      <Link to="/about"> About</Link>
    </nav>
  );
}

export default Navbar;
