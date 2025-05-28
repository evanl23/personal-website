import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white ">
      <nav className="container flex justify-between items-center mx-auto p-6 px-4 ">
        <li className="list-none"> {/*"font-bold text-lg cursor-pointer"*/}
          <Link href="/">
            <span className="font-black text-2xl flex items-center">
              {"EvanPLiu".split("").map((letter, index) => {
                return (//text-5xl text-blue-500 uppercase font-bold
                  <span key={index} className="hover:text-blue-500 hover:-mt-2.5 transition-all duration-500 hover:duration-100">
                    {letter}
                  </span>
                );
              })}
            </span>
          </Link>
        </li>
        
        {/* Desktop navbar */}
        <div className="font-black text-l flex gap-7 hidden md:flex">
          < Link to="/" className="dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500">
            Home
          </Link>
          <Link to="/projects" className="dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500">
            Projects
          </Link>
          <Link to="/resume" className=" dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500">
            Resume
          </Link>
            <Link to="/connect" className="dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500">
            Connect
          </Link>
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>

        {isOpen && //Check if mobile menue is open
          <div className="md:hidden font-black text-l flex gap-7 ">
            < Link to="/" className="dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/projects" className="dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/resume" className=" dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500" onClick={() => setIsOpen(false)}>
              Resume
            </Link>
              <Link to="/connect" className="dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500" onClick={() => setIsOpen(false)}>
              Connect
            </Link>
          </div>
        }
      </nav>
    </header>
  );
}

export default Header;