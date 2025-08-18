import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initialize AOS (Animate On Scroll) with default configuration
 */
export const initAOS = () => {
  AOS.init({
    // Global settings
    duration: 800, // Animation duration in ms
    easing: 'ease-in-out', // Default easing for animations
    once: false, // Whether animation should happen only once
    mirror: false, // Whether elements should animate out while scrolling past them
    offset: 120, // Offset (in px) from the original trigger point
    delay: 0, // Default delay before animation starts
    anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
  });
};

/**
 * Refresh AOS animations (useful after dynamic content changes)
 */
export const refreshAOS = () => {
  AOS.refresh();
};