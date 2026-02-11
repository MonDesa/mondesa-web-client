import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from 'react-router';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import theme from '../src/theme';
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import NavigationLoader from '../src/components/NavigationLoader';
import { LanguageProvider } from '../src/contexts/LanguageContext';
import { NavigationProvider } from '../src/contexts/NavigationContext';

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/logo-mondesa.png" type="image/png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <Meta />
                <Links />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function Root() {
    return (
        <HelmetProvider>
            <LanguageProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavigationProvider>
                        <Navbar />
                        <NavigationLoader>
                            <Outlet />
                        </NavigationLoader>
                        <Footer />
                    </NavigationProvider>
                </ThemeProvider>
            </LanguageProvider>
        </HelmetProvider>
    );
}
