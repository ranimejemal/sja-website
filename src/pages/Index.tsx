
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import LogoAnimation from '@/components/LogoAnimation';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Hide animation after it completes (6 seconds for premium timing)
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
      <section className="relative min-h-screen flex items-end justify-end overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/ef91f5db-cbc9-47ca-ab12-d4a9d62a49eb.png')`,
          }}
        >
        </div>
        
        {/* Explore Projects Button - Moved to Right Side */}
        <div className="relative z-10 p-8 pb-16 flex justify-end w-full">
          <Link to="/projects">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6"
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
