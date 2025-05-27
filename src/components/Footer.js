import { FaGithub } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-white py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-fun-gray-light font-medium">
              © {year} {" "}
              <a
              href="eliu23@bu.edu"
              className="text-fun-gray-light font-black">
              Evan Liu.
              </a> 
              {" "} All rights reserved.
            </p>
            <p className="font-black text-xs mt-1 text-gray-400 inline-flex items-center">
              Built with React
              <span className="pl-1 pr-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  height="26"
                  alt="React"
                  title="React"
                />
              </span>
              & Tailwind CSS 
              <span className="pl-1">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  width="26"
                  height="26"
                  alt="React"
                  title="React"
                />
              </span>
            </p>
          </div>
          
          <div className="flex space-x-4">
            <button onClick={() => window.open('https://github.com/evanl23/personal-website', '_blank', 'noopener,noreferrer')} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-black text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="inline-flex items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                <a className="hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-400 transition-colors pr-2">
                  <FaGithub className="text-xl" />
                </a>
                View source code
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

