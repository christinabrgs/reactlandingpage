// ScrollAnimations.js - Utility for handling smooth scroll animations
// Add this to your src/utils/ folder or use directly in components

export class ScrollAnimations {
  constructor() {
    this.observers = new Map();
    this.scrollProgress = null;
    this.init();
  }

  init() {
    // Initialize intersection observer for scroll animations
    this.createIntersectionObserver();
    
    // Initialize scroll progress bar
    this.createScrollProgress();
    
    // Initialize parallax effects
    this.initParallax();
    
    // Initialize smooth scrolling for navigation links
    this.initSmoothScrolling();
  }

  // Create intersection observer for fade-in animations
  createIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add staggered animation to child elements
          const staggeredElements = entry.target.querySelectorAll('[class*="stagger-"]');
          staggeredElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, index * 100);
          });
        }
      });
    }, options);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.section-animate, .fade-in-up, .fade-in-down, .fade-in-left, .fade-in-right, .fade-in-scale, .text-reveal'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    this.observers.set('main', observer);
  }

  // Create scroll progress indicator
  createScrollProgress() {
    // Create progress bar if it doesn't exist
    if (!document.querySelector('.scroll-progress')) {
      const progressContainer = document.createElement('div');
      progressContainer.className = 'scroll-progress';
      
      const progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      
      progressContainer.appendChild(progressBar);
      document.body.appendChild(progressContainer);
      
      this.scrollProgress = progressBar;
    }

    // Update progress on scroll
    window.addEventListener('scroll', this.updateScrollProgress.bind(this), { passive: true });
  }

  updateScrollProgress() {
    if (!this.scrollProgress) return;

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    this.scrollProgress.style.width = scrolled + '%';
  }

  // Initialize parallax scrolling effects
  initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      parallaxElements.forEach(el => {
        el.style.transform = `translateY(${rate}px)`;
      });
    }, { passive: true });
  }

  // Initialize smooth scrolling for navigation links
  initSmoothScrolling() {
    // Add smooth scrolling to all internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      e.preventDefault();
      
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        this.smoothScrollTo(targetElement);
      }
    });
  }

  // Smooth scroll to element with easing
  smoothScrollTo(element, offset = 0) {
    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) * 0.5, 1000); // Max 1 second
    let start = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  // Method to manually trigger animations
  triggerAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.add('visible');
    });
  }

  // Method to reset animations
  resetAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      el.classList.remove('visible');
    });
  }

  // Cleanup method
  destroy() {
    this.observers.forEach(observer => {
      observer.disconnect();
    });
    this.observers.clear();
    
    window.removeEventListener('scroll', this.updateScrollProgress);
    
    const progressBar = document.querySelector('.scroll-progress');
    if (progressBar) {
      progressBar.remove();
    }
  }
}

// React Hook for using scroll animations
export const useScrollAnimations = () => {
  React.useEffect(() => {
    const scrollAnimations = new ScrollAnimations();
    
    return () => {
      scrollAnimations.destroy();
    };
  }, []);
};

// Utility function to add animation classes to elements
export const addScrollAnimation = (element, animationType = 'fade-in-up', delay = 0) => {
  if (!element) return;
  
  element.classList.add(animationType);
  
  if (delay > 0) {
    element.style.transitionDelay = `${delay}ms`;
  }
};

// Utility function for staggered animations
export const addStaggeredAnimation = (elements, animationType = 'fade-in-up', staggerDelay = 100) => {
  if (!elements || elements.length === 0) return;
  
  elements.forEach((element, index) => {
    addScrollAnimation(element, animationType, index * staggerDelay);
  });
};

// Initialize on DOM load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if user doesn't prefer reduced motion
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      new ScrollAnimations();
    }
  });
}