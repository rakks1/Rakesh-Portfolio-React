import React, { useState, useEffect } from 'react';

const Testimonials = ({ data, container }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [data.length]);

  const currentTestimonial = data[currentIndex];

  return (
    <div className={container}>
      <img className={`${container} conimg`} src={currentTestimonial.image} alt={currentTestimonial.name} />
      <h3 className={`${container} conname`}>{currentTestimonial.name}</h3>
      <a className='proan' href={currentTestimonial.link}>{currentTestimonial.text}</a>
    </div>
  );
};

export default Testimonials;
