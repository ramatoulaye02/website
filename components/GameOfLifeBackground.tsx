
import React, { useEffect, useRef } from 'react';

const GameOfLifeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const cellSize = 10;
    let cols = Math.floor(width / cellSize);
    let rows = Math.floor(height / cellSize);

    function createGrid() {
      return Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => Math.random() > 0.88 ? 1 : 0)
      );
    }

    let grid = createGrid();

    function draw() {
      if (!ctx) return;
      
      // Clear with trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      const next = grid.map(arr => [...arr]);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const state = grid[i][j];
          const neighbors = countNeighbors(grid, i, j);

          if (state === 0 && neighbors === 3) {
            next[i][j] = 1;
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            next[i][j] = 0;
          }

          if (state === 1) {
            ctx.fillStyle = '#7e09432d'; // Subtle bubblegum pink
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#be6c95';
            ctx.fillRect(i * cellSize + 1, j * cellSize + 1, cellSize - 2, cellSize - 2);
            ctx.shadowBlur = 0;
          }
        }
      }

      grid = next;

      // Inject life if it gets too quiet
      if (Math.random() > 0.96) {
        const rx = Math.floor(Math.random() * cols);
        const ry = Math.floor(Math.random() * rows);
        grid[rx][ry] = 1;
      }
    }

    function countNeighbors(g: number[][], x: number, y: number) {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const col = (x + i + cols) % cols;
          const row = (y + j + rows) % rows;
          sum += g[col][row];
        }
      }
      sum -= g[x][y];
      return sum;
    }

    let frameCount = 0;
    let animationId: number;

    const animate = () => {
      if (frameCount % 10 === 0) {
        draw();
      }
      frameCount++;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.floor(width / cellSize);
      rows = Math.floor(height / cellSize);
      grid = createGrid();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
};

export default GameOfLifeBackground;
