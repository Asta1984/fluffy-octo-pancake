"use client"
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import RealisticLightspeedWarpDrive from '../components/realistic-lightspeed-warp-drive';
import { TimelineDemo } from "../components/timeline";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import Project_Card from "@/components/projects"
import Link from "next/link"
import { Navbar } from "@/components/ui/mini-navbar";
import ScrollIndicator from "@/components/ScrollIndicator";

const SocialLinks = ({ iconSize = "w-5 h-5", bgClass = "bg-transparent/30", hoverClass = "hover:bg-zinc-900/50" }) => (
  <div className="flex gap-2 p-4 ">
    <Link href="mailto:salilmandal908@gmail.com" className={`p-2 rounded-md ${hoverClass} border ${bgClass} transition-colors duration-200`}>
      <FaEnvelope className={`${iconSize} text-accent`} />
    </Link>
    <Link href="https://github.com/Asta1984" className={`p-2 border rounded-md ${hoverClass} ${bgClass} transition-colors duration-200`}>
      <FaGithub className={`${iconSize} text-accent`} />
    </Link>
    <Link href="https://x.com/mandal_sal88300" className={`p-2 border rounded-md ${hoverClass} ${bgClass} transition-colors duration-200`}>
      <FaXTwitter className={`${iconSize} text-accent`} />
    </Link>
    <Link href="https://www.linkedin.com/in/salil-m-3a73b1138/" className={`p-2 border rounded-md ${hoverClass} ${bgClass} transition-colors duration-200`}>
      <FaLinkedin className={`${iconSize} text-accent`} />
    </Link>
  </div>
);

const ProfilePage = () => {
  return (
    <>
    <div className="py-12">
      <Navbar/>
    </div>
      {/* Hero Section */}
      {/* Main Content */}
      <div className="min-h-screen p-6">
        <RealisticLightspeedWarpDrive />
      <div className="relative min-h-screen bg-black/20 backdrop-transparent-md border border-white/10 rounded-lg text-gray-200">
      <div className="absolute">
        <Image 
          src="https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/endless.webp"
          alt="hero banner"
          width={1536}
          height={1024}
          className="rounded-2xl"
        />
      </div>    
          <div className="mx-auto px-7 z-30">
            <div className="space-y-6 relative">

              {/* About Section */}
              <section id="about">
                <SocialLinks />

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  exit={{ opacity: 0 }}
                >
                  <div className="md:w-4/5 space-y-4 tracking-wider font-Typewriter text-zinc-100 text-xs bg-slate-800 bg-slate-900/40 md:mx-auto rounded-xl md:mt-6 p-5 border-accent">
                  <h1 className="text-4xl md:px-7 pt-10 font-OnlinePrivileges mb-8 text-zinc-100">
                    Salil Mandal
                  </h1>
                    <p className="md:px-7">
                      I&apos;m a NERD in capital letters.diverse domains.
                    </p>
                    <p className="md:px-7">
                      I like to build, I have build and I will build
                    </p>
                    <p className="md:px-7">
                      if you want me to larp, yap, build, vibecode etcetra
                      You could reach out to me via email.
                    </p>
                  </div>
                </motion.div>
              </section>


              {/* Works Section */}
              <section id="works" >
                <h2 className="text-4xl px-7 pt-10 font-OnlinePrivileges mt-10 mb-4 text-white">Projects Cooked</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 md:p-4 gap-10">
                 <Project_Card />
                </div>
              </section>
            </div>
          </div>
          <TimelineDemo />
        </div>
      </div>

      <AnimatedText text="Salil Mandal" />

      {/* Footer */}
      <footer className="relative md:bottom-0 md:max-h-full">
        <img
          src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/foot.png"
          alt="footer banner"
          className="border-y"
        />
        <div className="md:absolute top-auto left-auto p-4 md:top-3/4 md:left-3/4 md:p-4 inset-0 md:h-min flex gap-2">
          <SocialLinks
            iconSize="w-3 h-3 md:w-5 md:h-5"
            bgClass="bg-neutral-600"
            hoverClass="hover:bg-transparent"
          />
        </div>
      </footer>
    </>
  );
}

export default ProfilePage;