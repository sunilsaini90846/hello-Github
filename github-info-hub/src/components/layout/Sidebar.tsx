import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
  ListItemButton,
  Typography,
  alpha,
  Tooltip,
} from '@mui/material';
import {
  Home as HomeIcon,
  Code as CodeIcon,
  Star as FeaturesIcon,
  Book as BlogsIcon,
  School as TutorialsIcon,
  ExpandLess,
  ExpandMore,
  Terminal,
  Merge,
  Cloud,
  Undo,
  Settings,
} from '@mui/icons-material';

const Sidebar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [commandsOpen, setCommandsOpen] = useState(false);

  const handleCommandsClick = () => {
    setCommandsOpen(!commandsOpen);
  };

  // If on mobile, don't render the sidebar as it's in the drawer
  if (isMobile) {
    return null;
  }

  const commandCategories = [
    { name: 'Basic Commands', path: '/commands/basic', icon: <Terminal fontSize="small" /> },
    { name: 'Branching & Merging', path: '/commands/branching', icon: <Merge fontSize="small" /> },
    { name: 'Remote Repositories', path: '/commands/remote', icon: <Cloud fontSize="small" /> },
    { name: 'Undoing Changes', path: '/commands/undoing', icon: <Undo fontSize="small" /> },
    { name: 'Advanced Commands', path: '/commands/advanced', icon: <Settings fontSize="small" /> },
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        width: 260,
        flexShrink: 0,
        borderRight: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        height: '100%',
        overflow: 'auto',
        background: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: 'blur(10px)',
        transition: 'width 0.3s ease',
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography 
          variant="subtitle2" 
          color="text.secondary" 
          sx={{ 
            textTransform: 'uppercase', 
            fontSize: '0.75rem', 
            fontWeight: 700,
            letterSpacing: '0.1em',
            mb: 2,
          }}
        >
          Navigation
        </Typography>
        <List component="nav" sx={{ px: 0 }}>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === '/'}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.15),
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton
            onClick={handleCommandsClick}
            selected={location.pathname.startsWith('/commands')}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.15),
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub Commands" />
            {commandsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={commandsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {commandCategories.map((category) => (
                <Tooltip key={category.name} title={category.name} placement="right" arrow>
                  <ListItemButton
                    component={Link}
                    to={category.path}
                    selected={location.pathname === category.path}
                    sx={{
                      pl: 4,
                      py: 1,
                      borderRadius: 2,
                      ml: 2,
                      mb: 0.5,
                      '&.Mui-selected': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        color: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: alpha(theme.palette.primary.main, 0.15),
                        },
                        '& .MuiListItemIcon-root': {
                          color: theme.palette.primary.main,
                        },
                      },
                      '&:hover': {
                        backgroundColor: alpha(theme.palette.primary.main, 0.05),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 30 }}>{category.icon}</ListItemIcon>
                    <ListItemText 
                      primary={category.name} 
                      primaryTypographyProps={{ 
                        fontSize: '0.875rem',
                        fontWeight: location.pathname === category.path ? 600 : 400,
                      }} 
                    />
                  </ListItemButton>
                </Tooltip>
              ))}
            </List>
          </Collapse>

          <ListItemButton
            component={Link}
            to="/features"
            selected={location.pathname === '/features'}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.15),
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <FeaturesIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub Features" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/blogs"
            selected={location.pathname === '/blogs'}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.15),
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <BlogsIcon />
            </ListItemIcon>
            <ListItemText primary="Famous Blogs" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/tutorials"
            selected={location.pathname === '/tutorials'}
            sx={{
              borderRadius: 2,
              mb: 1,
              '&.Mui-selected': {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.15),
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.main,
                },
              },
              '&:hover': {
                backgroundColor: alpha(theme.palette.primary.main, 0.05),
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <TutorialsIcon />
            </ListItemIcon>
            <ListItemText primary="Tutorials & Guides" />
          </ListItemButton>
        </List>
      </Box>
      <Divider sx={{ mt: 2, opacity: 0.1 }} />
      <Box sx={{ p: 3 }}>
        <Typography 
          variant="caption" 
          color="text.secondary" 
          sx={{ 
            display: 'block',
            textAlign: 'center',
          }}
        >
          GitHub Info Hub v1.0
        </Typography>
      </Box>
    </Paper>
  );
};

export default Sidebar; 