"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import RealisticLightspeedWarpDrive from '../components/realistic-lightspeed-warp-drive';
import { TimelineDemo } from "../components/timeline";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import Project_Card from "@/components/projects"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { workExperience } from "@/constants/workExperience"
import { Navbar } from "@/components/ui/mini-navbar";

const SocialLinks = ({ iconSize = "w-5 h-5", bgClass = "bg-transparent", hoverClass = "hover:bg-sky-950" }) => (
  <div className="flex gap-2">
    <Link href="mailto:salilmandal908@gmail.com" className={`p-2 rounded-md ${hoverClass} border ${bgClass} transition-colors duration-200`}>
      <FaEnvelope className={`${iconSize} text-gray-300`} />
    </Link>
    <Link href="https://github.com/Asta1984" className={`p-2 border rounded-md ${hoverClass} ${bgClass} transition-colors duration-200`}>
      <FaGithub className={`${iconSize} text-gray-300`} />
    </Link>
    <Link href="https://x.com/mandal_sal88300" className={`p-2 border rounded-md ${hoverClass} ${bgClass} transition-colors duration-200`}>
      <FaXTwitter className={`${iconSize} text-gray-300`} />
    </Link>
    <Link href="https://www.linkedin.com/in/salil-m-3a73b1138/" className={`p-2 border rounded-md ${hoverClass} ${bgClass} transition-colors duration-200`}>
      <FaLinkedin className={`${iconSize} text-gray-300`} />
    </Link>
  </div>
);

const ProfilePage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative z-10">
        <img src="https://pub-bb773cad98e4488d80e5473dfc75aaef.r2.dev/Cf/top.png" alt="hero banner" />
        <h1 className="absolute inset-0 top-24 md:top-72 text-center text-3xl font-bold">
          <span className="text-xl sm:text-5xl font-OnlinePrivileges md:mb-6 bg-clip-text bg-stone-600 md:mt-10">
            Hi! This is Salil....
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="min-h-screen p-6">
        <RealisticLightspeedWarpDrive />

        <div className="relative min-h-screen bg-black/20 backdrop-transparent-md border border-white/10 rounded-lg text-gray-200">
          <div className="mx-auto py-16 px-7">
            <div className="space-y-6">

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
                  <div className="space-y-4 tracking-wider font-Typewriter text-gray-300 text-xs bg-gray-950 bg-opacity-75 border rounded-xl p-5 mt-6">
                  <h1 className="text-xl pt-10 font-OnlinePrivileges mb-4 text-white">
                    Info
                  </h1>
                    <p>
                      I&apos;m a software Engineer with hands-on experience in building scalable, secure,
                      and innovative applications across diverse domains. My technical expertise spans
                      Python, JavaScript, TypeScript, React, Node.js, FastAPI, and Django REST Framework,
                      where I&apos;ve delivered high-impact solutions in AI, cloud-native systems, and Web3.
                    </p>
                    <p>
                      I&apos;ve worked on projects ranging from LiDAR-based vehicle classification
                      systems to LLM-powered chatbots, healthcare platforms, crypto presale applications,
                      and real-time attendance management systems. Along the way, I&apos;ve gained strong
                      proficiency in AWS (Lambda, API Gateway, DynamoDB, EC2, S3), Docker, Kubernetes,
                      Terraform, PostgreSQL, MongoDB, Redis, and Firebase, enabling me to architect
                      end-to-end solutions with scalability in mind.
                    </p>
                    <p>
                      Beyond development, I enjoy experimenting with LLM APIs, AI/ML models,
                      and automation tools like N8N, Zapier, and AI Agents to create smarter workflows.
                      You could reach out to me via email.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Works Section */}
              <section id="works">
                <h2 className="text-xl pt-10 font-OnlinePrivileges mb-4 text-white">Projects Cooked</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {workExperience.map((work, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{ duration: 0.1, ease: "easeOut" }}
                      exit={{ opacity: 0 }}
                    >
                      <AccordionItem
                        value={`item-${index}`}
                        className="border border-gray-800 rounded-lg bg-gray-950 bg-opacity-75"
                      >
                        <AccordionTrigger className="hover:no-underline px-4">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 ${work.bgColor} ${work.textColor} rounded-lg flex items-center justify-center font-medium`}>
                              {work.icon}
                            </div>
                            <div className="flex flex-col items-start">
                              <div className="font-OnlinePrivileges text-white text-sm">{work.company}</div>
                              {work.role && (
                                <div className="text-xs text-gray-400 text-left">{work.role}</div>
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
                                <Link href={work.sourceCode} target="_blank" rel="noopener noreferrer">
                                  <button className="text-white bg-gray-900 hover:bg-gray-800 p-3 rounded-md transition-colors duration-200">
                                    Source Code
                                  </button>
                                </Link>
                              )}
                            </div>
                            <div className="pl-14">
                              <br />
                              {work.webLink && (
                                <Link href={work.webLink} target="_blank" rel="noopener noreferrer">
                                  <button className="text-white bg-[#1F305E] hover:bg-[#284180] p-3 rounded-md transition-colors duration-200">
                                    Website
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
              </section>

              <section id="Works2">
                <div className="grid grid-cols-1 md:grid-cols-2">
                 <Project_Card />
                 <Project_Card />
                 <Project_Card />
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