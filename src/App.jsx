import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

import Nav from "./pages/Nav";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Joinpage from "./pages/Joinpage";
import Faq from "./pages/Faq";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("askhub_loggedin") === "true"
  );

  const location = useLocation();

  useEffect(() => {
    const checkLogin = () => {
      const isLoggedIn = localStorage.getItem("askhub_loggedin") === "true";
      setLoggedIn(isLoggedIn);
    };

    checkLogin();

    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, [location.pathname]);

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
    <div className="overflow-x-hidden text-stone-300 antialiased relative">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              <Hero />
              <Features />
              <Joinpage />
              <Faq />
              <Testimonial />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={loggedIn ? <Dashboard /> : <Navigate to="/" replace />}
        />
      </Routes>
    </div>
  );
};

export default App;
