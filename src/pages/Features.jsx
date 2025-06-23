import { SlLink } from "react-icons/sl";
import { LuTimer } from "react-icons/lu";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const Features = () => {
  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-20">
      {/* Heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="heading mb-12"
      >
        <h1 className="text-3xl md:text-5xl leading-snug md:leading-[4vw] text-white font-semibold">
          Explore Our Exciting Features That <br />
          Enhance Your Learning Experience <span className="text-xl">. . .</span>
        </h1>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          className="border border-stone-100 p-4 rounded-xl bg-white/5 backdrop-blur-sm"
        >
          <SlLink className="text-4xl text-white mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">
            Join Your Squad and Collaborate <br /> Effectively on Your Journey
          </h2>
          <p className="text-sm text-stone-300 mb-4">
            Create personalized spaces for your squad to discuss <br /> and share knowledge.
          </p>
          <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition text-white border-white">
            Join
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          className="border border-stone-100 p-4 rounded-xl bg-white/5 backdrop-blur-sm"
        >
          <h2 className="text-4xl text-white mb-4">#</h2>
          <h2 className="text-xl font-semibold text-white mb-3">
            Ask Questions Anonymously and <br /> Clear Your Doubts Freely
          </h2>
          <p className="text-sm text-stone-300 mb-4">
            No judgment — get your queries resolved in a supportive <br /> student community.
          </p>
          <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition text-white border-white">
            Ask Now
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={3}
          className="border border-stone-100 p-4 rounded-xl bg-white/5 backdrop-blur-sm"
        >
          <LuTimer className="text-4xl text-white mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">
            Track Learning Progress <br /> and Set Study Goals
          </h2>
          <p className="text-sm text-stone-300 mb-4">
            Stay motivated with timers, goal trackers, and real-time <br /> squad milestones.
          </p>
          <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition text-white border-white">
            Start Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;
