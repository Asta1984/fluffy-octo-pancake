"use client"

import React from "react";
import { Mail, Github, Twitter, Linkedin, ChevronDown,  } from "lucide-react";
import RealisticLightspeedWarpDrive from '../components/realistic-lightspeed-warp-drive';
import { TimelineDemo } from "../components/timeline";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { workExperience } from "@/constants/workExperience"

const ProfilePage = () => {
  return (
    <div className="relative min-h-screen">
      <RealisticLightspeedWarpDrive />
      <div className="relative z-10 min-h-screen bg-black/20 backdrop-transparent-md border border-white/10 rounded-lg text-gray-200">
        <div className="max-w-2xl mx-auto py-16 px-7">
          <div className="space-y-6">

            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold leading-relaxed"><span className="text-2xl sm:text-5xl font-OnlinePrivileges mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-600 md:mt-10">Salil Mandal</span><br /><span className="text-xl sm:text-3xl font-OnlinePrivileges mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-700 to-green-700 md:mt-10">FullStack Engineer</span></h1>
              <div className="flex items-center text-gray-400">
              </div>

            {/* Social Links */}
              <div className="flex gap-2">
              <Link
                href="mailto:salilmandal908@gmail.com"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 text-gray-300" />
              </Link>
              <Link
                href="https://github.com/Asta1984"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Github className="w-5 h-5 text-gray-300" />
              </Link>
              <Link
                href="https://x.com/mandal_sal88300"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Twitter className="w-5 h-5 text-gray-300" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/salil-m-3a73b1138/"
                className="p-2 rounded-md hover:bg-gray-900 bg-gray-950 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-gray-300" />
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
          >
            {/* Bio Sections */}
            <div className="space-y-4 tracking-wider font-Typewriter text-green-500 text-xs bg-slate-100/10 rounded-xl p-3">
              <p>
                I&apos;m a software engineer experienced in building RESTful APIs.
              </p>
              <p>
                I&apos;ve developed a algorithm used in signal processing pipeline of LIDAR unit. 
                With a background in Automobile Engineering, I taught myself coding, design, and system architecture. 
                I have a professional experience of 2+ years in backend scripting, low-level programming and machine learning.
              </p>

              <p>
                Crafting autonomous bots, machine learning projects and Product development interests me.
                You could reach out to me via email.
              </p>
            </div>
            </motion.div>


            {/* Work Experience */}

            <div>
              <h2 className="text-xl pt-10 font-OnlinePrivileges mb-4 text-white">Projects</h2>

              <Accordion type="single" collapsible className="space-y-2">
                {workExperience.map((work, index) => (
                  <motion.div
                    key = {index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0 }} 
                    transition={{ duration: 0.1, ease: "easeOut" }}
                    exit={{ opacity: 0 }}
                    >
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="border border-gray-800 rounded-lg bg-gray-950"
                  >
                    <AccordionTrigger className="hover:no-underline px-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}
                        >
                          {work.icon}
                        </div>
                        <div className="flex flex-col items-start">
                          <div className="font-OnlinePrivileges text-white text-sm">{work.company}</div>
                          {work.role && (
                            <div className="text-xs text-gray-400 text-left ">{work.role}</div>
                          )}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="pl-14">
                        <p className="text-gray-400">{work.shortdesc}</p>
                        <br />
                        <p className="text-gray-400">{work.desc}</p>
                      </div>
                      <div className="flex justify-between flex-row">
                        <div className="pl-14">
                          <br />
                          {work.sourceCode && (
                            <Link
                              href={work.sourceCode}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="text-white bg-gray-900 hover:bg-gray-800 p-3 rounded-md transition-colors duration-200">
                                <p>Source Code</p>
                              </button>
                            </Link>
                          )}
                        </div>
                        <div className="pl-14">
                          <br />
                          {work.webLink && (
                            <Link
                              href={work.webLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="text-white bg-[#1F305E] hover:bg-[#284180] p-3 rounded-md transition-colors duration-200">
                                <p>Website</p>
                              </button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>

            </div>
          </div>
          <TimelineDemo />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage