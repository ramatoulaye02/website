
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { label: 'home', path: '/' },
    { label: 'about me', path: '/about' },
    { label: 'blogs', path: '/blogs' },
    { label: 'videos', path: '/videos' },
    { label: 'projects', path: '/projects' },
    { label: 'contact me', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-900/50 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="flex items-center gap-3 group shrink-0">
        <div className="w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform">
          <img 
            src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/pinkteletubbi-logo.png" 
            alt="Logo"
            className="w-full h-full object-contain pixelated drop-shadow-[0_0_5px_rgba(255,133,193,0.5)]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/pixel-art/svg?seed=pink&backgroundColor=ff85c1';
            }}
          />
        </div>
        <span className="font-bimbo text-3xl tracking-tighter hover:text-white transition-colors">
          pinkteletubbi
        </span>
      </Link>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-bimbo text-lg md:text-xl">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link-hover transition-colors whitespace-nowrap ${
              location.pathname === item.path ? 'text-white' : 'text-[#FF85C1]'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
