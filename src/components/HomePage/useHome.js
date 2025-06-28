import { useState, useEffect } from 'react';

const useHome = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProperties = async (searchParams = {}) => {
    setLoading(true);
    try {
      const queryString = new URLSearchParams(searchParams).toString();
      const response = await fetch(`/api/properties/search?${queryString}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setProperties(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchParams) => {
    fetchProperties(searchParams);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return { properties, loading, error, handleSearch };
};

export default useHome;