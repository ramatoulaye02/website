
import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="font-bimbo text-5xl md:text-6xl mb-12 border-b-2 border-pink-900/50 pb-4 inline-block">
        about me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="aspect-square bg-pink-900/20 border-2 border-[#FF85C1] rounded-3xl overflow-hidden relative group">
            <img 
              src="https://picsum.photos/seed/pinkteletubbi/800/800" 
              alt="Pinkteletubbi Profile" 
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-[#FF85C1]/20 mix-blend-color"></div>
          </div>
          <div className="p-6 bg-pink-900/10 rounded-2xl border border-pink-900/30">
            <h3 className="font-bimbo text-2xl text-white mb-2">stats</h3>
            <ul className="space-y-2 font-bimbo text-xl">
              <li><span className="text-pink-400">Class:</span> Creative Enthusiast</li>
              <li><span className="text-pink-400">Level:</span> 24</li>
              <li><span className="text-pink-400">Mood:</span> Bubblegum & Black</li>
              <li><span className="text-pink-400">Main:</span> TypeScript / React</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-8 font-bimbo-alt text-xl leading-relaxed text-pink-100">
          <p>
            hello! i'm <span className="text-[#FF85C1] font-bold">pinkteletubbi</span>. i'm a creator, coder, and professional overthinker based in the digital void.
          </p>
          <p>
            my world exists at the intersection of dark aesthetics and hyper-pink vibrancy. i believe that websites shouldn't just be functional—they should be an experience.
          </p>
          <p>
            i spend most of my time building tools that nobody asked for, writing blogs about niche tech drama, and occasionally editing videos that i probably won't post.
          </p>
          <div className="pt-4">
            <h3 className="text-2xl font-bimbo text-[#FF85C1] mb-4">what i'm into right now:</h3>
            <div className="flex flex-wrap gap-3">
              {['Web Design', 'Generative AI', 'Vaporwave', 'Lo-fi Coding', 'Graphic Design'].map(tag => (
                <span key={tag} className="px-4 py-1 rounded-full bg-pink-900/30 border border-pink-500/30 text-pink-300 text-sm">
                  #{tag.toLowerCase().replace(' ', '')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
