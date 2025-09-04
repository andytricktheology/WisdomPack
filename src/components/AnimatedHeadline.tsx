import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedHeadline: React.FC = () => {
  const headlines = [
    "Unlocking Biblical Secrets",
    "Unsealing Biblical Secrets",
    "Unlocking Biblical Truths",
    "Exposing Theological Tricks",
    "Liberating the Masses"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 4000); // Increased interval for character animation

    return () => clearInterval(interval);
  }, [headlines.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Faster stagger for characters
        delayChildren: 0.2,
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="h-24 flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg"
        >
          {headlines[currentIndex].split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              variants={characterVariants}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedHeadline;
