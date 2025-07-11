
import { useEffect, useState } from 'react';

interface LogoAnimationProps {
  onComplete: () => void;
}

const LogoAnimation = ({ onComplete }: LogoAnimationProps) => {
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'expanding' | 'logo' | 'exit' | 'complete'>('initial');

  useEffect(() => {
    const timers = [
      // Show initial text for 2 seconds
      setTimeout(() => setAnimationPhase('expanding'), 2000),
      // Expand letter spacing for 0.8 seconds
      setTimeout(() => setAnimationPhase('logo'), 2800),
      // Show logo for 2 seconds
      setTimeout(() => setAnimationPhase('exit'), 4800),
      // Exit animation and complete
      setTimeout(() => {
        setAnimationPhase('complete');
        onComplete();
      }, 5300),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Initial and Expanding Text Phase */}
      <div 
        className={`absolute transition-all duration-1000 ease-out ${
          animationPhase === 'initial' || animationPhase === 'expanding'
            ? 'opacity-100 scale-100' 
            : animationPhase === 'logo'
            ? 'opacity-0 scale-95'
            : 'opacity-0 scale-90 pointer-events-none'
        }`}
        style={{
          letterSpacing: animationPhase === 'expanding' ? '0.4em' : '0.25em',
          transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center leading-tight"
            style={{
              fontFamily: '"Orbitron", "Exo 2", "Rajdhani", monospace',
              fontWeight: '700',
              textShadow: '0 0 20px rgba(255,255,255,0.3)',
            }}>
          <div className="block">Syrine Jemal</div>
          <div className="block mt-1 md:mt-2 text-xl md:text-3xl lg:text-4xl tracking-wider font-normal">
            Architecture
          </div>
        </h1>
      </div>

      {/* Logo Phase - New Logo */}
      <div 
        className={`absolute transition-all duration-1200 ease-out ${
          animationPhase === 'logo' || animationPhase === 'exit'
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-50'
        }`}
        style={{
          transform: animationPhase === 'exit' ? 'translateY(-20px) scale(0.9)' : 'translateY(0) scale(1)',
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <img 
          src="/lovable-uploads/a25e2eb3-e7cc-448a-8262-02659d984c2e.png" 
          alt="SJA Logo" 
          className="h-32 md:h-48 lg:h-56 w-auto"
        />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap');
        
        /* Ensure smooth font rendering */
        .font-bold {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
      `}</style>
    </div>
  );
};

export default LogoAnimation;
