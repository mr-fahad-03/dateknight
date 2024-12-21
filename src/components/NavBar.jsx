import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for toggle
import Logo from "../images/logoipsum-logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State for toggling sidebar on small screens

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-usedColor z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-full sm:w-1/5 sm:translate-x-0`} // Ensures the sidebar is always visible on larger screens
      >
        {/* Logo Section */}
        <div className="flex w-screen lg:w-full items-center justify-center py-5">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 mt-4 object-cover"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex w-screen lg:w-full flex-col mt-10 space-y-4 text-white font-semibold">
          <Link
            to="/"
            className={`p-4 rounded-md mx-4 ${
              location.pathname === "/"
                ? "bg-white text-usedColor"
                : "hover:bg-orange-300"
            }`}
          >
            Visitor Approval
          </Link>
          <Link
            to="/candidate-approval"
            className={`p-4 rounded-md  mx-4 ${
              location.pathname === "/candidate-approval"
                ? "bg-white text-usedColor"
                : "hover:bg-orange-300"
            }`}
          >
            Candidate Approval
          </Link>
          <Link
            to="/manage-event"
            className={`p-4 rounded-md mx-4 ${
              location.pathname === "/manage-event"
                ? "bg-white text-usedColor"
                : "hover:bg-orange-300"
            }`}
          >
            Manage Event
          </Link>
          <Link
            to="/manage-winner"
            className={`p-4 rounded-md mx-4 ${
              location.pathname === "/manage-winner"
                ? "bg-white text-usedColor"
                : "hover:bg-orange-300"
            }`}
          >
            Manage Winner
          </Link>
        </nav>
      </div>

      {/* Overlay (for mobile when sidebar is open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Toggle Button */}
      <button
        className={`sm:hidden fixed   top-5 left-5 z-50 text-2xl focus:outline-none ${
          isOpen ? "text-white" : "text-usedColor"
        }`}
        onClick={toggleMenu}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );
};

export default Navbar;
