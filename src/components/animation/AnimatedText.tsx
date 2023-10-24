"use client";
import { motion } from "framer-motion";

const AnimatedTextWord = ({
  text,
  size,
  weight,
  colour,
}: {
  text: String;
  size: string;
  weight: string;
  colour: string;
}) => {
  const words = text.split(" ");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{
            marginRight: index === 0 ? "0" : "5px",
            color: `${colour}`,
            fontSize: `${size}rem`,
            fontWeight: `${weight}`,
          }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
