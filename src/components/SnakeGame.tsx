import { useRef, useEffect } from 'react';
import { useSnakeGame } from '../hooks/useSnakeGame';
import { motion, AnimatePresence } from 'motion/react';

interface SnakeGameProps {
  width?: number;
  height?: number;
}

export const SnakeGame = ({ width = 400, height = 400 }: SnakeGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { snake, food, score, isGameOver, isPaused, setIsPaused, resetGame, GRID_SIZE } = 
    useSnakeGame(width, height);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, width, height);

    // Draw grid lines (subtle)
    ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y <= height; y += GRID_SIZE) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? '#00FFFF' : '#FF00FF';
      ctx.shadowBlur = 10;
      ctx.shadowColor = index === 0 ? '#00FFFF' : '#FF00FF';
      ctx.fillRect(segment.x * GRID_SIZE + 2, segment.y * GRID_SIZE + 2, GRID_SIZE - 4, GRID_SIZE - 4);
      ctx.shadowBlur = 0;
    });

    // Draw food
    ctx.fillStyle = '#FFFF00';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#FFFF00';
    ctx.beginPath();
    ctx.arc(
      food.x * GRID_SIZE + GRID_SIZE / 2,
      food.y * GRID_SIZE + GRID_SIZE / 2,
      GRID_SIZE / 3,
      0,
      Math.PI * 2
    );
    ctx.fill();
    ctx.shadowBlur = 0;

  }, [snake, food, width, height, GRID_SIZE]);

  return (
    <div className="relative group border-2 border-neon-cyan shadow-[0_0_20px_rgba(0,255,255,0.3)] bg-black overflow-hidden" style={{ width, height }}>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="block"
      />
      
      {/* HUD */}
      <div className="absolute top-4 left-4 font-mono text-neon-cyan text-xl z-20 mix-blend-difference">
        SCORE: {score.toString().padStart(6, '0')}
      </div>

      <AnimatePresence>
        {(isGameOver || isPaused) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-30"
          >
            {isGameOver ? (
              <div className="text-center">
                <h2 className="text-4xl font-bold text-neon-magenta mb-8 glitch-hover">NEURAL_LINK_SEVERED</h2>
                <button
                  onClick={resetGame}
                  className="px-8 py-3 border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all font-bold tracking-widest"
                >
                  REBOOT_SYSTEM
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-4xl font-bold text-neon-cyan mb-8">SYSTEM_STALED</h2>
                <button
                  onClick={() => setIsPaused(false)}
                  className="px-8 py-3 border-2 border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black transition-all font-bold tracking-widest"
                >
                  RESTORE_LINK
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
