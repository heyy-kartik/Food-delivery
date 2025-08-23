import React, { useState, useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utillities/useOnlineStatus";
import UserContext from "./Utillities/UserContext";
import LocationHeader from "./locationHeader.jsx";
import { FaMapMarkerAlt } from "react-icons/fa";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const OnlineStatus = useOnlineStatus();
  const { location } = useContext(UserContext);

  return (
    <>
      <header className="bg-white backdrop-blur-lg drop-shadow-lg border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <Link to="/">
                <img
                  className="h-10 w-auto rounded-lg shadow-md hover:scale-105 transition-transform"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iujphOsVMtakrSKi8xXYFwRkWo7XnC0OTA&s"
                  alt="Logo"
                />
              </Link>
              {/* Location Feature */}
              <div className="flex items-center gap-2 px-3 py-1  rounded-lg">
                <span className="text-gray-700 text-sm font-medium">
                  {location}
                </span>
                <LocationHeader />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 text-lg">Status:</span>
                  <span
                    className={`font-medium text-lg ${
                      OnlineStatus ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {OnlineStatus ? "Online ✅" : "Offline ❌"}
                  </span>
                </div>
                <Link
                  to="/"
                  className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50 hover:backdrop-blur-sm;"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50 hover:backdrop-blur-sm;"
                >
                  About us
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50 hover:backdrop-blur-sm;"
                >
                  Contact us
                </Link>
                <Link
                  to="/Cart"
                  className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50 hover:backdrop-blur-sm;"
                >
                  Cart
                </Link>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300">
            <div className="absolute top-0 left-0 w-full bg-white/95 drop-shadow-xl rounded-b-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="text-gray-700 text-base font-medium">
                  {location || "Set Location"}
                </span>
                <LocationHeader />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-gray-600">Status:</span>
                <span
                  className={`font-medium ${
                    OnlineStatus ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {OnlineStatus ? "Online ✅" : "Offline ❌"}
                </span>
              </div>
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact us
              </Link>
              <Link
                to="/Cart"
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Cart
              </Link>
              <button
                onClick={() => {
                  setbtnName(btnName === "Login" ? "Logout" : "Login");
                  setIsMenuOpen(false);
                }}
                className="w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2 shadow"
              >
                {btnName}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Tailwind custom classes for nav links */}
      <style>
        {`
          .nav-link {
            @apply text-gray-700 !hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50 hover:backdrop-blur-sm;
          }
          .mobile-nav-link {
            @apply block text-gray-700 !hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-orange-50;
          }
        `}
      </style>
    </>
  );
};

export default Header;
