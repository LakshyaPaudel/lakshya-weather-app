import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        🌤️ WeatherNow
      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

<button
  className={`theme-toggle ${theme}`}
  onClick={toggleTheme}
>
  <span className="toggle-icon">
    {theme === "light" ? "☀️" : "🌙"}
  </span>

  <span className="toggle-text">
    {theme === "light" ? "Light" : "Dark"}
  </span>

  <span className="toggle-circle"></span>
</button>

    </nav>
  );
}