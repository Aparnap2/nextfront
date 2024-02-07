'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

const header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-white px-2 py-2 flex items-center justify-between"
    >
      <Link href="/home">
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-black"
        >
          My Web3 Company
        </motion.h1>
      </Link>
      <nav className='text-black space-x-4' >
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/register">Register</Link>
        <Link href="/login">Login</Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="ml-4 bg-blue-500 text-white rounded-md px-4 py-2"
        >
          Get Started
        </motion.button>
      </nav>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="text-gray-400"
      >
        <AiOutlineMenu />
      </motion.button>
    </motion.header>
  );
};

export default header;
