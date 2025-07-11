
import React from 'react';
import Navigation from '@/components/Navigation';

const SyrineJemal = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Content - Added top padding to account for fixed nav */}
      <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden bg-muted">
              <img 
                src="/lovable-uploads/8d1025cf-fb9f-4373-8143-ad88d8362604.png" 
                alt="Syrine Jemal" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Syrine Jemal
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground">
                Architect 
                specializing 
                luxury,
                contemporary, graduated from the National
                School of Architecture and Urbanism of Tunis,
                Tunisia and futuristic design using AI. With
                experience in France, Switzerland, Tunisia,
                and the USA, I focus on innovation,
                sustainability, and cutting-edge technologies
                to 
                create forward-thinking architectural
                solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyrineJemal;
