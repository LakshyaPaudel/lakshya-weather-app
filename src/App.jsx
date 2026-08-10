import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <Router>
      <div className={`app ${theme}`}>

        {/* Navbar receives theme and toggle function */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="page-content">
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;