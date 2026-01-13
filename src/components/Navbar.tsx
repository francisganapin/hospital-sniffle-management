import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black px-4 py-2 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-indigo-500">Logo</div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-4">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 bg-gray-800 rounded text-white"
                : "px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 bg-gray-800 rounded text-white"
                : "px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Appointment
          </NavLink>

          <NavLink
            to="/doctor"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 bg-gray-800 rounded text-white"
                : "px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Doctor
          </NavLink>


          <NavLink
            to="/patient"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 bg-gray-800 rounded text-white"
                : "px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Patient
          </NavLink>


          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "px-3 py-2 bg-gray-800 rounded text-white"
                : "px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Reports
          </NavLink>

          {/* Desktop Search */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block px-3 py-2 bg-gray-800 rounded text-white"
                : "block px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/appointment"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block px-3 py-2 bg-gray-800 rounded text-white"
                : "block px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Appointment
          </NavLink>
          <NavLink
            to="/doctor"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block px-3 py-2 bg-gray-800 rounded text-white"
                : "block px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Doctor
          </NavLink>
          <NavLink
            to="/patient"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block px-3 py-2 bg-gray-800 rounded text-white"
                : "block px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Patient
          </NavLink>

          <NavLink
            to="/reports"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive
                ? "block px-3 py-2 bg-gray-800 rounded text-white"
                : "block px-3 py-2 hover:bg-gray-800 rounded text-white"
            }
          >
            Reports
          </NavLink>

          {/* Mobile Search */}
          <div className="mt-2 px-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
