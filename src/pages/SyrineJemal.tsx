import React from 'react';
import Navigation from '@/components/Navigation';

const SyrineJemal = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Content - Added top padding to account for fixed nav */}
      <div className="max-w-7xl mx-auto px-6 py-12 pt-32">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
    {/* Image */}
    <div className="flex justify-center lg:justify-start lg:mt-20">
      <div className="w-96 h-96 rounded-lg overflow-hidden bg-muted shadow-md">
        <img 
          src="/public/8d1025cf-fb9f-4373-8143-ad88d8362604.png" 
          alt="Syrine Jemal"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Text */}
    <div className="space-y-8 text-left">
      <h1 className="text-4xl lg:text-5xl font-light tracking-[0.1em]">
        Syrine Jemal
      </h1>
      
      <p className="text-lg leading-relaxed font-light max-w-lg mt-12">
        Architect specializing in luxury and contemporary design. Graduated from the National School of Architecture and Urbanism of Tunis, Tunisia. Passionate about futuristic design using AI. With experience in France, Switzerland, Tunisia, and the USA, I focus on innovation, sustainability, and cutting-edge technologies to create forward-thinking architectural solutions.
      </p>
    </div>
  </div>
</div>


      </div>

  );
};

export default SyrineJemal;
