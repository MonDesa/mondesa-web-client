import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavigationLoader from './components/NavigationLoader';
import { ReactRouterRoutes } from './routes';
import { LanguageProvider } from './contexts/LanguageContext';
import { NavigationProvider } from './contexts/NavigationContext';

const AppRoutes = () => {
  const routeElements = useRoutes(ReactRouterRoutes);
  return routeElements;
};

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <NavigationProvider>
              <Navbar />
              <NavigationLoader>
                <AppRoutes />
              </NavigationLoader>
              <Footer />
            </NavigationProvider>
          </Router>
        </ThemeProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;