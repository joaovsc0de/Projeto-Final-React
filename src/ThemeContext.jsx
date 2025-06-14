import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("selectedTheme");

    if (saved === "dark" || saved === "light") return saved;
    const prefereDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefereDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isAuto = localStorage.getItem("selectedTheme") === "auto";
    const applyTheme = isAuto
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;

    document.body.setAttribute("data-theme", applyTheme);
  }, [theme]);

  const setPreferredTheme = (value) => {
    localStorage.setItem("selectedTheme", value);
    setTheme(value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setPreferredTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
