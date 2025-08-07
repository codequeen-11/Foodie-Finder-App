import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="ml-4 p-2 rounded-full border border-orange-300 hover:bg-orange-100 dark:hover:bg-orange-900 transition"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
    </button>
  );
};

export default ThemeToggle;
