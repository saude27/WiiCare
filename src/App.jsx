import React, { useState, useEffect } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Detect scroll to toggle sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-brandBlueColor font-extrabold"
              : "text-gray-700 hover:text-brandBlueColor"
          }
          onClick={() => setSidebarOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-brandBlueColor font-extrabold"
              : "text-gray-700 hover:text-brandBlueColor"
          }
          onClick={() => setSidebarOpen(false)}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "text-brandBlueColor font-extrabold"
              : "text-gray-700 hover:text-brandBlueColor"
          }
          onClick={() => setSidebarOpen(false)}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-brandBlueColor font-extrabold"
              : "text-gray-700 hover:text-brandBlueColor"
          }
          onClick={() => setSidebarOpen(false)}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white shadow-md py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
          <NavLink to="/">
            <div>
              <img
                src="/images/WiiCare-Logo.png"
                alt="WIICARE LOGO"
                width={150}
                className="transition-all duration-300"
              />
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">{navLinks}</ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 focus:outline-none"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
          >
            <span className="w-7 h-1 bg-gray-700 rounded"></span>
            <span className="w-7 h-1 bg-gray-700 rounded"></span>
            <span className="w-7 h-1 bg-gray-700 rounded"></span>
          </button>

          {/* Sidebar Overlay */}
          <div
            className={`fixed inset-0 z-30 transition-opacity duration-300 ${
              sidebarOpen ? "block" : "hidden"
            } md:hidden`}
            onClick={() => setSidebarOpen(false)}
          ></div>

          {/* Sidebar */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <img
                src="/images/WiiCare-Logo.png"
                alt="WIICARE LOGO"
                width={120}
              />
              <button
                className="text-gray-700 text-2xl focus:outline-none"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close menu"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col gap-6 p-6">{navLinks}</ul>
          </aside>
        </div>
      </nav>

      {/* Page Content */}
      <div className="pt-24 px-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
