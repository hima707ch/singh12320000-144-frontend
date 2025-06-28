import React, { useEffect, useState } from 'react';
import images from '../assets/images';

export default function Hero() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="Hero_1" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and SVG shapes */}
      <div id="Hero_2" className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <svg id="Hero_3" className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" fill="none">
          <circle cx="200" cy="200" r="100" fill="url(#gradient1)" />
          <circle cx="800" cy="300" r="150" fill="url(#gradient2)" />
          <polygon points="600,100 700,300 500,300" fill="url(#gradient3)" />
          <rect x="100" y="600" width="200" height="200" rx="20" fill="url(#gradient4)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div id="Hero_4" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="Hero_5" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div id="Hero_6" className="text-center lg:text-left">
            <h1 id="Hero_7" className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect{' '}
              <span id="Hero_8" className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Dream
              </span>{' '}
              <span 
                id="Hero_9" 
                className={`inline-block transition-transform duration-1000 ${animateText ? 'transform translate-y-0' : 'transform translate-y-8'} bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent`}
              >
                Home
              </span>
            </h1>
            <p id="Hero_10" className="text-xl text-gray-300 mb-8 max-w-2xl">
              Discover exceptional properties tailored to your lifestyle. From luxury estates to cozy apartments, we help you find the perfect place to call home.
            </p>
            <div id="Hero_11" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button id="Hero_12" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Search
              </button>
              <button id="Hero_13" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div id="Hero_14" className="relative">
            <div id="Hero_15" className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                id="Hero_16" 
                src={images[0] || "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                alt="Luxury Home" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div id="Hero_17" className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}