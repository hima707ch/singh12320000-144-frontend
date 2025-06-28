import React from 'react';
import images from '../assets/images';

export default function AboutUs() {
  return (
    <section id="AboutUs_1" className="py-20 bg-gray-50">
      <div id="AboutUs_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="AboutUs_3" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div id="AboutUs_4" className="relative">
            <img 
              id="AboutUs_5" 
              src={images[1] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
              alt="Real Estate Team" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            <div id="AboutUs_6" className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div id="AboutUs_7" className="text-3xl font-bold">15+</div>
              <div id="AboutUs_8" className="text-sm">Years Experience</div>
            </div>
          </div>

          {/* Right Content */}
          <div id="AboutUs_9">
            <h2 id="AboutUs_10" className="text-4xl font-bold text-gray-900 mb-6">
              About Our Real Estate Excellence
            </h2>
            <p id="AboutUs_11" className="text-lg text-gray-600 mb-6">
              With over 15 years of experience in the real estate industry, we've helped thousands of families find their perfect homes. Our commitment to excellence and personalized service sets us apart.
            </p>
            <p id="AboutUs_12" className="text-lg text-gray-600 mb-8">
              We understand that buying or selling a home is one of life's most important decisions. That's why we provide expert guidance, market insights, and unwavering support throughout your journey.
            </p>
            
            <div id="AboutUs_13" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div id="AboutUs_14" className="flex items-center space-x-3">
                <div id="AboutUs_15" className="bg-blue-100 p-2 rounded-lg">
                  <svg id="AboutUs_16" className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span id="AboutUs_17" className="text-gray-700 font-medium">Expert Market Knowledge</span>
              </div>
              <div id="AboutUs_18" className="flex items-center space-x-3">
                <div id="AboutUs_19" className="bg-green-100 p-2 rounded-lg">
                  <svg id="AboutUs_20" className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <span id="AboutUs_21" className="text-gray-700 font-medium">Competitive Pricing</span>
              </div>
              <div id="AboutUs_22" className="flex items-center space-x-3">
                <div id="AboutUs_23" className="bg-purple-100 p-2 rounded-lg">
                  <svg id="AboutUs_24" className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span id="AboutUs_25" className="text-gray-700 font-medium">Dedicated Support</span>
              </div>
              <div id="AboutUs_26" className="flex items-center space-x-3">
                <div id="AboutUs_27" className="bg-orange-100 p-2 rounded-lg">
                  <svg id="AboutUs_28" className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span id="AboutUs_29" className="text-gray-700 font-medium">Quick Transactions</span>
              </div>
            </div>

            <button id="AboutUs_30" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}