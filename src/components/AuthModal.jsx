import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // 👈 Adjust path if needed

const AuthModal = ({ isOpen, onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      }

      const user = userCredential.user;

      localStorage.setItem("askhub_loggedin", "true");
      localStorage.setItem("askhub_user_email", user.email);

      if (onLoginSuccess) {
        onLoginSuccess(user.email);
      }

      onClose();
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative text-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {isLogin ? "Login to AskHUB" : "Sign Up for AskHUB"}
        </h2>

        {/* Error */}
        {error && <p className="text-red-600 text-sm mb-2 text-center">{error}</p>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-stone-800"
            disabled={loading}
          >
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
