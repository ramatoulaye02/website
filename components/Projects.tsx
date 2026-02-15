
import React, { useState } from 'react';
import gpsProjectImg from '../media/gps-project.png';

const Projects: React.FC = () => {
  type ProjectCategory = 'gamedev' | 'ai' | 'apps';
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('apps');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

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
      repo: undefined,
      demo: undefined,
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
      repo: undefined,
      demo: undefined,
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
      repo: undefined,
      demo: undefined,
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
      repo: undefined,
      demo: undefined,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <circle cx="40" cy="40" r="20" className="fill-[#FF85C1]/40" />
          <circle cx="65" cy="55" r="15" className="fill-[#FF85C1]/20" />
          <circle cx="45" cy="65" r="10" />
          <path d="M75 30 Q85 40 75 50" strokeLinecap="round" />
          <rect x="35" y="35" width="4" height="4" className="fill-white" stroke="none" />
        </svg>
      )
    },
    {
      name: "ComicMyNotes",
      desc: "AI-powered platform that transforms educational lecture PDFs into engaging comic books for enhanced learning and retention.",
      tech: ["Python", "Flask", "OpenAI", "JavaScript"],
      category: 'apps' as const,
      repo: "https://github.com/ramatoulaye02/ComicMyNotes.git",
      demo: "https://devpost.com/software/educomics",
      detailedDesc: `## Project Overview
EDUCOMICS is an innovative AI-powered educational platform that transforms lecture PDFs into engaging comic books. The project addresses the challenge of dense, difficult-to-retain educational materials by converting them into visually appealing and memorable comic narratives.

## What it Does
Our platform is a website that transforms educational lecture PDFs into engaging comic books. By leveraging AI and web technologies, we make learning more interactive and visually appealing for students of all levels.

## Key Features
• AI-Driven PDF to Comic Conversion: Intelligent extraction and transformation of educational content
• Seamless PDF Upload: Intuitive interface for easy file uploads
• Comic Generation: Dynamic comic creation from lecture material
• Interactive Display: User-friendly viewer for generated comics
• Context-Aware Processing: Maintains educational context during transformation

## How We Built It
**Backend Architecture**
• Python and OpenAI's API for AI-powered content extraction and processing
• Smart PDF parsing to extract meaningful educational content
• Dialogue generation optimized for comic-style narratives
• Flask for server management and file handling
• JSON for structured data exchange between frontend and backend

**Frontend Design**
• HTML/CSS for responsive, intuitive interface
• JavaScript for interactive user experience
• Clean navigation for PDF uploads and comic viewing
• Optimized for various screen sizes and devices

## Technical Challenges Overcome
• Accurate text extraction from PDFs while preserving context
• Fine-tuning AI-generated dialogues to match comic-style narrative
• Seamless frontend-backend integration with smooth data flow
• Optimized PDF processing for performance

## Technology Stack
• Backend: Python, Flask
• Frontend: HTML, CSS, JavaScript
• AI: OpenAI API
• Data Format: JSON
• Event: ConUHacks IX

## Future Enhancements
• Enhanced AI model for better dialogue structuring across different subjects
• Improved UI/UX with more interactive features
• Multilingual support for global accessibility
• Animation expansion to create educational video content
• Support for various document formats beyond PDFs
`,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <rect x="15" y="20" width="70" height="60" rx="3" className="fill-pink-900/20" />
          <path d="M25 30 L40 45 L30 55 M45 30 L55 40 L50 55 M65 30 L75 45 L70 55" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <line x1="20" y1="65" x2="80" y2="65" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: "GPS Lionel Groulx",
      desc: "Indoor GPS navigation system for Collège Lionel-Groulx featuring a custom-built indoor map with real-time student positioning and campus wayfinding.",
      tech: ["C#", "Unity", "GPS"],
      category: 'gamedev' as const,
      image: gpsProjectImg,
      repo: "https://github.com/ramatoulaye02/GPS-Lionel-Groulx-1.git",
      demo: "https://youtu.be/qRlyFOSZL3o?si=OvDBjickhwKTfRFY",
      descriptionImage: gpsProjectImg,
      detailedDesc: `## Project Overview
An indoor GPS navigation system built with Unity for Collège Lionel-Groulx. The application provides real-time pathfinding and navigation within the school building, helping students, staff, and visitors find their way through multiple floors and corridors using advanced pathfinding algorithms (A* and Dijkstra) with support for custom constraints like avoiding specific areas or passing through waypoints.

## Key Features
**Navigation & Pathfinding**
• Multiple Pathfinding Algorithms: A* and Dijkstra implementations
• Multi-Floor Navigation: Support for Étage 1, 2, and 4
• Real-time GPS Integration: Device GPS for outdoor positioning
• Indoor Navigation: Custom node-based system
• Custom Constraints: Avoid areas, pass through waypoints, multiple combinations

**User Experience**
• 3D Visualization: Immersive 3D representation of the school building
• First-Person Navigation: Realistic navigation experience
• 2D Map View: Alternative trajectory view for easier understanding
• User Instructions: Step-by-step navigation guidance
• Avatar Customization: Personalized avatars with color options

**Technical Features**
• Graph-Based Architecture: FloorGraph system for efficient representation
• Spline-Based Corridors: Smooth corridor generation
• Dynamic Scene Loading: Efficient floor/area loading
• Teleportation Nodes: Support for elevators and staircases

## Technology Stack
• Unity 2021.3.16f1
• C# for all game logic
• A* & Dijkstra Pathfinding Algorithms
• Graph Theory & Node-based navigation
• GPS Coordinate System
• Spline Mathematics

## Platform Support
Windows Desktop, macOS, Linux, iOS, Android (with GPS support)
`,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <rect x="20" y="25" width="60" height="50" rx="3" className="fill-pink-900/20" />
          <path d="M35 40 L50 55 L65 45" className="fill-none stroke-[#FF85C1]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="50" cy="50" r="3" className="fill-[#FF85C1]" />
          <circle cx="50" cy="50" r="8" className="fill-none stroke-[#FF85C1]" opacity="0.5" />
          <path d="M50 70 L50 80 M45 75 L55 75" strokeLinecap="round" />
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
              {proj.image && (
                <img 
                  src={proj.image} 
                  alt={proj.name}
                  className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"
                />
              )}
              
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
              
              <div className="space-y-3">
                <div className="flex gap-4">
                  {proj.repo && (
                    <a 
                      href={proj.repo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 font-bimbo text-2xl py-2 rounded-xl border-2 border-pink-500/30 hover:bg-pink-500/10 text-[#FF85C1] transition-all active:scale-95 text-center"
                    >
                      view repo
                    </a>
                  )}
                  {proj.demo && (
                    <a 
                      href={proj.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 font-bimbo text-2xl py-2 rounded-xl bg-[#FF85C1] text-black hover:shadow-[0_0_20px_#FF85C1] transition-all active:scale-95 text-center"
                    >
                      live demo
                    </a>
                  )}
                </div>
                {proj.detailedDesc && (
                  <button
                    onClick={() => setExpandedProject(expandedProject === proj.name ? null : proj.name)}
                    className="w-full font-bimbo text-xl py-2 rounded-xl border-2 border-pink-500/40 hover:bg-pink-500/5 text-pink-300 transition-all"
                  >
                    {expandedProject === proj.name ? 'hide details' : 'show details'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {expandedProject && visibleProjects.find(p => p.name === expandedProject)?.detailedDesc && (
        <div className="mt-12 p-12 bg-pink-900/10 rounded-3xl border-2 border-pink-900/40 max-h-[60vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bimbo text-4xl text-white">{expandedProject} - project description</h3>
            <button
              onClick={() => setExpandedProject(null)}
              className="font-bimbo text-2xl text-pink-300 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          {visibleProjects.find(p => p.name === expandedProject)?.descriptionImage && (
            <img 
              src={visibleProjects.find(p => p.name === expandedProject)?.descriptionImage}
              alt={expandedProject}
              className="w-full h-64 object-cover rounded-2xl mb-8 border border-pink-900/30"
            />
          )}
          <div className="font-bimbo-alt text-lg text-pink-100/90 leading-relaxed whitespace-pre-wrap">
            {visibleProjects.find(p => p.name === expandedProject)?.detailedDesc}
          </div>
        </div>
      )}

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
