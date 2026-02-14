
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Blogs from './components/Blogs';
import Videos from './components/Videos';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import GameOfLifeBackground from './components/GameOfLifeBackground';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col selection:bg-pink-400 selection:text-black relative">
        <GameOfLifeBackground />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="p-8 text-center text-pink-300 font-bimbo text-xl border-t border-pink-900/30 bg-black/40 backdrop-blur-sm">
          © {new Date().getFullYear()} pinkteletubbi • made with love
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
