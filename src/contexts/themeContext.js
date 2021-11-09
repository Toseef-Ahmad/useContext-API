import React, { createContext } from 'react';
import useToggle from '../hooks/useToggle';

export const ThemeContext = createContext();
export const ThemeProvider = (props) => {
  const [isDark, toggleIsDark] = useToggle(true);
  return (
    <>
      <ThemeContext.Provider value={{ isDark, toggleIsDark }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};
