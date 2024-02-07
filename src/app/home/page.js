'use client';


import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url./` }}
    >
      <motion.h1
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-bold text-white mb-8"
      >
        Build the Perfect Web3 Resume
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl text-gray-200"
      >
        Stand out in the Web3 job market with a resume that showcases your skills and experience.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700 focus:outline-none"
      >
        Start Building Now
      </motion.button>
    </motion.section>
  );
};

export default HeroSection;
