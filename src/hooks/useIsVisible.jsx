import { useEffect, useState, useRef, useCallback } from "react";

const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current); // Stop observing once visible
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (observer && domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, [handleIntersection]);

  return { isVisible, domRef };
};

export default useIntersectionObserver;
