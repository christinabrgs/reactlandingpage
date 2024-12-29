import { useEffect, useState, useRef, useCallback } from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    const currentDomRef = domRef.current
    if (currentDomRef) {
      observer.observe(currentDomRef);
    }

    return () => {
      if (observer && currentDomRef) {
        observer.unobserve(currentDomRef);
      }
    };
  }, [handleIntersection]);

  return { isVisible, domRef };
};

export default useIntersectionObserver;
