"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Scroll_effect = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className=" dark:bg-neutral-950 font-sans md:px-5"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-2 md:px-8 lg:px-10">
        <h2 className="font-OnlinePrivileges text-2xl md:text-4xl mb-4 text-white max-w-4xl">
          My journey 
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-sm">
          Here&apos;s a glimpse of my journey.
        </p>
      </div>
      <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>

  );
};


export function TimelineDemo() {}
    
    return (

    )
  