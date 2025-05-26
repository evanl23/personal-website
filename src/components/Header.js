import { Link } from 'react-router-dom';

import React from 'react';
import {MdNightsStay, MdWbSunny} from 'react-icons/md';

function Header({}) {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-xl">Evan P. Liu</h1>

      </nav>
    </header>
  );
}

export default Header;