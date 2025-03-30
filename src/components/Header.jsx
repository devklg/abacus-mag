import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        Magnificent Worldwide Marketing
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center space-x-6">
          <li>
            <a href="/home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="/opportunity" className="text-gray-700 hover:text-blue-600">
              Opportunity
            </a>
          </li>
          <li>
            <a href="/product" className="text-gray-700 hover:text-blue-600">
              Product
            </a>
          </li>
          <li>
            <a
              href="/compensation-plan"
              className="text-gray-700 hover:text-blue-600"
            >
              Compensation Plan
            </a>
          </li>
          <li>
            <a href="/profile" className="text-gray-700 hover:text-blue-600">
              Profile
            </a>
          </li>
        </ul>
      </nav>

      {/* Join Now Button */}
      <div>
        <a
          href="/join"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Join Now
        </a>
      </div>
    </header>
  );
};

export default Header;