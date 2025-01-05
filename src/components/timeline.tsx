"use client";

import Image from "next/image";

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

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
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

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-Enterpriser text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};


export function TimelineDemo() {
    const data = [
      {
        title: "2024",
        content: (
          <div>
            <p className="text-white-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <Image
                src="/rgpv insinis.png"
                alt="SOIT Logo"
                width={50}
                height={50}
              /> Masters in Technology (Data Science) School of Information technology, UTD
            </p>
            <div className="grid grid-cols-2 gap-4">
            </div>
          </div>
        ),
      },
      {
        title: "2023",
        content: (
          <div>
            <p className="text-white-400 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
              <Image
                src="/sna_sistec.png"
                alt="SOIT Logo"
                width={100}
                height={50}
              />Software Engineer at SNA SISTEC PVT LTD.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/slider.jpg"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/Screenshot_20240909-043401_Gallery.png"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20240812-WA0001.jpg"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/tcam_mini_pi_3.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/5.jpg"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20231116-WA0004.jpg"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/buzzer.jpg"
                alt="startup template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2022",
        content: (
          <div>
            <p className="text-white-400  text-xs md:text-sm font-normal mb-4">
            <Image
                src="/rgpv insinis.png"
                alt="SOIT Logo"
                width={50}
                height={50}
              />
              Bachelors' of Technology, UITRGPV
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20230519-WA0019.jpg"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20220625-WA0000.jpg"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/bot.jpg"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20240107-WA0002.jpg"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/LedMatrix.jpg"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2021",
        content: (
          <div>
            <p className="text-white-400  text-xs md:text-sm font-normal mb-4">
            <Image
                src="/dylog.png"
                alt="SOIT Logo"
                width={100}
                height={50}
              />
              Machine learning intern at Dylog Global
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20230216-WA0000.jpg"
                alt="hero template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/IMG-20240112-WA0014.jpg"
                alt="feature template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/Screenshot_20240122-210723_Video%20Player.png"
                alt="bento template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
              <Image
                src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/1711430995590.jpeg"
                alt="cards template"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] h-20 md:h-44 lg:h-auto lg:aspect-[16/9]"
              />
            </div>
          </div>
        ),
      },
    ];
    return (
      <div className="w-full">
        <Timeline data={data} />
      </div>
    );
  }