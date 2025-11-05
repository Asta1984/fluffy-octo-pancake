import { motion } from "framer-motion";
interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {

  return (
    <motion.div
    initial={{ y: 0, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: false, amount: 0.9 }} 
    transition={{ duration: 3, ease: "easeOut" }}
    exit={{ opacity: 1 }}
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-transform duration-300 md:-mb-32 ${className}`}
    >
      {/* Background text */}

        <text
        x="50%"
        y="40%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.4"
        className="font-OnlinePrivileges fill-transparent text-2xl stroke-primary"
        strokeDasharray="1000"
        strokeDashoffset="0"
      >
        {text}
        <animate
          attributeName="stroke-dashoffset"
          values="1000;0"
          dur="20s"
        />
      </text>
      
      {/* Outline text */}

      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-OnlinePrivileges stroke-accent fill-transparent text-xl"
      >
        {text}
        <animate
          attributeName="opacity"
          values="0;0.5"
          dur="0.4s"
        />
      </text>
    </svg>
    </motion.div>
  );
}