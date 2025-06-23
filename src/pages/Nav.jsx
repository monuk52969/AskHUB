import { useState } from "react";
import Logo from "../assets/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-3 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo + Desktop Links */}
        <div className="flex items-center gap-4">
          <img src={Logo} alt="Logo" className="w-20" />
          <div className="hidden md:flex gap-8 ml-8">
            <a href="/" className="hover:text-blue-400 hover:underline underline-offset-4 transition">Home Page</a>
            <a href="/" className="hover:text-blue-400 hover:underline underline-offset-4 transition">Squad Rooms</a>
            <a href="/" className="hover:text-blue-400 hover:underline underline-offset-4 transition">Ask Doubt</a>
            <a href="/" className="hover:text-blue-400 hover:underline underline-offset-4 transition">Search Doubts</a>
          </div>
        </div>

        {/* Desktop Buttons + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition">
              Join
            </button>
            <button className="border px-4 py-2 rounded-xl bg-stone-300 text-black hover:bg-stone-400 active:bg-stone-500 transition">
              Start
            </button>
          </div>

          {/* Hamburger/Cross Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none text-3xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4 animate-fade-in-down">
          <a href="/" className="hover:text-blue-400 transition">Home Page</a>
          <a href="/" className="hover:text-blue-400 transition">Squad Rooms</a>
          <a href="/" className="hover:text-blue-400 transition">Ask Doubt</a>
          <a href="/" className="hover:text-blue-400 transition">Search Doubts</a>
          <div className="flex flex-col gap-2 mt-4">
            <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition">
              Join
            </button>
            <button className="border px-4 py-2 rounded-xl bg-stone-300 text-black hover:bg-stone-400 active:bg-stone-500 transition">
              Start
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
