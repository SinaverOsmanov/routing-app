import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("facebook");

  function changeTheme(array) {
    const string = array.length === 0 ? "facebook" : "whatsApp";
    setTheme(string);
  }
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
