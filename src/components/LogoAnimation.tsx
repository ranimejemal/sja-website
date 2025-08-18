import { useEffect, useRef, useState } from "react";

interface LogoAnimationProps {
  onComplete: () => void;
}

const LogoAnimation = ({ onComplete }: LogoAnimationProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [startFade, setStartFade] = useState(false);
  const [finished, setFinished] = useState(false);
  const hasPlayedRef = useRef(false); 

  useEffect(() => {
    if (hasPlayedRef.current) return; 
    hasPlayedRef.current = true;

    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    video.currentTime = 0;
    video.play();

    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 1 && !startFade) {
        setStartFade(true);
      }
    };

    const handleEnded = () => {
      setFinished(true);
      setTimeout(() => {
        onComplete();
      }, 200);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, [onComplete]);

  if (finished) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">
      <video
        ref={videoRef}
        src="/0730(1).mp4"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${
          startFade ? "opacity-0" : "opacity-100"
        }`}
        muted
        playsInline
      />

      {startFade && (
        <div className="absolute inset-0 animate-fadeToBlack pointer-events-none" />
      )}

      <style>{`
        @keyframes fadeToBlack {
          0% { background-color: rgba(0, 0, 0, 0); }
          100% { background-color: rgba(0, 0, 0, 0.9); }
        }
        .animate-fadeToBlack {
          animation: fadeToBlack 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LogoAnimation;
