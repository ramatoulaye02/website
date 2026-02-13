
import React from 'react';

const Videos: React.FC = () => {
  const videos = [
    { id: '1', title: 'Coding in the Dark: A Vibey Devlog', duration: '12:45', thumbnail: 'https://picsum.photos/seed/v1/600/340' },
    { id: '2', title: 'How to make anything pink in 5 minutes', duration: '08:12', thumbnail: 'https://picsum.photos/seed/v2/600/340' },
    { id: '3', title: 'Retro-Futurism Design Tutorial', duration: '15:20', thumbnail: 'https://picsum.photos/seed/v3/600/340' },
    { id: '4', title: 'My Workspace Tour (Chaos Edition)', duration: '05:30', thumbnail: 'https://picsum.photos/seed/v4/600/340' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="font-bimbo text-5xl md:text-6xl mb-12 border-b-2 border-pink-900/50 pb-4 inline-block">
        videos
      </h2>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {videos.map((video) => (
          <div key={video.id} className="group relative">
            <div className="aspect-video rounded-2xl overflow-hidden border-2 border-pink-900/30 group-hover:border-[#FF85C1] transition-colors relative">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-[#FF85C1] rounded-full flex items-center justify-center shadow-[0_0_20px_#FF85C1]">
                  <svg className="w-8 h-8 text-black fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs text-white font-mono">
                {video.duration}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bimbo text-2xl text-white group-hover:text-[#FF85C1] transition-colors">
                {video.title}
              </h3>
              <p className="font-bimbo-alt text-pink-400 mt-1">youtube.com/pinkteletubbi</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a 
          href="#" 
          className="inline-block px-10 py-4 bg-pink-900/20 border-2 border-dashed border-pink-500 text-pink-300 font-bimbo text-2xl rounded-2xl hover:bg-pink-900/40 transition-all"
        >
          subscribe on youtube
        </a>
      </div>
    </div>
  );
};

export default Videos;
