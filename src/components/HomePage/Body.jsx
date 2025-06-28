import React from 'react';
import Hero from './Hero';
import AboutUs from './Aboutus';
import FeaturedProperties from './FeaturedProperties';
import CallToAction from './CallToAction';
import Footer from './Footer';
import SearchBar from './SearchBar';
import useHome from './useHome';

const Body = () => {
  const { properties, loading, error, handleSearch } = useHome();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Hero />
      <SearchBar onSearch={handleSearch} />
      <AboutUs />
      <FeaturedProperties properties={properties} loading={loading} error={error} />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Body;