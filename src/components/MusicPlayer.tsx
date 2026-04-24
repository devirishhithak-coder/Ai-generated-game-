import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';

interface Track {
  id: number;
  title: string;
  artist: string;
  duration: string;
  color: string;
}

const DUMMY_TRACKS: Track[] = [
  { id: 1, title: 'CYBER_DUSK_v4', artist: 'NEURAL_PHASE', duration: '3:45', color: 'from-cyan-900 to-black' },
  { id: 2, title: 'SYNTH_VOID_NULL', artist: 'VOID_WALKER', duration: '4:20', color: 'from-magenta-900 to-black' },
  { id: 3, title: 'DATA_HAZE_STRE', artist: 'ROOT_ACCESS', duration: '2:55', color: 'from-yellow-900 to-black' },
];

export const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30); // Placeholder progress %

  const currentTrack = DUMMY_TRACKS[currentTrackIndex];

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % DUMMY_TRACKS.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + DUMMY_TRACKS.length) % DUMMY_TRACKS.length);
  };

  return (
    <div className="w-full max-w-md bg-black border-2 border-neon-magenta p-6 shadow-[0_0_15px_rgba(255,0,255,0.2)]">
      <div className="flex flex-col gap-6">
        {/* Album Art Placeholder */}
        <div className={`aspect-square w-full bg-gradient-to-br ${currentTrack.color} border border-neon-magenta/30 relative overflow-hidden group`}>
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="absolute inset-x-0 bottom-0 h-1 bg-neon-magenta animate-pulse" />
          <div className="flex items-center justify-center h-full">
             <div className="w-32 h-32 border-4 border-neon-magenta rounded-full animate-spin [animation-duration:10s] opacity-50 f-0" />
          </div>
        </div>

        {/* Track Info */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-neon-magenta tracking-tighter truncate glitch-hover h-8">
            {currentTrack.title}
          </h3>
          <p className="text-neon-cyan/60 font-mono text-sm uppercase mt-1">
            {currentTrack.artist}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="h-1 w-full bg-neon-cyan/20 relative">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-neon-cyan shadow-[0_0_10px_#00FFFF]" 
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-mono text-neon-cyan/50">
            <span>01:12</span>
            <span>{currentTrack.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between px-4">
          <button onClick={handlePrev} className="text-neon-cyan hover:text-white transition-colors">
            <SkipBack size={24} />
          </button>
          
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full border-2 border-neon-cyan flex items-center justify-center text-neon-cyan hover:bg-neon-cyan hover:text-black transition-all shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_#00FFFF]"
          >
            {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} className="ml-1" fill="currentColor" />}
          </button>

          <button onClick={handleNext} className="text-neon-cyan hover:text-white transition-colors">
            <SkipForward size={24} />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 px-8 opacity-60">
          <Volume2 size={16} className="text-neon-cyan" />
          <div className="h-1 flex-1 bg-neon-cyan/20">
             <div className="h-full w-2/3 bg-neon-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
};
