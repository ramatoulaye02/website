
import React, { useState } from 'react';
import educomicsImg from '../media/educomics.png';
import gpsDemoGif from '../media/gps-demo.gif';
import gpsProjectImg from '../media/gps-project.png';
import rcaImg from '../media/rca.png';
import silentSerenadeImg from '../media/silent-serenade.png';
import silentSerenade1Img from '../media/silent-serenade1.png';
import silentSerenade2Img from '../media/silent-serenade2.png';
import uniLinksImg from '../media/UniLinks.png';

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
      name: "UniLinks",
      desc: "McWics Hackathon Winner - Best Use of Gemini API. AI-powered student platform fostering connections through shared classes, interests, and an AI social practice space for presentation and networking skills.",
      tech: ["React", "TypeScript", "Gemini Live API", "Computer Vision", "Multimodal AI"],
      category: 'ai' as const,
      image: uniLinksImg,
      descriptionImage: uniLinksImg,
      repo: "https://github.com/olibreadstick/UniLinks",
      demo: "https://devpost.com/software/unilinks",
      detailedDesc: `## Project Overview
**McWics Hackathon Winner - Best Use of Gemini API**

UniLinks is an AI-powered student-focused platform designed to foster connections, community and friendship. The platform connects students based on shared classes, interests and working styles.

A key feature of UniLinks is the **AI-powered social practice space** for students. Especially for those with social anxiety, students can practice presentations, network interactions, and receive feedback on communication style.

**My Role**: I worked on the entire AI integration of the app, including integration of Gemini API computer vision, TTS (Text-to-Speech), and STT (Speech-to-Text).

## How the Project was Built
Full stack web application with AI integration.

## Technologies & Tools

**Frontend: React + TypeScript**
• Component-based UI for scenario selection, live sessions, and feedback panels
• Real-time state management for audio, video, and AI interaction

**Backend & AI Integration**
• **Gemini Live API** for low-latency, real-time AI conversations with native audio output
• AI conversation simulator for practicing social and networking scenarios
• LLM-powered recommendations engine for events, clubs, and connections
• Multimodal input support (audio + images) for contextual understanding
• Used to power both the AI Social Coach and immersive roleplay simulations

## AI Integration & Computer Vision

**Gemini Live Multimodal Sessions**
• Real-time streaming of microphone audio and webcam frames to Gemini
• AI responds with synthesized speech for natural, FaceTime-style interaction
• Text responses are also captured internally for transcripts and feedback analysis

**Computer Vision (Client-side)**
• Periodic webcam frame capture using an offscreen canvas
• Frames compressed and streamed to Gemini as vision inputs
• Enables AI to reason about posture, facial engagement, eye contact, and overall presentation
• Lightweight, privacy-aware approach (no facial recognition or identity tracking)

## Key Features
• **AI Social Coach**: Practice presentations and networking with real-time AI feedback
• **Computer Vision Analysis**: AI analyzes posture, engagement, and presentation skills
• **Student Connections**: Match with peers based on classes, interests, and working styles
• **Real-time Feedback**: Receive immediate feedback on communication style and delivery
• **Multimodal Interaction**: Seamless audio and visual AI interaction
• **Privacy-First Design**: Client-side processing with no identity tracking

## Technical Highlights
• Low-latency real-time AI conversations using Gemini Live API
• Multimodal AI processing (audio + vision) for comprehensive feedback
• Client-side computer vision implementation for privacy
• Text-to-Speech and Speech-to-Text integration
• Responsive React + TypeScript architecture

## Links
• **General UI Demo**: Available under "Try it out" section
• **AI Social Coach Demo**: Available under "Video Demo Link"
• **Devpost**: https://devpost.com/software/unilinks
`,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <circle cx="35" cy="40" r="12" className="fill-pink-900/20" />
          <circle cx="65" cy="40" r="12" className="fill-pink-900/20" />
          <circle cx="50" cy="65" r="12" className="fill-pink-900/20" />
          <path d="M45 45 L40 55 M55 45 L60 55" strokeLinecap="round" strokeWidth="2.5" className="stroke-[#FF85C1]" />
          <circle cx="50" cy="50" r="3" className="fill-[#FF85C1]" />
        </svg>
      )
    },
    {
      name: "ComicMyNotes",
      desc: "AI-powered platform that transforms educational lecture PDFs into engaging comic books for enhanced learning and retention.",
      tech: ["Python", "Flask", "OpenAI", "JavaScript"],
      category: 'ai' as const,
      image: educomicsImg,
      descriptionImage: educomicsImg,
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
      name: "Royal Canada Airline",
      desc: "Full-stack airline management and booking system that centralizes operations for staff and streamlines reservations for customers.",
      tech: ["Java", "Spring", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      category: 'apps' as const,
      image: rcaImg,
      repo: "https://github.com/McGill-ECSE321-Fall2025/group-project-group-2",
      demo: undefined,
      detailedDesc: `## Project Overview
Royal Canada Airline is a web application designed to improve and centralize daily airline operations. It provides customers with a fast, flexible booking experience while giving employees and managers the tools needed to coordinate flights, crew assignments, and airline policies.

## Customer Experience
• Account creation and authentication
• Flight search by date and location
• Book and cancel reservations
• View and track travel history
• Receive timely booking updates and confirmations

## Operations & Management
• Dashboards for pilots and flight attendants to view assigned flights
• Booking manager tools to add, remove, or delay flights
• Crew assignment and scheduling oversight
• Centralized admin dashboard for customer activity and employee management
• Airline-wide policy and announcement updates

## Development Highlights
• Deliverable 1: Requirements, use cases, domain model, and persistence layer with PostgreSQL
• Deliverable 2: RESTful backend services using Java Spring with unit and integration testing
• Deliverable 3: Web frontend built with HTML, CSS, and JavaScript integrated with backend APIs

## Technology Stack
• Java Spring for backend services
• PostgreSQL persistence layer
• RESTful APIs with DTOs and service/controller structure
• HTML, CSS, and JavaScript frontend
• Gradle build automation and testing
`,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <path d="M15 55 L85 45" strokeLinecap="round" />
          <path d="M45 40 L55 60" strokeLinecap="round" />
          <path d="M25 60 L40 55" strokeLinecap="round" />
          <path d="M60 50 L80 40" strokeLinecap="round" />
          <circle cx="20" cy="58" r="3" className="fill-[#FF85C1]" />
        </svg>
      )
    },
    {
      name: "Silent Serenade",
      desc: "A 2D platformer where every collected note matters. Navigate through beautifully crafted levels, collect musical notes to complete melodies, and avoid dangerous sharps.",
      tech: ["Unity", "C#", "Universal Render Pipeline"],
      category: 'gamedev' as const,
      image: silentSerenade2Img,
      descriptionImage: silentSerenade1Img,
      repo: "https://github.com/kana797/McGameJam26",
      demo: "https://lina674.itch.io/silent-serenade",
      detailedDesc: `## About The Game
**This world has fallen silent.**

Music has vanished, and the Queen is trapped in a realm where no sound remains. To restore harmony, she must hunt the lost musical notes scattered across the land while avoiding sharps—corrupted notes that seek to twist the melody.

**Silent Serenade** is a 2D platformer where every collected note matters. Navigate through beautifully crafted levels, collect musical notes to complete melodies, and avoid the dangerous sharps that hunt you. With every complete melody restored, a new instrument awakens, shaping both the sound and the theme of the next world.

![Silent Serenade Gameplay](${silentSerenade1Img})

## Key Features
• **Musical Progression System**: Collect notes to restore melodies and unlock new instruments
• **Dynamic Worlds**: Each completed melody transforms the environment with new themes and sounds
• **Strategic Gameplay**: Balance risk and reward as you hunt notes while avoiding sharps
• **Note Collection Mechanic**: Gather scattered musical notes across diverse platforming challenges
• **Enemy Mechanics**: Sharps spawn and hunt you as you collect notes, adding tension to your journey
• **Responsive Controls**: Smooth platforming with double jump, precise movement, and polished physics
• **Atmospheric Soundtrack**: Experience the world evolving from silence to a full symphony

![Silent Serenade World](${silentSerenade2Img})

## How to Play
**Objective**: Restore harmony to the silent world by collecting all musical notes in each level. Complete melodies to progress through different themed worlds.

**Controls**
• Move: Arrow Keys / A & D
• Jump: Space Bar
• Double Jump: Press Space twice
• Fast Fall: Down Arrow while in air
• Pause: Escape

**Gameplay Mechanics**
• **Collect Notes**: Find and collect musical notes scattered throughout each level
• **Avoid Sharps**: Enemy notes (sharps) will spawn and patrol the area. If they catch you, you'll lose your most recently collected note
• **Complete Melodies**: Gather all notes in a level to restore a complete melody
• **Progress**: Each completed melody unlocks a new instrument and transforms the world

**Tips**
• Plan your route carefully before collecting notes
• Sharps spawn when you collect notes, so be strategic about your collection order
• Use the platforming mechanics (double jump, fast fall) to outmaneuver enemies
• Listen to the evolving soundtrack as you collect more notes

## Technical Information
**Built With**
• Unity (2D Game Engine)
• C# for game scripting
• Universal Render Pipeline

**Project Structure**
• **Assets/Scripts**: Game logic and mechanics
  - PlayerMovement.cs: Character controller with advanced platforming
  - CollectibleNotes.cs: Note collection and tracking system
  - SharpeEnemy.cs / Patroller2D.cs: Enemy AI and behavior
  - MusicTrack.cs: Audio and instrument progression
• **Assets/Scenes**: Game levels (LVL0, LVL1, LVL2, LVL3)
• **Assets/Sounds**: Audio assets and music tracks
• **Assets/Prefabs**: Reusable game objects

**Created for McGameJam26**

---

**Restore the melody. Save the world. 🎵**
`,
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current fill-none" strokeWidth="3">
          <circle cx="50" cy="50" r="25" className="fill-pink-900/20" />
          <path d="M60 35 L60 55 M75 40 L75 50" strokeLinecap="round" strokeWidth="2.5" />
          <ellipse cx="60" cy="60" rx="5" ry="7" className="fill-[#FF85C1]" />
          <ellipse cx="75" cy="55" rx="5" ry="7" className="fill-[#FF85C1]" />
          <path d="M30 45 Q35 40 40 45 T50 45" strokeLinecap="round" strokeWidth="2" />
        </svg>
      )
    },
    {
      name: "GPS Lionel Groulx",
      desc: "Indoor GPS navigation system for Collège Lionel-Groulx featuring a custom-built indoor map with real-time student positioning and campus wayfinding.",
      tech: ["C#", "Unity", "GPS"],
      category: 'gamedev' as const,
      image: gpsDemoGif,
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
