import { useState, useEffect } from 'react';

export const useUserSession = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkUserSession = () => {
    try {
      const session = localStorage.getItem('authToken');
      
      if (session) {
        setUser({ isAuthenticated: true });
        setError(null);
      } else {
        setUser(null);
        setError('No session found');
      }
    } catch (err) {
      setUser(null);
      setError('Session error');
      console.error('Session Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserSession();
  }, []);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user
  };
};
