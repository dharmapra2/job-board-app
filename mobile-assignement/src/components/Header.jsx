import { Link } from "react-router-dom";
import { FiMenu, FiBell, FiUser, FiX } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-[#0f172a] lg:border-b-2 border-gray-100 md:mb-4">
      <div className="py-2 flex justify-between items-center">
        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-500">
            Home
          </Link>
          <Link to="/view-all" className="text-white hover:text-blue-500">
            Jobs
          </Link>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon with Badge */}
          <div className="relative cursor-pointer">
            <button
              className="text-white hover:text-blue-500 relative mt-2"
              onClick={() => setNotificationOpen(!notificationOpen)}
            >
              <FiBell size={20} />
              <span className="absolute -top-2 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>

            {/* Notification Dropdown */}
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-1 z-20">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="font-medium">Notifications</p>
                </div>
                <div className="max-h-60 overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <p className="text-sm">New job matches your profile</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-gray-100 text-center">
                  <button className="text-blue-500 text-sm">View All</button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Icon */}
          <Link
            to="/profile"
            className="text-white hover:text-blue-500 cursor-pointer"
          >
            <FiUser size={24} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 py-2 border-t border-gray-100">
          <nav className="flex flex-col space-y-2">
            <Link
              to="/"
              className="px-3 py-2 text-white cursor-pointer hover:text-black hover:bg-gray-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/view-all"
              className="px-3 py-2 text-white cursor-pointer  hover:text-black hover:bg-gray-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              to="/profile"
              className="px-3 py-2 text-white cursor-pointer  hover:text-black hover:bg-gray-50 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Profile
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
