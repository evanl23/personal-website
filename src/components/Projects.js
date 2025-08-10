import Section from './common/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Saturn.fm",
      description: "Saturn.fm is a terminal user interface (TUI) for playing jazz music. This lightweight TUI can be run through a curl command, or be installed via Homebrew and run locally from machine.",
      technologies: ["Bash", "tput", "Nginx"],
      github: "https://github.com/evanl23/saturn.fm",
      live: "https://github.com/evanl23/saturn.fm?tab=readme-ov-file#installation",
      image: "/saturn.fm.png"
    },
    {
      id: 2, 
      title: "Personal Website Reimagined",
      description: "This is a terminal based website that is accessed through curl commands. Everything in my main website can be found here, just redrawn for command line compatibility.",
      technologies: ["Bash", "Nginx"],
      github: "https://github.com/evanl23/eliu.sh",
      live: "https://github.com/evanl23/eliu.sh?tab=readme-ov-file#my-personal-website-reimagined-and-reinvented-for-the-terminal",
      image: "/eliu.png"
    },
    {
      id: 3, 
      title: "Similar Song Finder",
      description: "A music finder based on the 'feel' of a song. The metric is vectorized text and audio embeddings using CLAP, and the similarity is calculated using cosine similarity.",
      technologies: ["NodeJS", "CLAP", "ECS Fargate", "Pinecone"],
      github: "https://github.com/evanl23/music-similarity",
      image: "/song.png"
    },
    {
      id: 4, 
      title: "Raman Spectroscopy Query System",
      description: "Using AWS Fargate and Qdrant, this project provides the infrastructure for querying for similar Raman Spectra, vectors used for identifying unique chemical signatures.",
      technologies: ["FastAPI", "ECS Fargate", "AWS S3", "Qdrant"],
      github: "https://github.com/evanl23/RamanSpectroscopy",
      image: "/raman.png"
    },   
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/evanl23/personal-website",
      live: "https://evanpliu.com",
      image: "/portfolio3.png" 
    },
    {
      id: 6,
      title: "Terminal Geometry Dash",
      description: "An ASCII-style recreation of the popular Geometry Dash game by RobTop, designed to run in your terminal. Program is installed via a Homebrew tap.",
      technologies: ["C", "Linux", "Ncurses"],
      github: "https://github.com/evanl23/GeometryDash",
      live: "https://github.com/evanl23/terminal-dash?tab=readme-ov-file#-installation",
      image: "/terminal-dash-death.png" 
    },
    {
      id: 7,
      title: "SMS-Based AI Productivity Assistant",
      description: "A proactive personal assistant that manages reminders, meetings, and due-dates, all through SMS. This project uses Twilio webhooks  and even supports Gmail and calendar integration.",
      technologies: ["Flask", "Firebase", "Google Cloud Run", "OpenAI Agents Framework"],
      github: "https://github.com/evanl23/AI-Texting-Assistant",
      live: "https://textmarley.com/",
      image: "/marley.png" 
    },
    {
      id: 8,
      title: "Trading Engine",
      description: "Trading Engine Server that hosts servers for trading securities, allows clients to create orders, and match orders between clients.",
      technologies: ["C#", ".NET"],
      github: "https://github.com/evanl23/Trading-Engine",
      // live: "",
      image: "/trading.avif"
    },
  ];

  return (
    <Section 
      title="Projects" 
    >
      <div className="container grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, title, description, technologies, github, live, image }) => (
          <div 
            key={id} 
            className="dark:bg-gray-800 border-gray-300 border p-2 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:border-blue-500"
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
                { live ? ( // Check if link exists. If so, add. Leave blank otherwise
                  <a 
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <FaExternalLinkAlt className="mr-2" /> Take me there!
                </a> )
                : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;

