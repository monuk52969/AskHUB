import Group from "../assets/study.jpg";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, ease: "easeInOut" }
  }
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.8, ease: "easeInOut" }
  }
};

const Joinpage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row min-h-screen items-center px-4 md:px-16 py-12">

      {/* Left Section */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="md:w-1/2 w-full text-white space-y-6"
      >
        <h1 className="text-[7vw] md:text-[4vw] font-bold leading-tight">
          Join Your Study Squad <br /> Today!
        </h1>
        <p className="text-base md:text-xl text-stone-300">
          Collaborate, learn, and grow with your peers by joining a squad tailored to your needs.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border px-6 py-2 rounded-xl transition"
          >
            Join
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border px-6 py-2 rounded-xl bg-stone-300 text-black hover:bg-stone-400 active:bg-stone-500 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Right Section (Image) */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="md:w-1/2 w-full mt-10 md:mt-0  h-[300px] md:h-auto"
      >
        <img src={Group} alt="Study Group" className="w-full h-full object-cover rounded-2xl" />
      </motion.div>
    </div>
  );
};

export default Joinpage;
