import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Joinpage from "./pages/Joinpage";
import Faq from "./pages/Faq";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";

const App = () => {
  // ✅ Smooth Scroll Setup
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="relative overflow-hidden text-stone-300 antialiased">
      {/* ✅ Background (Fixed to prevent scroll) */}
      <div className="fixed inset-0 -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

      {/* ✅ Sections */}
      <Nav />
      <Hero />
      <Features />
      <Joinpage />
      <Faq />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
