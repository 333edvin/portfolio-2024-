'use client'
import React, { useEffect, useState } from 'react';

const Cursor = ({ hoverText }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Track mouse position
    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  useEffect(() => {
    setIsHovering(!!hoverText);
  }, [hoverText]);

  return (
    <div
      id="custom-cursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isHovering ? '100px' : '10px',
        height: isHovering ? '100px' : '10px',
        opacity: isHovering ? 1 : 0.5,
      }}
      className="fixed flex items-center justify-center pointer-events-none"
    >
      {isHovering && <span className="cursor-text flex flex-col text-center"> <span className="text-[10px]">View</span> {hoverText} </span>}
    </div>
  );
};

export default Cursor;
