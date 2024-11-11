'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RevealingList = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, ease: "elastic.out(1,0.3)" }
    );
  }, []);

  return (
    <div ref={ref} className="animate-item">
      {children}
    </div>
  );
};

export default RevealingList;



