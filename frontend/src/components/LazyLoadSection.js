import React from 'react';
import { useInView } from 'react-intersection-observer';

const LazyLoadSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,  // Load only once when it comes into view
    threshold: 0.1,     // Trigger when 10% of the element is visible
  });

  return (
    <div ref={ref}>
      {inView ? children : null}
    </div>
  );
};

export default LazyLoadSection;
