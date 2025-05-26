import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Resume from './components/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="dark">
        <Header />
        
        <main className="bg-white dark:bg-gray-900 text-gray-500 dark:text-white min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
