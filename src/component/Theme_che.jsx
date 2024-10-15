import PropTypes from 'prop-types'; 
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage if available
  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Save the theme to localStorage
  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme ,ThemeContext}}>
      {children}
    </ThemeContext.Provider>
  );
};
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,  // Validating children as required
  };
