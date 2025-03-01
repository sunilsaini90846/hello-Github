import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  Box,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Avatar,
  Tooltip,
  Container,
  ListItemButton,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  GitHub as GitHubIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';

// Styled search component
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  transition: 'all 0.3s ease',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
}));

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Commands', path: '/commands' },
    { name: 'Features', path: '/features' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Tutorials', path: '/tutorials' },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', position: 'relative' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
          <GitHubIcon sx={{ mr: 1 }} />
          GitHub Info Hub
        </Typography>
        <IconButton onClick={handleDrawerToggle} edge="end">
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ p: 2 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.name}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{ 
              borderRadius: 2, 
              mb: 1,
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              }
            }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ position: 'absolute', bottom: 0, width: '100%', p: 2 }}>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © 2023 GitHub Info Hub
          </Typography>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <StyledAppBar position="sticky" color={darkMode ? 'default' : 'primary'} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              <Avatar 
                sx={{ 
                  mr: 1.5, 
                  bgcolor: theme.palette.primary.main,
                  width: 36,
                  height: 36,
                }}
              >
                <GitHubIcon fontSize="small" />
              </Avatar>
              GitHub Info Hub
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    component={Link}
                    to={item.path}
                    sx={{ 
                      color: theme.palette.mode === 'dark' ? 'white' : 'inherit',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.common.white, 0.1),
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Box>
            )}

            <Tooltip title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
              <IconButton 
                sx={{ 
                  ml: 1,
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'rotate(30deg)' }
                }} 
                onClick={toggleDarkMode} 
                color="inherit"
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Header; 