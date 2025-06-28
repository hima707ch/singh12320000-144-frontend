import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" id="Header_1">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full hover:opacity-80 transition-opacity" />
            <span className="text-white text-2xl font-bold hover:text-gray-200">RealEstate</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8" id="Header_2">
            {[
              { name: 'Home', path: '/' },
              { name: 'Properties', path: '/propertylistingpage' },
              { name: 'Profile', path: '/userprofilepage' },
              { name: 'Contact', path: '/contactpage' }
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-white hover:text-gray-200 transition-colors ${location.pathname === item.path ? 'border-b-2 border-white' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4" id="Header_3">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                🔍
              </button>
            </form>

            <Link
              to="/loginpage"
              className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/registerpage"
              className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
            >
              Register
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-gray-200"
            id="Header_4"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4" id="Header_5">
            <div className="flex flex-col space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Properties', path: '/propertylistingpage' },
                { name: 'Profile', path: '/userprofilepage' },
                { name: 'Contact', path: '/contactpage' }
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-white hover:text-gray-200 transition-colors ${location.pathname === item.path ? 'border-b-2 border-white' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/loginpage"
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  🔍
                </button>
              </form>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;