import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { HOME_PATH } from '../routes';
import { Menu, X } from '../utils/icons';
import { NAVIGATION_LINKS } from '../constants/translations';
import { UseTranslation } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { t } = UseTranslation();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar position="fixed" color="inherit" elevation={0} sx={{ bgcolor: 'background.default', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box component={RouterLink} to={HOME_PATH} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Box component="img" src="/logo.svg" alt="MonDesa Logo" sx={{ height: 40, mr: 1 }} />
              <Typography
                variant="h6"
                sx={{
                  color: 'text.primary',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                MonDesa
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
            {NAVIGATION_LINKS.map((link) => (
              link.isButton ? (
                <Button
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  variant="contained"
                  color="primary"
                  sx={{ fontSize: '0.9rem' }}
                >
                  {t(link.titleKey)}
                </Button>
              ) : (
                <Button
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{ fontSize: '0.9rem' }}
                >
                  {t(link.titleKey)}
                </Button>
              )
            ))}
            <LanguageSelector />
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
            <LanguageSelector />
            <IconButton
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ p: 1 }}
            >
              <Menu size={24} />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                width: '75%',
                maxWidth: 300,
                bgcolor: 'background.default',
                borderTopLeftRadius: 16,
                borderBottomLeftRadius: 16,
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
              <Box component={RouterLink} to={HOME_PATH} sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} onClick={closeDrawer}>
                <Box component="img" src="/logo.svg" alt="MonDesa Logo" sx={{ height: 32, mr: 1 }} />
                <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  MonDesa
                </Typography>
              </Box>
              <IconButton onClick={toggleDrawer(false)} aria-label="close menu" sx={{ p: 1 }}>
                <X size={24} />
              </IconButton>
            </Box>

            <List sx={{ pt: 2 }}>
              {NAVIGATION_LINKS.map((link) => (
                <ListItem key={link.path} disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={link.path}
                    onClick={closeDrawer}
                    sx={{
                      py: 2,
                      ...(link.isButton && {
                        mx: 2,
                        my: 1,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 2,
                        '&:hover': { bgcolor: 'primary.dark' }
                      })
                    }}
                  >
                    <ListItemText
                      primary={t(link.titleKey)}
                      primaryTypographyProps={{
                        sx: {
                          fontWeight: link.isButton ? 600 : 500,
                          textAlign: link.isButton ? 'center' : 'inherit',
                        }
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;