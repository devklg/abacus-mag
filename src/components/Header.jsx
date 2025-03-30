import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Opportunity', path: '/opportunity' },
    { name: 'Product', path: '/product' },
    { name: 'Compensation Plan', path: '/compensation' },
    { name: 'Join Now', path: '/join' },
    { name: 'Share With...', path: '/share' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              Magnificent Worldwide Marketing
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden">
            <span className="sr-only">Open menu</span>
            {/* Add mobile menu icon here */}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
