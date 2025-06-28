import React from 'react';
import images from '../assets/images';

export default function FeaturedProperties({ properties }) {
  const defaultProperties = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      location: "Beverly Hills, CA",
      price: "$2,500,000",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,200 sq ft",
      image: images[2] || "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Downtown Penthouse",
      location: "Manhattan, NY",
      price: "$3,200,000",
      bedrooms: 3,
      bathrooms: 3,
      area: "2,800 sq ft",
      image: images[3] || "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Coastal Beach House",
      location: "Malibu, CA",
      price: "$1,800,000",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,500 sq ft",
      image: images[4] || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const displayProperties = properties && properties.length > 0 ? properties : defaultProperties;

  return (
    <section id="FeaturedProperties_1" className="py-20 bg-white">
      <div id="FeaturedProperties_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="FeaturedProperties_3" className="text-center mb-16">
          <h2 id="FeaturedProperties_4" className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p id="FeaturedProperties_5" className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of exceptional properties that offer the perfect blend of luxury, comfort, and location.
          </p>
        </div>

        <div id="FeaturedProperties_6" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProperties.map((property, index) => (
            <div key={property.id || index} id={`FeaturedProperties_${7 + index}`} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
              <div id={`FeaturedProperties_${10 + index}`} className="relative overflow-hidden">
                <img 
                  id={`FeaturedProperties_${13 + index}`}
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div id={`FeaturedProperties_${16 + index}`} className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              </div>
              
              <div id={`FeaturedProperties_${19 + index}`} className="p-6">
                <h3 id={`FeaturedProperties_${22 + index}`} className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p id={`FeaturedProperties_${25 + index}`} className="text-gray-600 mb-4 flex items-center">
                  <svg id={`FeaturedProperties_${28 + index}`} className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </p>
                
                <div id={`FeaturedProperties_${31 + index}`} className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <span id={`FeaturedProperties_${34 + index}`} className="flex items-center">
                    <svg id={`FeaturedProperties_${37 + index}`} className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    {property.bedrooms} Beds
                  </span>
                  <span id={`FeaturedProperties_${40 + index}`} className="flex items-center">
                    <svg id={`FeaturedProperties_${43 + index}`} className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                    {property.bathrooms} Baths
                  </span>
                  <span id={`FeaturedProperties_${46 + index}`} className="flex items-center">
                    <svg id={`FeaturedProperties_${49 + index}`} className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {property.area}
                  </span>
                </div>
                
                <div id={`FeaturedProperties_${52 + index}`} className="flex justify-between items-center">
                  <span id={`FeaturedProperties_${55 + index}`} className="text-2xl font-bold text-blue-600">
                    {property.price}
                  </span>
                  <button id={`FeaturedProperties_${58 + index}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div id="FeaturedProperties_61" className="text-center mt-12">
          <button id="FeaturedProperties_62" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}