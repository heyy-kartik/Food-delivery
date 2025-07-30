import React from "react";
import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./Utillities/useOnlineStatus";
import UserContext from "./Utillities/UserContext";
import LocationHeader from "./locationHeader.jsx";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const OnlineStatus = useOnlineStatus();

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-10 w-auto rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iujphOsVMtakrSKi8xXYFwRkWo7XnC0OTA&s"
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center justify-center gap-6">
              <nav className="hidden md:flex items-center justify-center space-x-6">
                <div className="  flex items-center gap-18 justify-around">
                  <div className="flex items-center space-x-2  px-3 py-1 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-lg p-5">Status:</span>
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
                    className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50"
                  >
                    Home
                  </Link>

                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50"
                  >
                    About us
                  </Link>

                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50"
                  >
                    Contact us
                  </Link>

                  <Link
                    to="/Cart"
                    className="text-gray-700 hover:text-orange-600 px-4 py-2 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-orange-50"
                  >
                    Cart
                  </Link>

                  <button
                    onClick={() => {
                      btnName === "Login"
                        ? setbtnName("Logout")
                        : setbtnName("Login");
                    }}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {btnName}
                  </button>
                </div>
              </nav>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 p-2"
              >
                <svg
                  className="h-6 w-6"
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
                <div className="flex items-center justify-center space-x-2 text-lg py-2">
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
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </Link>

                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact us
                </Link>

                <Link
                  to="/Cart"
                  className="text-gray-700 hover:text-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cart
                </Link>

                <button
                  onClick={() => {
                    btnName === "Login"
                      ? setbtnName("Logout")
                      : setbtnName("Login");
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {btnName}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Location Header */}
      </header>
    </>
  );
};

export default Header;
