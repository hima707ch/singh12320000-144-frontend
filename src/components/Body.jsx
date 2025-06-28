import React from 'react';
import Hero from './Hero';
import AboutUs from './AboutUs';
import FeaturedProperties from './FeaturedProperties';
import SearchSection from './SearchSection';
import CallToAction from './CallToAction';
import Footer from './Footer';
import useHome from './useHome';
import images from '../assets/images';

export default function Body() {
  const { properties, searchResults, handleSearch, loading } = useHome();

  return (
    <div id="Body_1" className="min-h-screen bg-white">
      <Hero />
      <SearchSection onSearch={handleSearch} loading={loading} />
      <FeaturedProperties properties={searchResults.length > 0 ? searchResults : properties} />
      <AboutUs />
      <CallToAction />
      <Footer />
    </div>
  );
}