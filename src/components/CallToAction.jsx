import React from 'react';
import images from '../assets/images';

export default function CallToAction() {
  return (
    <section id="CallToAction_1" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 relative overflow-hidden">
      {/* Background decorative elements */}
      <div id="CallToAction_2" className="absolute inset-0 opacity-10">
        <svg id="CallToAction_3" className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <circle cx="100" cy="100" r="50" fill="white" />
          <circle cx="900" cy="200" r="80" fill="white" />
          <circle cx="200" cy="800" r="60" fill="white" />
          <circle cx="800" cy="900" r="40" fill="white" />
        </svg>
      </div>

      <div id="CallToAction_4" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div id="CallToAction_5" className="max-w-4xl mx-auto">
          <h2 id="CallToAction_6" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p id="CallToAction_7" className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied homeowners who found their perfect property with us. Let our expert team guide you through every step of your real estate journey.
          </p>
          
          <div id="CallToAction_8" className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button id="CallToAction_9" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
            <button id="CallToAction_10" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Consultation
            </button>
          </div>

          {/* Stats */}
          <div id="CallToAction_11" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div id="CallToAction_12" className="text-center">
              <div id="CallToAction_13" className="text-4xl font-bold text-white mb-2">5,000+</div>
              <div id="CallToAction_14" className="text-blue-100">Happy Clients</div>
            </div>
            <div id="CallToAction_15" className="text-center">
              <div id="CallToAction_16" className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div id="CallToAction_17" className="text-blue-100">Properties Sold</div>
            </div>
            <div id="CallToAction_18" className="text-center">
              <div id="CallToAction_19" className="text-4xl font-bold text-white mb-2">15+</div>
              <div id="CallToAction_20" className="text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}