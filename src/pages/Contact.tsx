
import React from 'react';
import Navigation from '@/components/Navigation';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-12 pt-32">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Get in touch with us.
          </p>
          
          <p>
            This page will contain contact information and a contact form.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
