import { useRef, useState, useEffect } from "react";

interface LogoAnimationProps {
  onComplete: () => void;
}

let hasAnimationPlayed = false; // persistent flag to prevent replay

const LogoAnimation = ({ onComplete }: LogoAnimationProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (hasAnimationPlayed) {
      onComplete(); // already played → immediately call complete
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    video.loop = false;
    hasAnimationPlayed = true; // mark as played

    const handleEnded = () => {
      setFadeOut(true);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 1000); // fade duration
    };

    video.addEventListener("ended", handleEnded);

    return () => video.removeEventListener("ended", handleEnded);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/0730(1).mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LogoAnimation;
