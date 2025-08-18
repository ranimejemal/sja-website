import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LogoAnimation from '@/components/LogoAnimation';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setShowAnimation(true);
  };

  if (showAnimation) {
    return <LogoAnimation onComplete={() => setShowAnimation(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onLogoClick={handleLogoClick} />

      {/* Hero Section - Full Page */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover object-center"
            src="/Soft_breeze_rustles_palm_leaves_.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Explore Projects Button - Positioned over video */}
       <div className="absolute bottom-10 right-10 z-10">
  <Link to="/projects">
    <Button
      size="lg"
      className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 shadow-lg"
    >
      Explore projects <ArrowRight className="ml-2" size={20} />
    </Button>
  </Link>
</div>
      </section>
    </div>
  );
};

export default Index;
