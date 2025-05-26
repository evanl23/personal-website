import React from 'react';
import { FaHeart, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {year} Evan Liu. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-gray-500 dark:text-gray-400">
              Built with <span className="inline-block align-middle"><FaHeart className="text-red-500 inline-block mx-1" /></span> using React & Tailwind CSS
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://twitter.com/YourTwitterHandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/in/YourLinkedInHandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="https://github.com/YourGitHubHandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

