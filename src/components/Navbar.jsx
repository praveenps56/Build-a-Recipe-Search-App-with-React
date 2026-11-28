import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <NavLink to="/" className="brand">🍲 Recipe<span>Finder</span></NavLink>
        <div className="nav-links">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/recipes" className={navClass}>Recipes</NavLink>
          <NavLink to="/favourites" className={navClass}>Favourites</NavLink>
        </div>
      </nav>
    </header>
  );
}
