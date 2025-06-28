import React, { useState } from 'react';
import images from '../assets/images';

export default function SearchSection({ onSearch, loading }) {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <section id="SearchSection_1" className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div id="SearchSection_2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="SearchSection_3" className="text-center mb-12">
          <h2 id="SearchSection_4" className="text-3xl font-bold text-gray-900 mb-4">
            Find Your Perfect Property
          </h2>
          <p id="SearchSection_5" className="text-lg text-gray-600">
            Search through thousands of properties to find your ideal home
          </p>
        </div>

        <div id="SearchSection_6" className="bg-white rounded-2xl shadow-xl p-8">
          <form id="SearchSection_7" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div id="SearchSection_8" className="lg:col-span-1">
              <label id="SearchSection_9" htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                id="SearchSection_10"
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                placeholder="Enter city or area"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div id="SearchSection_11" className="lg:col-span-1">
              <label id="SearchSection_12" htmlFor="minPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Min Price
              </label>
              <input
                id="SearchSection_13"
                type="number"
                name="minPrice"
                value={searchParams.minPrice}
                onChange={handleInputChange}
                placeholder="$0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div id="SearchSection_14" className="lg:col-span-1">
              <label id="SearchSection_15" htmlFor="maxPrice" className="block text-sm font-medium text-gray-700 mb-2">
                Max Price
              </label>
              <input
                id="SearchSection_16"
                type="number"
                name="maxPrice"
                value={searchParams.maxPrice}
                onChange={handleInputChange}
                placeholder="$1,000,000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div id="SearchSection_17" className="lg:col-span-1">
              <label id="SearchSection_18" htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <select
                id="SearchSection_19"
                name="type"
                value={searchParams.type}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="villa">Villa</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div id="SearchSection_20" className="lg:col-span-1 flex items-end">
              <button
                id="SearchSection_21"
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                {loading ? (
                  <svg id="SearchSection_22" className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg id="SearchSection_23" className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}