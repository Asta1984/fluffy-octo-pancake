import { ProjectCard } from "@/components/ui/card-3";
import { workExperience } from "@/constants/workExperience"
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
  <>
  {workExperience.map((work, index) => (
  <motion.div
    key={index}
    initial={{ y: 80, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    <ProjectCard
      company={work.company}
      role={work.role}
      desc={work.desc}
      sourceCode={work.sourceCode}
      webLink={work.webLink}
    />
  </motion.div>
  ))}
  </>
  );
};

export default ProjectSection;