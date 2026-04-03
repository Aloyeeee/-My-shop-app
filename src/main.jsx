import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";

// ПІДКЛЮЧАЄМО СТИЛІ ОСЬ ТУТ:
import './styles/tokens.css'; // Наші кольори та відступи
import './styles/index.css';  // Глобальні стилі

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SettingsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </ThemeProvider>
  </StrictMode>,
);