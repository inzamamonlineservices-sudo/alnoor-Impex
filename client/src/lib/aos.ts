import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Check if user prefers reduced motion
 */
function shouldReduceMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Initialize AOS (Animate On Scroll) with optimized configuration
 * for subtle, confident, and fast animations
 */
export const initAOS = () => {
  AOS.init({
    duration: 200,                 // default: fast but not blinky
    easing: 'ease-out-cubic',
    offset: 140,                   // trigger earlier to avoid snap-in
    delay: 0,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    startEvent: 'DOMContentLoaded',
    throttleDelay: 20,
    debounceDelay: 50,
    disable: shouldReduceMotion
  });

  // Call after dynamic content/route changes
  window.addEventListener('load', () => AOS.refreshHard());
};

/**
 * Refresh AOS animations (useful after dynamic content changes)
 */
export const refreshAOS = () => {
  AOS.refresh();
};

/**
 * Fully reset AOS so new route elements animate again
 */
export function refreshAOSHard() {
  AOS.refreshHard();
}

/**
 * Clear stale AOS classes on SSR/CSR boundaries (defensive)
 */
export function clearAOSClasses() {
  document.querySelectorAll('.aos-animate').forEach(el => el.classList.remove('aos-animate'));
}