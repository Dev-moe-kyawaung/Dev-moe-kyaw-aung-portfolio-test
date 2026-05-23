// components/DarkModeToggle.jsx
import { useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark((prev) => !prev);
    const next = isDark ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
  };

  return (
    <button
      onClick={toggleDark}
      className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-md dark:bg-gray-800 dark:text-gray-300"
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
