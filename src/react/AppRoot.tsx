import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LanguageProvider } from './contexts/LanguageContext';
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import MonDesa from './pages/MonDesa';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export type PageKey =
  | 'home'
  | 'team'
  | 'mondesa'
  | 'projects'
  | 'project-detail'
  | 'contact'
  | 'not-found';

interface AppRootProps {
  page: PageKey;
  slug?: string;
}

const renderPage = (page: PageKey, slug?: string) => {
  switch (page) {
    case 'home':
      return <Home />;
    case 'team':
      return <Team />;
    case 'mondesa':
      return <MonDesa />;
    case 'projects':
      return <Projects />;
    case 'project-detail':
      return <ProjectDetail slug={slug ?? ''} />;
    case 'contact':
      return <Contact />;
    case 'not-found':
    default:
      return <NotFound />;
  }
};

/**
 * Single React island mounted per Astro route. Reproduces the old App.tsx
 * provider tree (minus the router): LanguageProvider > MUI theme > Navbar +
 * page + Footer. Navigation is plain <a> links handled by Astro's MPA routing.
 */
export default function AppRoot({ page, slug }: AppRootProps) {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        {renderPage(page, slug)}
        <Footer />
      </ThemeProvider>
    </LanguageProvider>
  );
}
