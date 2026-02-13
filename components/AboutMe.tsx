
import React, { useMemo, useState } from 'react';

const AboutMe: React.FC = () => {
  const photoSources = useMemo(() => {
    const modules = import.meta.glob('../media/about-*.{png,jpg,jpeg,webp}', {
      eager: true,
      import: 'default',
    }) as Record<string, string>;

    return Object.entries(modules)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, src]) => src);
  }, []);

  const [activePhoto, setActivePhoto] = useState<string>(() => photoSources[0] ?? '');
  const [activeFactIndex, setActiveFactIndex] = useState<number>(0);
  const [showExtraPhotos, setShowExtraPhotos] = useState<boolean>(false);

  const funFacts: { label: string; photoIndex: number }[] = [
    { label: 'i am 22 years old', photoIndex: 0 },
    { label: 'i am a twin', photoIndex: 1 },
    { label: 'i have coded on average 6 hours a day everyday since the age of 13', photoIndex: 2 },
    { label: 'i love animals', photoIndex: 3 },
    { label: 'i love anime', photoIndex: 4 },
    { label: '...did i mention i love animals?', photoIndex: 5 },
  ];

  const selectFunFact = (factIndex: number) => {
    setActiveFactIndex(factIndex);
    setShowExtraPhotos(true);

    if (photoSources.length === 0) return;
    const photoIndex = funFacts[factIndex]?.photoIndex ?? factIndex;
    const nextPhoto = photoSources[photoIndex % photoSources.length] ?? '';
    if (nextPhoto) setActivePhoto(nextPhoto);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <h2 className="font-bimbo text-5xl md:text-6xl mb-12 border-b-2 border-pink-900/50 pb-4 inline-block">
        about me
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="aspect-[4/5] bg-pink-900/20 border-2 border-[#FF85C1] rounded-3xl overflow-hidden relative group">
            {activePhoto ? (
              <img
                src={activePhoto}
                alt="Pinkteletubbi Profile"
                className="w-full h-full object-cover transition-all duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-bimbo text-2xl text-pink-300">
                add photos to /media as about-*.png
              </div>
            )}
            <div className="absolute inset-0 bg-[#FF85C1]/20 mix-blend-color"></div>
          </div>

          {photoSources.length > 1 && (
            <div
              aria-hidden={!showExtraPhotos}
              className={
                `transition-all duration-500 ease-out overflow-hidden ${
                  showExtraPhotos
                    ? 'max-h-[520px] opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
                }`
              }
            >
              <div className="grid grid-cols-4 gap-3 pt-2">
                {photoSources.map((src, idx) => (
                  <button
                    key={`${src}-${idx}`}
                    type="button"
                    onClick={() => setActivePhoto(src)}
                    aria-label={`select photo ${idx + 1}`}
                    className={
                      `aspect-square rounded-2xl overflow-hidden border-2 transition-colors ${
                        activePhoto === src ? 'border-[#FF85C1]' : 'border-pink-900/30 hover:border-[#FF85C1]/50'
                      }`
                    }
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="p-6 bg-pink-900/10 rounded-2xl border border-pink-900/30">
            <h3 className="font-bimbo text-2xl text-white mb-2">stats</h3>
            <ul className="space-y-2 font-bimbo text-xl">
              <li><span className="text-pink-400">Class:</span> Creative Enthusiast</li>
              <li><span className="text-pink-400">Level:</span> 22</li>
              <li><span className="text-pink-400">GPA:</span> 3.81</li>
              <li><span className="text-pink-400">Mood:</span> Ebullient</li>
              <li><span className="text-pink-400">Main:</span> C# / C++ / Python / Unity3D</li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-8 font-bimbo-alt text-xl leading-relaxed text-pink-100">
          <p>
            hello! i'm <span className="text-[#FF85C1] font-bold">pinkteletubbi</span> — a computer engineering student obsessed with <span className="text-[#FF85C1] font-bold">ai</span>, <span className="text-[#FF85C1] font-bold">game dev</span>, and creative tech.
          </p>
          <p>
            i've been coding since i was 13, and that curiosity turned into building full projects, experimenting with gameplay systems, and learning how intelligence + interactivity shape digital worlds.
          </p>
          <p>
            outside of tech, i train in martial arts — it keeps me disciplined, resilient, and a little too competitive. i'm deeply creative, and i love mixing technical skill with imagination to turn big ideas into real things.
          </p>
          <div className="pt-2">
            <h3 className="text-2xl font-bimbo text-[#FF85C1] mb-4">fun facts about me:</h3>
            <div className="p-6 bg-pink-900/10 rounded-2xl border border-pink-900/30">
              <ul className="space-y-3 font-bimbo text-xl">
                {funFacts.map((fact, idx) => (
                  <li key={`${fact.label}-${idx}`}>
                    <button
                      type="button"
                      onClick={() => selectFunFact(idx)}
                      disabled={photoSources.length === 0}
                      aria-label={`show photo for fun fact ${idx + 1}`}
                      className={
                        `w-full text-left px-4 py-2 rounded-xl border transition-all ${
                          activeFactIndex === idx
                            ? 'border-[#FF85C1]/60 bg-[#FF85C1]/10 text-white shadow-[0_0_20px_#FF85C1]'
                            : 'border-pink-900/30 text-pink-100 hover:border-[#FF85C1]/40 hover:bg-pink-900/10'
                        } ${photoSources.length === 0 ? 'opacity-60 cursor-not-allowed' : ''}`
                      }
                    >
                      <span className="text-pink-400 mr-2">•</span>
                      {fact.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <h3 className="text-2xl font-bimbo text-[#FF85C1] mb-4">what i'm into right now:</h3>
            <div className="flex flex-wrap gap-3">
              {['Web Design', 'Generative AI', 'Machine Learning', 'Game Development', 'Robotics'].map(tag => (
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
