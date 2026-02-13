
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const BubbleJumpGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  // Constants
  const CANVAS_HEIGHT = 180;
  const BUBBLE_RADIUS = 16;
  const GRAVITY = 0.5; 
  const JUMP_STRENGTH = -10;
  const GROUND_Y = CANVAS_HEIGHT - 32;

  // State refs for performance
  const gameState = useRef({
    bubbleY: GROUND_Y - BUBBLE_RADIUS,
    bubbleVelocityY: 0,
    jumpCount: 0,
    isJumping: false,
    obstacles: [] as { x: number; width: number; height: number; type: number; animFrame: number }[],
    particles: [] as { x: number; y: number; vx: number; vy: number; life: number; color: string }[],
    backgroundLayers: [
      { x: 0, speed: 0.2, color: '#1a000d', peaks: [] as number[] }, 
      { x: 0, speed: 0.5, color: '#33001a', peaks: [] as number[] }, 
      { x: 0, speed: 1.0, color: '#660033', peaks: [] as number[] }, 
      { x: 0, speed: 1.5, color: '#99004d', peaks: [] as number[] }, 
    ],
    clouds: [] as { x: number; y: number; speed: number; w: number }[],
    frame: 0,
    speed: 3.5,
    squishScale: 1,
    squishTarget: 1,
  });

  // Initialize peaks for mountains
  useEffect(() => {
    gameState.current.backgroundLayers.forEach(layer => {
      layer.peaks = [];
      for (let i = 0; i < 25; i++) {
        layer.peaks.push(20 + Math.random() * 60);
      }
    });
    gameState.current.clouds = [];
    for (let i = 0; i < 6; i++) {
      gameState.current.clouds.push({
        x: Math.random() * window.innerWidth,
        y: 20 + Math.random() * 50,
        speed: 0.1 + Math.random() * 0.2,
        w: 40 + Math.random() * 50
      });
    }
  }, []);

  const createParticles = (x: number, y: number, color: string, count: number = 5) => {
    for (let i = 0; i < count; i++) {
      gameState.current.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 6,
        vy: (Math.random() - 0.5) * 6,
        life: 1.0,
        color,
      });
    }
  };

  const resetGame = useCallback(() => {
    gameState.current = {
      ...gameState.current,
      bubbleY: GROUND_Y - BUBBLE_RADIUS,
      bubbleVelocityY: 0,
      jumpCount: 0,
      isJumping: false,
      obstacles: [],
      particles: [],
      frame: 0,
      speed: 3.5,
      squishScale: 1,
      squishTarget: 1,
    };
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
  }, [GROUND_Y, BUBBLE_RADIUS]);

  const handleJump = useCallback(() => {
    if (gameOver) {
      resetGame();
      return;
    }
    if (!gameStarted) {
      setGameStarted(true);
      return;
    }
    
    if (gameState.current.jumpCount < 2) {
      gameState.current.bubbleVelocityY = JUMP_STRENGTH;
      gameState.current.jumpCount++;
      gameState.current.isJumping = true;
      gameState.current.squishScale = 0.5;
      createParticles(150, gameState.current.bubbleY + BUBBLE_RADIUS, '#FFB3D9');
    }
  }, [gameOver, gameStarted, resetGame, JUMP_STRENGTH]);

  useEffect(() => {
    const handleResize = () => setCanvasWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        handleJump();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleJump]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const drawPixelBubble = (cx: number, cy: number, r: number, scale: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1 / scale, scale);
      
      const pixel = 4;
      ctx.fillStyle = '#FF85C1';
      for (let x = -r; x <= r; x += pixel) {
        for (let y = -r; y <= r; y += pixel) {
          if (x * x + y * y <= r * r) {
            ctx.fillRect(x, y, pixel, pixel);
          }
        }
      }
      ctx.fillStyle = '#FFF';
      ctx.fillRect(-r/2, -r/2, pixel * 2, pixel);
      ctx.fillStyle = '#000';
      ctx.fillRect(-6, -4, pixel, pixel);
      ctx.fillRect(6, -4, pixel, pixel);
      ctx.fillRect(-2, 2, pixel, pixel);
      ctx.restore();
    };

    const update = () => {
      const state = gameState.current;
      state.frame++;

      // Backgrounds always animate for a "live" feel
      state.backgroundLayers.forEach(l => l.x = (l.x - l.speed) % 400);
      state.clouds.forEach(c => c.x = (c.x - c.speed) % (canvas.width + 100));

      if (gameStarted && !gameOver) {
        state.bubbleVelocityY += GRAVITY;
        state.bubbleY += state.bubbleVelocityY;
        state.squishScale += (state.squishTarget - state.squishScale) * 0.2;

        if (state.bubbleY > GROUND_Y - BUBBLE_RADIUS) {
          if (state.isJumping) {
            state.squishScale = 1.5;
            createParticles(150, GROUND_Y, '#FF85C1', 10);
          }
          state.bubbleY = GROUND_Y - BUBBLE_RADIUS;
          state.bubbleVelocityY = 0;
          state.isJumping = false;
          state.jumpCount = 0;
          state.squishTarget = 1;
        }

        if (state.frame % Math.max(50, Math.floor(140 - state.speed * 6)) === 0) {
          const type = Math.random() > 0.4 ? 0 : 1; 
          state.obstacles.push({
            x: canvas.width,
            width: 32,
            height: type === 0 ? 36 : 24,
            type,
            animFrame: 0
          });
        }

        state.obstacles = state.obstacles.filter(obs => {
          obs.x -= state.speed;
          obs.animFrame++;
          
          const bubbleX = 150;
          const hitbox = 14;
          const obsY = obs.type === 0 ? GROUND_Y - obs.height : GROUND_Y - 75;

          if (
            bubbleX + hitbox > obs.x &&
            bubbleX - hitbox < obs.x + obs.width &&
            state.bubbleY + hitbox > obsY &&
            state.bubbleY - hitbox < obsY + (obs.type === 0 ? obs.height : 12)
          ) {
            setGameOver(true);
          }
          return obs.x + obs.width > 0;
        });

        state.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.02;
        });
        state.particles = state.particles.filter(p => p.life > 0);

        state.speed += 0.0003; 
        setScore(Math.floor(state.frame / 10));
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Background is now semi-transparent to show Game of Life through it
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#1a000d';
      state.clouds.forEach(c => {
        const x = c.x < -100 ? c.x + canvas.width + 100 : c.x;
        ctx.fillRect(x, c.y, c.w, 6);
        ctx.fillRect(x + 10, c.y - 6, c.w - 20, 6);
      });

      state.backgroundLayers.forEach((layer) => {
        ctx.fillStyle = layer.color;
        for (let i = -1; i < canvas.width / 40 + 2; i++) {
          const x = (layer.x + i * 40) % (canvas.width + 80) - 40;
          const peakIdx = Math.abs(Math.floor(i)) % layer.peaks.length;
          const h = layer.peaks[peakIdx];
          ctx.beginPath();
          ctx.moveTo(x, GROUND_Y);
          ctx.lineTo(x + 40, GROUND_Y - h);
          ctx.lineTo(x + 80, GROUND_Y);
          ctx.fill();
        }
      });

      const tileSize = 32;
      for (let i = 0; i < canvas.width / tileSize + 1; i++) {
        const scrollOffset = gameStarted && !gameOver ? (state.frame * state.speed) : (state.frame * 0.5);
        const tx = (i * tileSize - scrollOffset % tileSize);
        ctx.fillStyle = '#FF1493';
        ctx.fillRect(tx, GROUND_Y, tileSize, 2);
        ctx.fillStyle = '#0a0005';
        ctx.fillRect(tx, GROUND_Y + 2, tileSize, tileSize);
        ctx.strokeStyle = '#1a000d';
        ctx.strokeRect(tx, GROUND_Y + 2, tileSize, tileSize);
      }

      state.particles.forEach(p => {
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, 4, 4);
      });
      ctx.globalAlpha = 1;

      state.obstacles.forEach(obs => {
        const y = obs.type === 0 ? GROUND_Y - obs.height : GROUND_Y - 75;
        if (obs.type === 0) {
          ctx.fillStyle = '#4d0026'; 
          ctx.fillRect(obs.x, y, obs.width, obs.height);
          ctx.strokeStyle = '#FFF';
          ctx.strokeRect(obs.x, y, obs.width, obs.height);
        } else {
          const flap = Math.sin(obs.animFrame * 0.2) * 10;
          ctx.fillStyle = '#FFF0F5'; 
          ctx.fillRect(obs.x, y + flap, obs.width, 12);
          ctx.strokeStyle = '#4d0026';
          ctx.strokeRect(obs.x, y + flap, obs.width, 12);
        }
      });

      if (gameStarted) {
        drawPixelBubble(150, state.bubbleY, BUBBLE_RADIUS, state.squishScale);
      }

      animationId = requestAnimationFrame(update);
    };

    animationId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationId);
  }, [gameStarted, gameOver, GROUND_Y, BUBBLE_RADIUS]);

  return (
    <div ref={containerRef} className="mt-auto w-full flex flex-col items-center relative group">
      {/* HUD */}
      {gameStarted && (
        <div className="absolute top-4 left-4 z-50 pointer-events-none flex gap-4 font-bimbo text-2xl">
          {gameOver ? (
            <span className="bg-black/95 px-5 py-2 text-white border-2 border-white">
              game over!
            </span>
          ) : (
            <div className="flex flex-col gap-0 leading-none bg-black/40 p-2 border-l-4 border-pink-500">
              <span className="text-pink-500 text-xs uppercase font-bold tracking-widest">score</span>
              <span className="text-white text-3xl">{score}</span>
            </div>
          )}
        </div>
      )}
      
      <div 
        className="relative w-full overflow-hidden cursor-pointer select-none" 
        onClick={handleJump}
        style={{ height: CANVAS_HEIGHT }}
      >
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={CANVAS_HEIGHT}
          className="w-full block pixelated"
        />
        
        {!gameStarted && !gameOver && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10 z-30 transition-all hover:bg-black/30">
            <span className="font-bimbo text-xl md:text-2xl text-pink-400/50 tracking-wide">
              press space or click to play mini game
            </span>
          </div>
        )}
        
        {gameOver && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-40 transition-all">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-full px-6 text-center">
              <div className="drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                <span className="font-bimbo text-8xl md:text-9xl text-white leading-none tracking-tighter block mb-2">
                  BUSTED!
                </span>
                <p className="font-bimbo text-4xl text-pink-500 uppercase tracking-widest">score: {score}</p>
              </div>

              <div className="shrink-0">
                <button 
                  onClick={(e) => { e.stopPropagation(); resetGame(); }}
                  className="px-14 py-5 bg-[#FF85C1] text-black font-bimbo text-4xl rounded-none border-0 outline-none hover:bg-white hover:text-black transition-all transform hover:scale-110 active:scale-95 shadow-[10px_10px_0px_white]"
                >
                  respawn
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'hi, im pinkteletubbi';
  const navigate = useNavigate();

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, []);

  const socials = [
    { name: 'Instagram', url: 'https://instagram.com/pinkteletubbi', icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ) },
    { name: 'GitHub', url: 'https://github.com/pinkteletubbi', icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ) },
    { name: 'YouTube', url: 'https://youtube.com/c/pinkteletubbi', icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ) },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/pinkteletubbi', icon: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
      </svg>
    ) },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center relative overflow-hidden">
      <div className="flex flex-col items-center pt-12 md:pt-20 px-4 w-full max-w-6xl relative z-10 flex-grow text-center">
        <div className="mb-8 relative z-10 animate-logo-float">
          <div className="logo-shadow">
            <img 
              src="https://raw.githubusercontent.com/StackBlitz/stackblitz-images/main/pinkteletubbi-logo.png" 
              alt="Pinkteletubbi Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain pixelated"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/pixel-art/svg?seed=pink&backgroundColor=ff85c1';
              }}
            />
          </div>
        </div>

        <div className="relative z-10 w-full">
          <div className="absolute -inset-10 bg-[#FF85C1]/10 blur-[100px] rounded-full"></div>
          <h1 className="font-bimbo text-5xl md:text-8xl lg:text-9xl leading-none typing-cursor min-h-[1.2em]">
            {displayText}
          </h1>
        </div>

        <div className="mt-8 flex justify-center gap-6 md:gap-10 z-10">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF85C1] hover:text-white hover:scale-125 transition-all duration-300 transform drop-shadow-[0_0_8px_rgba(255,133,193,0.4)] hover:drop-shadow-[0_0_15px_rgba(255,133,193,0.8)]"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 z-10 mb-12">
          <button 
            onClick={() => navigate('/projects')}
            className="px-10 py-4 bg-[#FF85C1] text-black font-bimbo text-3xl rounded-none hover:scale-105 transition-transform shadow-[6px_6px_0px_#850044]"
          >
            see my stuff
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="px-10 py-4 border-2 border-[#FF85C1] text-[#FF85C1] font-bimbo text-3xl rounded-none hover:bg-[#FF85C1]/10 transition-colors"
          >
            who am i?
          </button>
        </div>
      </div>

      <BubbleJumpGame />

      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-pink-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-900/10 blur-[120px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default Home;
