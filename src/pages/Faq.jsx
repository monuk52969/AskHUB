import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "Study Squad connects learners through private rooms where they can share doubts and solutions. Users can ask questions using text or images and tag them for easy searching. The platform fosters collaboration and ongoing support among squad members.",
  },
  {
    question: "Can I create rooms?",
    answer:
      "Absolutely! You can create private squad rooms tailored to your group's needs. Each room can have a unique name and focus, allowing for personalized discussions. This feature enhances teamwork and engagement.",
  },
  {
    question: "How to save questions?",
    answer:
      "You can easily save questions using the localStorage feature. This allows you to bookmark important doubts for future reference. Access your saved questions anytime to revisit and reflect.",
  },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row gap-10 px-6 md:px-20 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInUp}
    >
      {/* LEFT SIDE */}
      <motion.div
        className="md:w-1/2 space-y-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={0}
      >
        <h1 className="text-5xl font-bold">FAQs</h1>
        <p className="text-lg">
          Discover how Study Squad enhances your learning experience through collaboration and support.
        </p>
        <button className="border border-black px-6 py-2 mt-4 hover:bg-stone-300 hover:text-black transition rounded">
          Contact
        </button>
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 space-y-6">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            onClick={() => toggle(index)}
            className="border-b border-black pb-4 cursor-pointer"
            custom={index + 1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              {openIndex === index ? (
                <FiChevronUp className="text-xl" />
              ) : (
                <FiChevronDown className="text-xl" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-base mt-4 text-stone-400">{item.answer}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
