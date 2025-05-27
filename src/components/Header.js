import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="container flex justify-between items-center mx-auto p-6 px-4">
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

        <div className="font-black text-l flex gap-7 ">
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
      </nav>
    </header>
  );
}

export default Header;