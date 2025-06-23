import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check on load
  useEffect(() => {
    const stored = localStorage.getItem("askhub_loggedin");
    if (stored === "true") setIsLoggedIn(true);
  }, []);

  const login = () => {
    localStorage.setItem("askhub_loggedin", "true");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("askhub_loggedin");
    setIsLoggedIn(false);
  };

  return { isLoggedIn, login, logout };
};
