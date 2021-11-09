import React, { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';

const Container = (props) => {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);
  const styles = {
    width: '100vw',
    height: '100vh',
    backgroundColor: isDark ? 'black' : 'white',
    transition: 'all 0.6s ease-in-out',
  };
  return <div style={styles}>{props.children}</div>;
};

export default Container;
