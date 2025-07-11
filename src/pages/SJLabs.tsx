
import React from 'react';
import Navigation from '@/components/Navigation';

const SJLabs = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-12 pt-32">
        <h1 className="text-4xl font-bold mb-8">SJA Labs</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Innovation and research at SJA Labs.
          </p>
          
          <p>
            This page will contain information about SJA Labs' research initiatives and innovative projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SJLabs;
