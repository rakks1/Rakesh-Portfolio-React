import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "",
        "Front-End Developer",
        "Web Designer",
        "Web Developer",
        "UI/UX Designer",
        "Freelancer",
      ],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="text" ref={typedElement}></span>;
};

export default TypingEffect;
