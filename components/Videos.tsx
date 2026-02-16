
import React from 'react';
import underConstructionImg from '../media/under-construction.png';

const Videos: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="font-bimbo text-5xl md:text-6xl mb-12 border-b-2 border-pink-900/50 pb-4 inline-block">
        videos
      </h2>
      
      <div className="min-h-96 flex flex-col items-center justify-center text-center p-12 bg-pink-900/10 rounded-3xl border-2 border-dashed border-[#FF85C1]/50">
        <img src={underConstructionImg} alt="Under Construction" className="w-96 h-96 mb-6 object-contain" />
        <p className="font-bimbo-alt text-xl text-pink-300">coming soon ...</p>
      </div>
    </div>
  );
};

export default Videos;
