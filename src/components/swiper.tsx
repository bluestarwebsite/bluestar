import { motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import React, { type ReactNode } from "react";

interface DualContentComponentProps {
  children: [ReactNode, ReactNode];
}

export const Swiper: React.FC<DualContentComponentProps> = ({ children }) => {
  const x = useSpring(0, { stiffness: 1000, damping: 75 });

  const divRef = useRef<HTMLDivElement | null>(null);
  const [divWidth, setDivWidth] = useState(0);
  const [leftContent, rightContent] = React.Children.toArray(children);

  useEffect(() => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      setDivWidth(rect.width); // Get the width from the bounding rectangle
    }
  }, []);

  return (
    <div
      className="flex h-full w-full flex-grow flex-row overflow-y-hidden"
      onMouseEnter={() => x.set(-divWidth)}
      onMouseLeave={() => x.set(0)}
    >
      <motion.div className="h-full min-w-[50%]" style={{ x: x }} ref={divRef}>
        {leftContent}
      </motion.div>
      <motion.div
        className="h-full min-w-[50%] bg-blue-500"
        style={{ x: x }}
      ></motion.div>
      <motion.div className="h-full min-w-[50%]" style={{ x: x }}>
        {rightContent}
      </motion.div>
    </div>
  );
};
