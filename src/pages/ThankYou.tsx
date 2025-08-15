import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-widest mb-6 uppercase">
          Thank You!
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-10">
          Your message has been successfully sent. We will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-black text-sm font-medium uppercase tracking-wide hover:bg-white/90 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
