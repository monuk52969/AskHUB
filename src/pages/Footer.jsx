import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="w-full px-6 md:px-10 py-12 overflow-x-hidden"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 border-b pb-10">
        {/* Logo */}
        <div className="flex flex-col items-start">
          <img src={Logo} alt="Logo" className="w-28 mb-6" />
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Blog Posts</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="font-semibold mb-3">Resources</h2>
          <ul className="space-y-1 text-sm">
            <li>Webinars</li>
            <li>Case Studies</li>
            <li>E-books</li>
            <li>Templates</li>
            <li>Guides</li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h2 className="font-semibold mb-3">Stay Connected</h2>
          <ul className="space-y-1 text-sm">
            <li>Social Media</li>
            <li>Newsletter</li>
            <li>Feedback</li>
            <li>Support</li>
            <li>Events</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h2 className="font-semibold mb-3">Subscribe</h2>
          <p className="text-sm mb-3">
            Join our newsletter for the latest updates and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row border rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-transparent outline-none text-sm"
            />
            <button className="bg-black text-white px-4 py-2 text-sm">
              Subscribe
            </button>
          </div>
          <p className="text-xs mt-2">
            By subscribing, you agree to our{" "}
            <span className="underline">Privacy Policy</span> and consent to receive updates.
          </p>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-sm text-center md:text-left">
        <p>&copy; 2025 AskHUB. All rights reserved.</p>

        <div className="flex gap-4 underline">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>

        <div className="flex gap-4 text-lg">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
