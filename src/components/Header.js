import { Link } from 'react-router-dom';

import React from 'react';

function Header({}) {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-xl">EvanPLiu</h1>
        <div className="flex gap-6">
          <Link to="/projects" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link to="/resume" className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;