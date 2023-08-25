import { useEffect, useRef, useState } from 'react';

export default function UseIntersection(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting === true) observer.unobserve(element);
      });
    }, options);

    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  return [elementRef, isVisible];
}
