import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M42.7,-73.2C55.9,-67.3,67.7,-57.1,75.6,-44.2C83.5,-31.3,87.6,-15.7,86.8,-0.5C86,14.8,80.4,29.5,72.5,42.9C64.6,56.3,54.3,68.3,41.4,75.7C28.5,83.1,14.3,85.9,0.1,85.7C-14,85.5,-28.1,82.4,-41.1,75.2C-54.1,68,-66,56.8,-73.4,43.2C-80.8,29.6,-83.7,14.8,-83.2,0.3C-82.7,-14.2,-78.8,-28.4,-71.7,-41.8C-64.6,-55.2,-54.3,-67.8,-41.3,-73.9C-28.3,-80,-14.2,-79.7,0.6,-80.7C15.3,-81.7,30.6,-84,42.7,-73.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Find Your House
                <span className="animate-bounce inline-block"> Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-xl text-blue-100 mb-8">Discover the perfect property that matches your lifestyle and dreams.</p>
            <button id="Hero_4" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Get Started</button>
          </div>
          <div className="md:w-1/2">
            <img id="Hero_5" src={images[0] || 'https://via.placeholder.com/600x400'} alt="Modern home" className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;