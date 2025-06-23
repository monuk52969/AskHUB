import IMG from "../assets/Group.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-16 pt-10 md:pt-0 relative bg-black">

      {/* Left Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}  // 👈 scroll + reverse scroll enabled
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0"
      >
        <h1 className="text-stone-300 text-[8vw] md:text-[4vw] leading-tight font-bold">
          Join the ultimate <br />
          Study Community <br />
          Today!
        </h1>

        <p className="text-stone-300 text-base md:text-xl mt-4 leading-relaxed">
          Welcome to AskHUB, where learning meets collaboration. <br />
          Connect with peers, share doubts, and grow together in a supportive environment.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border-[1px] py-2 px-6 rounded-xl transition text-white"
          >
            Join
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border-[1px] py-2 px-6 rounded-xl bg-stone-300 text-black hover:bg-stone-400 active:bg-stone-500 transition"
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}  // 👈 reverse scroll also works
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"
      >
        <img
          src={IMG}
          alt="Hero"
          className="w-[80%] max-w-[400px] object-contain rounded-xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
