import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('#');

  useEffect(() => {
    const sections = ['header', 'about', 'experience', 'projects', 'testimonials', 'contact'];

    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActiveSection(id === 'header' ? '#' : id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-20% 0px -30% 0px'
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
