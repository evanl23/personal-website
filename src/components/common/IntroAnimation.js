import React, { useState, useEffect, useMemo} from 'react';

const IntroAnimation = ({ 
  onComplete, 
  // Customizable animation speeds
  letterDelay = 800, // Time between each letter appearing
  fadeOutDelay = 200, // Time before fade out starts 
  slideUpDelay = 2300, // Time before slide up starts
  completeDelay = 3000, // Time before animation is considered complete
  backgroundColor = "#111827", // Dark background color
  textColor = "#3B82F6" // Blue text color
}) => {
  const [active, setActive] = useState({});
  const [fade, setFade] = useState({});
  const [hide, setHide] = useState(false);
  
  const name = useMemo(() => ["Evan", "Liu"], []);

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => {
      // Activate first name letters one by one
      name.forEach((_, idx) => {
        setTimeout(() => {
          setActive(prev => ({
            ...prev,
            [`first-${idx}`]: true
          }));
        }, idx * letterDelay);
      });

      // Start fade out animation
      const timer2 = setTimeout(() => {
        // Fade out first name
        name.forEach((_, idx) => {
          setTimeout(() => {
            setFade(prev => ({
              ...prev,
              [`first-${idx}`]: true
            }));
          }, idx * 50);
        });
      }, fadeOutDelay);

      // Hide intro animation - this triggers the transform for sliding up
      const timer3 = setTimeout(() => {
        setHide(true);
      }, slideUpDelay);

      // Call onComplete callback
      // Need to allow enough time for the transform animation to complete
      const timer4 = setTimeout(() => {
        if (onComplete) onComplete();
      }, completeDelay);

      return () => {
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
      };
    }, 0);

    return () => clearTimeout(timer1);
  }, [name, letterDelay, fadeOutDelay, slideUpDelay, completeDelay, onComplete]);

  return (
    <div 
      className={`intro ${hide ? 'hide' : ''}`} 
      style={{ 
        backgroundColor: backgroundColor
      }}
    >
      <div className="logo-header" style={{ color: textColor }}>
        <div className="logo-first">
          {name.map((letter, idx) => (
            <span 
              key={`first-${idx}`} 
              className={`logo ${active[`first-${idx}`] ? 'active' : ''} ${fade[`first-${idx}`] ? 'fade' : ''}`}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;

