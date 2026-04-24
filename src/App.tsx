/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Terminal, Activity, Zap, Cpu } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] crt-overlay p-4 md:p-8 flex flex-col gap-8 items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 blur-[100px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/20 blur-[100px] rounded-full animate-pulse [animation-delay:1s]" />
      </div>

      {/* Header Bar */}
      <header className="w-full max-w-6xl flex justify-between items-center border-b border-neon-cyan/30 pb-4 z-10">
        <div className="flex items-center gap-3">
          <Zap className="text-neon-cyan animate-pulse" />
          <h1 className="text-2xl font-black tracking-[0.2em] text-neon-cyan glitch-hover">
            NEON_SNAKE_PROTOCOL
          </h1>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs text-neon-cyan/60 uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <Activity size={14} /> STATUS: NOMINAL
          </div>
          <div className="flex items-center gap-2">
            <Cpu size={14} /> CORES: ACTIVE
          </div>
          <div className="text-neon-magenta">SYS_TIME: {new Date().toLocaleTimeString()}</div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 z-10">
        
        {/* Left Sidebar - Terminal Feed */}
        <aside className="lg:col-span-3 hidden lg:flex flex-col gap-4">
          <div className="bg-black/40 border border-neon-cyan/20 p-4 h-full flex flex-col gap-2 font-mono text-[10px] text-neon-cyan/40">
            <div className="flex items-center gap-2 border-b border-neon-cyan/10 pb-2 mb-2 text-neon-cyan/60">
              <Terminal size={12} /> SYSTEM_LOG
            </div>
            <p className="">[INFO] Initializing neural link...</p>
            <p className="text-neon-magenta animate-pulse">[WARN] High toxicity in sector 7</p>
            <p className="">[INFO] Audio buffer optimized</p>
            <p className="">[INFO] Snake containment active</p>
            <p className="">[DEBUG] Grid sync complete</p>
            <div className="mt-auto pt-4 border-t border-neon-cyan/10 flex flex-col gap-2">
              <div className="flex justify-between">
                <span>MEM_USAGE</span>
                <span className="text-neon-cyan">44.8GB</span>
              </div>
              <div className="w-full h-1 bg-neon-cyan/10">
                <div className="w-[44%] h-full bg-neon-cyan shadow-[0_0_5px_#00FFFF]" />
              </div>
            </div>
          </div>
        </aside>

        {/* Center - Game Window */}
        <section className="lg:col-span-6 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm border border-neon-cyan/30 p-8 shadow-[0_0_30px_rgba(0,255,255,0.1)] relative">
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-neon-cyan" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-neon-cyan" />
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-neon-cyan" />
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-neon-cyan" />
          
          <SnakeGame width={400} height={400} />
          
          <div className="mt-8 text-center max-w-xs">
            <p className="text-neon-cyan/40 font-mono text-[10px] uppercase leading-relaxed">
              USE ARROW KEYS TO NAVIGATE THE NEURAL PATHWAY. CONSUME DATA PACKETS TO INCREASE SIGNAL STRENGTH.
            </p>
          </div>
        </section>

        {/* Right Sidebar - Music Player */}
        <aside className="lg:col-span-3 flex flex-col items-center lg:items-end justify-start">
           <MusicPlayer />
           
           {/* Visualizer Mock */}
           <div className="w-full mt-8 bg-black/40 border border-neon-magenta/20 p-4 flex flex-col gap-2">
              <span className="text-[10px] font-mono text-neon-magenta/60 mb-2">SIGNAL_SPECTRUM</span>
              <div className="flex items-end gap-1 h-12">
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-neon-magenta/40" 
                    style={{ 
                      height: `${Math.random() * 100}%`,
                    }} 
                  />
                ))}
              </div>
           </div>
        </aside>

      </main>

      {/* Footer Info */}
      <footer className="w-full max-w-6xl flex justify-center items-center py-4 border-t border-neon-cyan/20 opacity-30 z-10">
        <p className="font-mono text-[9px] tracking-[0.5em] text-neon-cyan uppercase">
          DESIGNED_FOR_DYNACORP_LABS_2088 // ALL_RIGHTS_RESERVED
        </p>
      </footer>
    </div>
  );
}

