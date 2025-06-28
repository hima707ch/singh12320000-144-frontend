import React, { useState } from 'react';
import images from '../assets/images';

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    type: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <div id="SearchBar_1" className="max-w-4xl mx-auto -mt-10 relative z-10 px-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            id="SearchBar_2"
            type="text"
            placeholder="Location"
            className="border rounded-md p-2"
            value={searchParams.location}
            onChange={(e) => setSearchParams({...searchParams, location: e.target.value})}
          />
          <input
            id="SearchBar_3"
            type="number"
            placeholder="Min Price"
            className="border rounded-md p-2"
            value={searchParams.minPrice}
            onChange={(e) => setSearchParams({...searchParams, minPrice: e.target.value})}
          />
          <input
            id="SearchBar_4"
            type="number"
            placeholder="Max Price"
            className="border rounded-md p-2"
            value={searchParams.maxPrice}
            onChange={(e) => setSearchParams({...searchParams, maxPrice: e.target.value})}
          />
          <button
            id="SearchBar_5"
            type="submit"
            className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;