"use client";
import React from 'react';
import Link from 'next/link';

const AnimatedNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="group relative overflow-hidden h-5 flex items-start text-sm">
    <div className="flex flex-col transition-transform duration-700 ease-out transform group-hover:-translate-y-1/2">
      <span className="text-gray-300">{children}</span>
      <span className="text-white">{children}</span>
    </div>
  </Link>
);

export function Navbar() {
  const navLinksData = [
    { label: 'About', href: '#about' },
    { label: 'Blogs', href: '/blogs' },
    { label: 'Works', href: '#works' },
  ];

  const ctaButtonElement = (
    <button className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-[#333] bg-[rgba(31,31,31,0.62)] text-gray-300 rounded-full hover:border-white/50 hover:text-white transition-colors duration-200 w-full sm:w-auto">
      Contact
    </button>
  );

  const ResumeButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute inset-0 -m-2 rounded-full block bg-gray-100 opacity-40 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-60 group-hover:blur-xl group-hover:-m-3"></div>
      <Link href="https://drive.google.com/file/d/1Lh_OS5Hrp6aGU4RpOaHvHVsTT1eZ3bxt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-black bg-gradient-to-br from-gray-100 to-gray-300 rounded-full hover:from-gray-200 hover:to-gray-400 transition-all duration-200 w-full sm:w-auto">
          Resume
        </button>
      </Link>
    </div>
  );

  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pl-6 pr-6 py-3 backdrop-blur-sm rounded-full border border-[#333] bg-[#1f1f1f57] w-auto">
      <div className="flex items-center justify-between w-full gap-x-6 sm:gap-x-8">
        <nav className="flex items-center space-x-6 text-sm">
          {navLinksData.map((link) => (
            <AnimatedNavLink key={link.href} href={link.href}>
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {ResumeButtonElement}
          {ctaButtonElement}
        </div>
      </div>
    </header>
  );
}