
import React, { useState } from 'react';

const Projects: React.FC = () => {
  type ProjectCategory = 'gamedev' | 'ai' | 'apps';
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('apps');

  const tabFloatTimings: Record<ProjectCategory, { duration: string; delay: string }> = {
    gamedev: { duration: '3.6s', delay: '0s' },
    ai: { duration: '4.4s', delay: '0.35s' },
    apps: { duration: '3.1s', delay: '0.15s' },
  };

  const projects = [
    {
      name: "PinkOS",
      desc: "A completely unusable but very pretty operating system shell written in JS.",
      tech: ["React", "Tailwind", "Framer Motion"],
      category: 'apps' as const,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <rect x="15" y="20" width="70" height="50" rx="5" className="animate-pulse" />
          <path d="M15 60 L85 60" />
          <path d="M40 70 L30 85 L70 85 L60 70" />
          <circle cx="50" cy="40" r="8" className="fill-[#FF85C1]" />
        </svg>
      )
    },
    {
      name: "VibeCheck",
      desc: "AI-powered sentiment analysis for your messy discord chats.",
      tech: ["Gemini API", "Node.js", "Express"],
      category: 'ai' as const,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <circle cx="50" cy="50" r="35" />
          <path d="M35 40 C35 40 38 35 42 40" strokeLinecap="round" />
          <path d="M58 40 C58 40 61 35 65 40" strokeLinecap="round" />
          <path d="M35 65 Q50 80 65 65" strokeLinecap="round" className="text-[#FF85C1]" />
          <path d="M20 20 L30 30 M80 20 L70 30" strokeLinecap="round" opacity="0.5" />
        </svg>
      )
    },
    {
      name: "GlowUI",
      desc: "A library of React components that literally glow on hover.",
      tech: ["TypeScript", "Radix UI", "CSS"],
      category: 'apps' as const,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <path d="M50 15 L60 40 L85 40 L65 55 L75 80 L50 65 L25 80 L35 55 L15 40 L40 40 Z" className="fill-[#FF85C1]/20" />
          <circle cx="50" cy="50" r="5" className="fill-[#FF85C1]" />
          <path d="M50 5 L50 15 M95 50 L85 50 M50 95 L50 85 M5 50 L15 50" strokeLinecap="round" />
          <path d="M80 20 L70 30 M80 80 L70 70 M20 80 L30 70 M20 20 L30 30" strokeLinecap="round" />
        </svg>
      )
    },
    {
      name: "Bubblegum Engine",
      desc: "A simple 2D game engine optimized for low-res pixel art.",
      tech: ["Canvas", "C++", "WebAssembly"],
      category: 'gamedev' as const,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <circle cx="40" cy="40" r="20" className="fill-[#FF85C1]/40" />
          <circle cx="65" cy="55" r="15" className="fill-[#FF85C1]/20" />
          <circle cx="45" cy="65" r="10" />
          <path d="M75 30 Q85 40 75 50" strokeLinecap="round" />
          <rect x="35" y="35" width="4" height="4" className="fill-white" stroke="none" />
        </svg>
      )
    }
  ];

  const tabs: { key: ProjectCategory; label: string }[] = [
    { key: 'gamedev', label: 'gamedev' },
    { key: 'ai', label: 'ai' },
    { key: 'apps', label: 'apps' },
  ];

  const visibleProjects = projects.filter((project) => project.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="font-bimbo text-5xl md:text-6xl border-b-2 border-pink-900/50 pb-4 inline-block">
          projects
        </h2>
        <div
          className="hidden sm:flex items-center gap-3 font-bimbo text-2xl text-white"
          role="tablist"
          aria-label="project categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.key}
              onClick={() => setActiveCategory(tab.key)}
              style={{
                animationName: 'tab-float',
                animationDuration: tabFloatTimings[tab.key].duration,
                animationDelay: tabFloatTimings[tab.key].delay,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
              }}
              className={
                `px-4 py-1.5 rounded-full border transition-all ${
                  activeCategory === tab.key
                    ? 'border-[#FF85C1]/60 bg-[#FF85C1]/10 text-white shadow-[0_0_20px_#FF85C1]'
                    : 'border-pink-900/30 text-[#FF85C1] hover:text-white hover:border-[#FF85C1]/40 hover:bg-pink-900/10'
                }`
              }
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid sm:grid-cols-2 gap-10">
        {visibleProjects.map((proj, idx) => (
          <div key={idx} className="group relative p-1 rounded-3xl bg-pink-900/10 hover:bg-[#FF85C1]/20 transition-all duration-500 border border-pink-900/30 hover:border-[#FF85C1]/50 shadow-xl">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-[22px] h-full flex flex-col">
              <div className="w-16 h-16 mb-6 text-[#FF85C1] group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_#FF85C1] transition-all duration-500 transform -rotate-3 group-hover:rotate-0">
                {proj.icon}
              </div>
              
              <h3 className="font-bimbo text-4xl text-white mb-3 tracking-tight group-hover:text-[#FF85C1] transition-colors">
                {proj.name}
              </h3>
              
              <p className="font-bimbo-alt text-lg text-pink-200/70 mb-8 flex-grow leading-relaxed">
                {proj.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {proj.tech.map(t => (
                  <span key={t} className="font-bimbo text-lg px-3 py-0.5 bg-pink-900/20 border border-pink-500/20 rounded-lg text-pink-400">
                    {t.toLowerCase()}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 font-bimbo text-2xl py-2 rounded-xl border-2 border-pink-500/30 hover:bg-pink-500/10 text-[#FF85C1] transition-all active:scale-95">
                  view repo
                </button>
                <button className="flex-1 font-bimbo text-2xl py-2 rounded-xl bg-[#FF85C1] text-black hover:shadow-[0_0_20px_#FF85C1] transition-all active:scale-95">
                  live demo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-pink-900/5 rounded-3xl border-2 border-dashed border-pink-900/30 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[#FF85C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <h4 className="font-bimbo text-5xl mb-4 text-white relative z-10">want to collab?</h4>
        <p className="font-bimbo-alt text-2xl text-pink-300 mb-8 relative z-10">always looking for cool people to build cool things with.</p>
        <button className="relative z-10 px-16 py-5 bg-[#FF85C1] text-black font-bimbo text-3xl rounded-full hover:shadow-[0_0_40px_#FF85C1] hover:scale-110 transition-all duration-300">
          send me a msg
        </button>
      </div>
    </div>
  );
};

export default Projects;
