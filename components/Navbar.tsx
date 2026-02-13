
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PTlogo from '../media/PTlogo.png';

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
    <nav className="sticky top-0 z-50 bg-[#FF85C1]/5 backdrop-blur-sm border-b border-[#FF85C1]/15 px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="flex items-center gap-3 group shrink-0">
        <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center transform group-hover:scale-110 transition-transform">
          <img 
            src={PTlogo}
            alt="Pinkteletubbi Logo"
            className="w-full h-full object-contain pixelated drop-shadow-[0_0_5px_rgba(255,133,193,0.5)]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/pixel-art/svg?seed=pink&backgroundColor=ff85c1';
            }}
          />
        </div>
        <span className="font-bimbo text-4xl md:text-5xl tracking-tighter hover:text-white transition-colors">
          pinkteletubbi
        </span>
      </Link>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 font-bimbo text-2xl md:text-3xl">
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
