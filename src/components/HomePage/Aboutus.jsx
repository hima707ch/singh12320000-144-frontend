import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              id="AboutUs_2"
              src={images[1] || 'https://via.placeholder.com/600x400'}
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 id="AboutUs_3" className="text-3xl font-bold mb-6 text-gray-900">Why Choose Us?</h2>
            <p id="AboutUs_4" className="text-gray-600 mb-6">With over 15 years of experience in real estate, we've helped thousands of people find their perfect home. Our dedication to excellence and customer satisfaction sets us apart.</p>
            <div className="grid grid-cols-2 gap-6">
              <div id="AboutUs_5" className="text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">1500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div id="AboutUs_6" className="text-center">
                <div className="text-blue-600 text-4xl font-bold mb-2">2000+</div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;