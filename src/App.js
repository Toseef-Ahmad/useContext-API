import React from 'react';
import './style.css';
import Navbar from './Navbar';
import Form from './Form';
import { ThemeProvider } from './contexts/themeContext';
import { LanguageProvider } from './contexts/languageContext';
import Container from './Container';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Container>
          <Navbar />
          <Form />
        </Container>
      </LanguageProvider>
    </ThemeProvider>
  );
}
