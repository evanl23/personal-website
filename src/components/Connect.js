import Section from './common/Section';
import {FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa";

function Connect() {
  const SOCIAL = [
        {
            id: 1,
            link: "https://www.linkedin.com/in/evan-liu23/",
            icon: <FaLinkedin/>,
        },
        {
            id: 2,
            link: "mailto:eliu23@bu.edu",
            icon: <FaEnvelope/>,
        },
        {
            id: 3,
            link: "https://github.com/evanl23",
            icon: <FaGithub/>,
        },
    ];

  return (
    <Section 
      title="Let's Connect!" 
      subtitle=""
    >
      <div className="flex justify-evenly py-3 lg:py-4 text-4xl w-full md:w-1/3">
        {SOCIAL.map(({id, link, icon}) => (
          <a 
            href={link} 
            key={id} 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-blue-600"
            >
              {icon}
          </a>
        ))}
      </div>

      <div className="p-2 text-left w-full flex items-center justify-center">
        <form 
          action="https://getform.io/f/agdlpykb" 
          method="POST" 
          className="w-full md:w-2/3 lg:w-1/2"
        >
          <div className="w-full">
            <div className="flex flex-col">
              <label className="capitalize text-sm py-2 font-light">Name</label>
              <input
                type="text"
                name="Name"
                placeholder="Your name"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-light">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Your email address"
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
              />
            </div>
            <div className="flex flex-col my-2">
              <label className="capitalize text-sm py-2 font-light">Message</label>
              <textarea
                name="Message"
                rows="10"
                placeholder="Your message here..."
                className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <button 
              type="submit"
              className="my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
}

export default Connect;
