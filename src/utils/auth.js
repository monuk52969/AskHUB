// src/utils/auth.js
export const setUser = (user) => {
  localStorage.setItem("askhub_user", JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem("askhub_user");
  return user ? JSON.parse(user) : null;
};

export const logoutUser = () => {
  localStorage.removeItem("askhub_user");
};
