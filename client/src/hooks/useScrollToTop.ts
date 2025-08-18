import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * A custom hook that scrolls to the top of the page when the location changes.
 * This ensures that when navigating between pages, the new page always starts at the top.
 */
export function useScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}