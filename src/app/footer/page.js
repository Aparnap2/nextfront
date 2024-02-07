'use client'
import { motion } from 'framer-motion';

const footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-800 text-white py-4 text-center"
    >
      &copy; {new Date().getFullYear()} My Web3 Company
    </motion.footer>
  );
};

export default footer;
