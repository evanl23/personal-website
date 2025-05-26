import React from 'react';
import Section from './common/Section';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio-url.com",
      image: "project1.jpg" // Will be replaced with actual image path
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A full-stack application for managing tasks and projects with user authentication and real-time updates.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-app-url.com",
      image: "project2.jpg" // Will be replaced with actual image path
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "An online shopping platform with product catalog, cart functionality, and secure payment processing.",
      technologies: ["React", "Redux", "Node.js", "Stripe API"],
      github: "https://github.com/yourusername/ecommerce",
      live: "https://your-ecommerce-url.com",
      image: "project3.jpg" // Will be replaced with actual image path
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application that provides current conditions and forecasts for any location using weather APIs.",
      technologies: ["JavaScript", "HTML/CSS", "Weather API"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app-url.com",
      image: "project4.jpg" // Will be replaced with actual image path
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
              <p className="text-gray-600 dark:text-gray-400">Project Image</p>
              {/* Once you have images:
              <img 
                src={require(`../Assets/${image}`)} 
                alt={title}
                className="w-full h-full object-cover" 
              /> 
              */}
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
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
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

