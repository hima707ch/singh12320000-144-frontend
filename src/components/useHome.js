import { useState, useEffect } from 'react';

export default function useHome() {
  const [properties, setProperties] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch featured properties on component mount
  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  const fetchFeaturedProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/properties/search');
      
      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        // If API fails, we'll use default properties from the component
        console.log('API not available, using default properties');
      }
    } catch (err) {
      console.error('Error fetching properties:', err);
      setError('Failed to fetch properties');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (searchParams) => {
    try {
      setLoading(true);
      setError(null);
      
      // Build query string
      const queryParams = new URLSearchParams();
      
      if (searchParams.location) queryParams.append('location', searchParams.location);
      if (searchParams.minPrice) queryParams.append('minPrice', searchParams.minPrice);
      if (searchParams.maxPrice) queryParams.append('maxPrice', searchParams.maxPrice);
      if (searchParams.type) queryParams.append('type', searchParams.type);
      
      const response = await fetch(`/api/properties/search?${queryParams.toString()}`);
      
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Search failed');
      }
    } catch (err) {
      console.error('Error searching properties:', err);
      setError('Failed to search properties');
    } finally {
      setLoading(false);
    }
  };

  const contactProperty = async (contactData) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      
      if (response.ok) {
        const data = await response.json();
        return { success: true, message: data.message };
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Contact submission failed');
        return { success: false, error: errorData.error };
      }
    } catch (err) {
      console.error('Error submitting contact:', err);
      setError('Failed to submit contact form');
      return { success: false, error: 'Failed to submit contact form' };
    } finally {
      setLoading(false);
    }
  };

  return {
    properties,
    searchResults,
    loading,
    error,
    handleSearch,
    contactProperty,
    fetchFeaturedProperties
  };
}