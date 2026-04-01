import * as React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface ProjectCardProps extends HTMLMotionProps<"div"> {
  company: string;
  role: string;
  desc: string;
  sourceCode?: string;
  webLink?: string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
    ({ className, company, role, desc, sourceCode, webLink, ...props }, ref) => {
    const previewUrl = webLink
      ? `https://api.microlink.io/?url=${encodeURIComponent(webLink)}&screenshot=true&meta=false&embed=screenshot.url`
      : null;

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group w-full overflow-hidden rounded-xl border border-gray-800 bg-gray-950 text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg",
          className
        )}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        {...props}
      >
        {/* Preview Image */}
        <div className="relative overflow-hidden h-48 bg-gray-900">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={`${company} preview`}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-gray-600 text-sm">
              No preview available
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3 p-4">
          <motion.h3
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg font-semibold tracking-tight text-white"
          >
            {company}
          </motion.h3>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: "0.1s" }}
            className="text-xs text-gray-400"
          >
            {role}
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: "0.2s" }}
            className="text-sm text-gray-300 leading-relaxed"
          >
            {desc}
          </motion.p>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: "0.3s" }}
            className="flex items-center gap-3 pt-2"
          >
            {sourceCode && (
              <Link href={sourceCode} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 text-white bg-gray-900 hover:bg-gray-800 px-3 py-2 rounded-md text-sm transition-colors duration-200">
                  <FaGithub className="h-4 w-4" />
                  Source Code
                </button>
              </Link>
            )}
            {webLink && (
              <Link href={webLink} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-2 text-white bg-[#1F305E] hover:bg-[#284180] px-3 py-2 rounded-md text-sm transition-colors duration-200">
                  <FaExternalLinkAlt className="h-4 w-4" />
                  Live
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
export { ProjectCard };
export type { ProjectCardProps };