"use client";

import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-white dark:text-yellow-300 text-xl transition duration-300"
      aria-label="Toggle Theme"
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}
