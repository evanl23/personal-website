import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaTimes, FaBars} from 'react-icons/fa'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
          < Link to="/" className={`w-max dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/") ? "dark:text-white" : "dark:text-gray-400"}`}>
            Home
          </Link>
          <Link to="/about" className={`w-max dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/about") ? "dark:text-white" : "dark:text-gray-400"}`}>
            About
          </Link>
          <Link to="/projects" className={`w-max dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/projects") ? "dark:text-white" : "dark:text-gray-400"}`}>
            Projects
          </Link>
          <Link to="/resume" className={`w-max dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/resume") ? "dark:text-white" : "dark:text-gray-400"}`}>
            Resume
          </Link>
          <Link to="/connect" className={`w-max dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/connect") ? "dark:text-white" : "dark:text-gray-400"}`}>
            Connect
          </Link>
        </div>

        {/* Mobile navbar */}
        <div className="md:hidden ml-auto">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden dark:bg-gray-900 absolute z-50 right-6 top-20 shadow-lg backdrop-blur-md dark:bg-gray-900/80 rounded-lg p-6 space-y-4 text-right${
                    isOpen ? 'max-h-96 opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none' }`}> 
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2 font-black text-l">
          < Link to="/" className={`w-max dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/") ? "dark:text-white" : "dark:text-gray-400"}`} onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/about" className={`w-max dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/about") ? "dark:text-white" : "dark:text-gray-400"}`} onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/projects" className={`w-max dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/projects") ? "dark:text-white" : "dark:text-gray-400"}`} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link to="/resume" className={`w-max dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/resume") ? "dark:text-white" : "dark:text-gray-400"}`} onClick={() => setIsOpen(false)}>
            Resume
          </Link>
          <Link to="/connect" className={`w-max dark:text-gray-400 dark:hover:text-white transition-colors hover:rotate-360 transition-transform duration-500 ${isActive("/connect") ? "dark:text-white" : "dark:text-gray-400"}`} onClick={() => setIsOpen(false)}>
          Connect
          </Link>
        </div>
      </div>    
    </header>
  );
}

export default Header;