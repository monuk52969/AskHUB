import React from 'react';
import { motion } from 'framer-motion';
import WebflowLogo from '../assets/logo.png'; // Replace with your logo

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Testimonial = () => {
  return (
    <motion.div
      className="w-full px-4 py-16 flex flex-col items-center justify-center text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Logo */}
      <motion.img
        src={WebflowLogo}
        alt="Webflow Logo"
        className="w-36 mb-8"
        variants={fadeInUp}
      />

      {/* Testimonial Text */}
      <motion.p
        className="text-2xl md:text-3xl font-semibold max-w-4xl mb-12"
        variants={fadeInUp}
      >
        "Study Squad transformed the way I tackle my doubts. The supportive community has made learning enjoyable and effective!"
      </motion.p>

      {/* Profile Section */}
      <motion.div variants={fadeInUp}>
        <p className="font-medium">Alex Johnson</p>
        <p className="text-stone-400">Student, University X</p>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
