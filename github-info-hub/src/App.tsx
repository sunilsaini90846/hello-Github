import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CommandsPage from './pages/CommandsPage';
import FeaturesPage from './pages/FeaturesPage';
import BlogsPage from './pages/BlogsPage';
import TutorialsPage from './pages/TutorialsPage';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2563eb', // Modern blue
        light: '#3b82f6',
        dark: '#1d4ed8',
      },
      secondary: {
        main: '#ec4899', // Modern pink
        light: '#f472b6',
        dark: '#db2777',
      },
      background: {
        default: darkMode ? '#0f172a' : '#f8fafc',
        paper: darkMode ? '#1e293b' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#f1f5f9' : '#1e293b',
        secondary: darkMode ? '#cbd5e1' : '#64748b',
      },
      error: {
        main: '#ef4444',
      },
      warning: {
        main: '#f59e0b',
      },
      info: {
        main: '#06b6d4',
      },
      success: {
        main: '#10b981',
      },
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
        letterSpacing: '-0.02em',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2rem',
        letterSpacing: '-0.02em',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        letterSpacing: '-0.02em',
      },
      h4: {
        fontWeight: 600,
        fontSize: '1.5rem',
        letterSpacing: '-0.02em',
      },
      h5: {
        fontWeight: 600,
        fontSize: '1.25rem',
      },
      h6: {
        fontWeight: 600,
        fontSize: '1rem',
      },
      subtitle1: {
        fontSize: '1.125rem',
        lineHeight: 1.5,
      },
      subtitle2: {
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
          },
        },
      },
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.style.setProperty(
      '--background-color', 
      !darkMode ? '#0f172a' : '#f8fafc'
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app-container">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <div className="content-container">
            <Sidebar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/commands" element={<CommandsPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                <Route path="/tutorials" element={<TutorialsPage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
