import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <section id="CTA_1" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="CTA_2" className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Home?</h2>
        <p id="CTA_3" className="text-xl text-blue-100 mb-8">Join thousands of satisfied homeowners who found their perfect property with us.</p>
        <div className="flex justify-center gap-4">
          <button id="CTA_4" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300">Get Started Now</button>
          <button id="CTA_5" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;