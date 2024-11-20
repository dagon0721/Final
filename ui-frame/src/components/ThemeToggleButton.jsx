"use client";

import { useContext } from "react";
import ThemeContext from "../app/contexts/ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>;
};

export default ThemeToggleButton;
