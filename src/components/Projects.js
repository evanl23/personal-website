import Section from './common/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/evanl23/personal-website",
      // live: "",
      image: "/portfolio2.png" 
    },
    {
      id: 2,
      title: "Personal AI Assistant",
      description: "A proactive personal assistant that manages deadlines, meetings, and due-dates, all through SMS.",
      technologies: ["Flask", "Firebase", "Google Cloud Run", "OpenAI Agents Framework"],
      github: "https://github.com/evanl23/AI-Texting-Assistant",
      live: "https://textmarley.com/",
      image: "/marley.png" 
    },
    {
      id: 3,
      title: "Terminal Geometry Dash",
      description: "The popular Geometry Dash game by RobTop rebuilt for your terminal.",
      technologies: ["C", "Linux"],
      github: "https://github.com/evanl23/GeometryDash",
      // live: "",
      image: "/geo.jpg" 
    },
    {
      id: 4,
      title: "Trading Engine",
      description: "Trading Engine Server that hosts servers for trading securities, allows clients to create orders, and match orders between clients.",
      technologies: ["C#", ".NET"],
      github: "https://github.com/evanl23/Trading-Engine",
      // live: "",
      image: "/trading.avif"
    }
  ];

  return (
    <Section 
      title="Projects" 
      subtitle="Check out some of my recent work"
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, title, description, technologies, github, live, image }) => (
          <div 
            key={id} 
            className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {/* Project Image Placeholder */}
            <div className="h-48 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              <img 
                src={require(`../Assets${image}`)} 
                alt={title}
                className="w-full h-full object-cover" 
              /> 
             
            </div>
            
            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-500">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap mb-4">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex justify-between mt-4">
                <a 
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
                <a 
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <FaExternalLinkAlt className="mr-2" /> Take me there!
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;

