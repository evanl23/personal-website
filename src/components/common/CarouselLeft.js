import React, { useEffect, useRef } from 'react';
import '../../styles/CarouselLeft.css';

const CarouselL = ({ skills }) => {
  const trackRef = useRef(null);
  
  // Duplicate the skills array to create a seamless loop effect
  // We use three copies to ensure there's always enough content for the infinite loop
  const duplicatedSkills = [...skills, ...skills, ...skills];
  
  // Set a CSS variable for the number of items to make the animation dynamic
  useEffect(() => {
    if (trackRef.current) {
      document.documentElement.style.setProperty('--num-items', skills.length);
      document.documentElement.style.setProperty('--item-width', '120px');
    }
  }, [skills.length]);

  return (
    <div className="carousel-outer-container w-full relative">
      {/* Left fade effect */}
      <div className="carousel-fade-left" />
      
      {/* Main carousel container */}
      <div className="carousel-container w-full overflow-hidden">
        <div className="carousel-track" ref={trackRef}>
          {duplicatedSkills.map((skill, index) => (
            <div 
              key={`${skill.title}-${index}`} 
              className="carousel-item flex flex-col items-center justify-center p-4 mx-3 rounded-lg transition-transform duration-300 hover:scale-110 dark:hover:bg-gray-800 hover:bg-gray-100"
            >
              <img 
                src={skill.icon} 
                alt={skill.title} 
                className="w-8 h-8 md:w-10 md:h-10 object-contain" 
              />
              <p className="text-xs text-fun-gray font-bold mt-3 opacity-80">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right fade effect */}
      <div className="carousel-fade-right" />
    </div>
  );
};

export default CarouselL;

