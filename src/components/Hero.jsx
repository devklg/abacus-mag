import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            High Tech Meets High Touch: Join the Future of Network Marketing!
          </h1>
          
          <p className="text-xl mb-8">
            Join Kevin Gardner's Team - 40+ Years of Network Marketing Success
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 rounded-lg p-4 mb-8">
            <p className="text-sm uppercase tracking-wide">Next Cutoff Date</p>
            <p className="text-2xl font-bold">April 20, 2025</p>
          </div>

          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Lock in Your Free Position
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
