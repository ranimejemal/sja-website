
import { useEffect, useState } from 'react';

interface LogoAnimationProps {
  onComplete: () => void;
}

const LogoAnimation = ({ onComplete }: LogoAnimationProps) => {
  const [animationPhase, setAnimationPhase] = useState<'initial' | 'expanding' | 'dots' | 'gathering' | 'logo' | 'exit' | 'complete'>('initial');

  useEffect(() => {
    const timers = [
      // Show initial text for 2 seconds
      setTimeout(() => setAnimationPhase('expanding'), 2000),
      // Expand letter spacing for 0.8 seconds
      setTimeout(() => setAnimationPhase('dots'), 2800),
      // Turn into dots for 1 second
      setTimeout(() => setAnimationPhase('gathering'), 3800),
      // Gather dots for 1.2 seconds
      setTimeout(() => setAnimationPhase('logo'), 5000),
      // Show logo for 1.5 seconds
      setTimeout(() => setAnimationPhase('exit'), 6500),
      // Exit animation and complete
      setTimeout(() => {
        setAnimationPhase('complete');
        onComplete();
      }, 7000),
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
            : animationPhase === 'dots'
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

      {/* Dots Animation Phase */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
          animationPhase === 'dots' || animationPhase === 'gathering'
            ? 'opacity-100' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Create multiple dots that scatter and then gather */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-white rounded-full transition-all duration-1200 ease-in-out ${
              animationPhase === 'dots' 
                ? 'animate-pulse' 
                : animationPhase === 'gathering'
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              left: animationPhase === 'dots' 
                ? `${20 + Math.random() * 60}%` 
                : animationPhase === 'gathering'
                ? '50%'
                : '50%',
              top: animationPhase === 'dots' 
                ? `${20 + Math.random() * 60}%` 
                : animationPhase === 'gathering'
                ? '50%'
                : '50%',
              transform: animationPhase === 'gathering' ? 'translate(-50%, -50%)' : 'none',
              transitionDelay: `${i * 50}ms`,
              animationDelay: `${i * 100}ms`,
            }}
          />
        ))}
      </div>

      {/* Logo Phase - White Logo */}
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
          src="/lovable-uploads/8d1025cf-fb9f-4373-8143-ad88d8362604.png" 
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

        /* Custom dot gathering animation */
        @keyframes gatherDots {
          0% {
            transform: translate(var(--random-x), var(--random-y)) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoAnimation;
