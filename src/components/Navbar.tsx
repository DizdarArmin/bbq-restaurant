import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-success">
      <div className="nav-brand">
        <Link to="/">Roastello</Link>
      </div>
      <div className="nav-item">
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
