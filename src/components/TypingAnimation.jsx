import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer !", "Backend Developer !", "UI/UX Developer !" , "Freelancer !"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="text-[30px] font-medium">
        I am a <span ref={el} className="text-blue-600"></span>
      </h1>
    </div>
  );
}

export default TypingAnimation;
