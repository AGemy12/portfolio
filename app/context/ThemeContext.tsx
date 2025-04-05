"use client";
import { createContext, useState, useEffect, useContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    try {
      const root = document.documentElement;

      if (theme === "dark") {
        root.classList.remove("light", "light_bg");
        root.classList.add("dark", "dark_bg");
      } else {
        root.classList.remove("dark", "dark_bg");
        root.classList.add("light", "light_bg");
      }

      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Error applying theme:", e);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
