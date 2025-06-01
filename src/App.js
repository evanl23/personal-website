import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Resume from './components/Resume';
import IntroAnimation from './components/common/IntroAnimation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Animation timing preferences
  const animationSettings = {
    letterDelay: 800,      // Time between each letter appearing
    fadeOutDelay: 2000,    // Time before fade out starts
    slideUpDelay: 2100,    // Time before slide up starts - background will slide up here
    completeDelay: 4000,   // Increased to allow time for the background to slide up completely
    backgroundColor: "#FFFFFF", // Background color
    textColor: "#111827"   // Text color
  };
  return (
    <BrowserRouter>
      <div className="dark">
        {showIntro && <IntroAnimation 
          onComplete={handleIntroComplete}
          {...animationSettings}
        />}
        <Header />
        
        <main className="bg-white dark:bg-gray-900 text-gray-500 dark:text-white min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
