import { useState, useEffect } from 'react';
import { authClient } from '../lib/auth-client';

const CACHE_KEY = 'user_session';
const CACHE_EXPIRY = 1000 * 60 * 30; // 30 minutes

export const useUserSession = () => {
  const [user, setUser] = useState(() => {
    // Try to load from cache on initial mount
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_EXPIRY) {
        return data;
      }
      localStorage.removeItem(CACHE_KEY);
    }
    return null;
  });
  const [loading, setLoading] = useState(!user);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const session = await authClient.getSession();
        if (session?.data?.user) {
          setUser(session.data.user);
          // Cache the session data
          localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: session.data.user,
            timestamp: Date.now()
          }));
        }
      } catch (err) {
        setError(err);
        localStorage.removeItem(CACHE_KEY);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      checkSession();
    }
  }, [user]);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user
  };
};
