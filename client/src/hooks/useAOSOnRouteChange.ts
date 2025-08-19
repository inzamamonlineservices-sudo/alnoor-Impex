'use client';
import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { initAOS, refreshAOSHard, clearAOSClasses } from '@/lib/aos';

export function useAOSOnRouteChange() {
  const [location] = useLocation();

  useEffect(() => {
    // 1) scroll to top instantly before AOS computes offsets
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });

    // 2) (re)initialize AOS on first mount if needed
    if (!document.body.dataset.aosInit) {
      initAOS();
      document.body.dataset.aosInit = 'true';
    }

    // 3) refresh after next paint so DOM is stable
    requestAnimationFrame(() => {
      // Clear any stale classes first
      clearAOSClasses();
      // Then refresh AOS
      refreshAOSHard();
    });
  }, [location]);
}