import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import AuthModal from "../components/AuthModal";
import { auth } from "../firebase"; // 👈 Make sure this is the correct path
import { signOut } from "firebase/auth";

const Nav = ({ loggedIn, setLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoggedIn(false);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <>
      <AuthModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onLoginSuccess={(email) => {
          setLoggedIn(true);
          setModalOpen(false);
          navigate("/dashboard");
        }}
      />

      <nav className="w-full px-4 py-3 bg-black text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="w-20" />
            <div className="hidden md:flex gap-8 ml-8">
              <a href="/" className="hover:text-blue-400 transition">Home Page</a>
              <a href="/" className="hover:text-blue-400 transition">Squad Rooms</a>
              <a href="/" className="hover:text-blue-400 transition">Ask Doubt</a>
              <a href="/" className="hover:text-blue-400 transition">Search Doubts</a>
            </div>
          </div>

          <div className="hidden md:flex gap-4">
            <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition">Join</button>
            {loggedIn ? (
              <button
                onClick={handleLogout}
                className="border px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 active:scale-95 transition"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setModalOpen(true)}
                className="border px-4 py-2 rounded-xl bg-stone-300 text-black hover:bg-stone-400 active:bg-stone-500 transition"
              >
                Log In
              </button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-3xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
            <a href="/" className="hover:text-blue-400 transition">Home Page</a>
            <a href="/" className="hover:text-blue-400 transition">Squad Rooms</a>
            <a href="/" className="hover:text-blue-400 transition">Ask Doubt</a>
            <a href="/" className="hover:text-blue-400 transition">Search Doubts</a>
            <div className="flex flex-col gap-2 mt-4">
              <button className="border px-4 py-2 rounded-xl hover:scale-105 active:scale-95 transition">Join</button>
              {loggedIn ? (
                <button
                  onClick={handleLogout}
                  className="border px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 active:scale-95 transition"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => setModalOpen(true)}
                  className="border px-4 py-2 rounded-xl bg-stone-300 text-black hover:bg-stone-400 active:bg-stone-500 transition"
                >
                  Log In
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
