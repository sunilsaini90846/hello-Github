import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Paper,
  useTheme,
  useMediaQuery,
  ListItemButton,
} from '@mui/material';
import {
  Home as HomeIcon,
  Code as CodeIcon,
  Star as FeaturesIcon,
  AttachMoney as PricingIcon,
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
        width: 240,
        flexShrink: 0,
        borderRight: `1px solid ${theme.palette.divider}`,
        height: '100%',
        overflow: 'auto',
      }}
    >
      <Box sx={{ p: 2 }}>
        <List component="nav">
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === '/'}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>

          <ListItemButton
            onClick={handleCommandsClick}
            selected={location.pathname.startsWith('/commands')}
          >
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub Commands" />
            {commandsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={commandsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {commandCategories.map((category) => (
                <ListItemButton
                  key={category.name}
                  component={Link}
                  to={category.path}
                  selected={location.pathname === category.path}
                  sx={{ paddingLeft: 4 }}
                >
                  <ListItemIcon>{category.icon}</ListItemIcon>
                  <ListItemText primary={category.name} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton
            component={Link}
            to="/features"
            selected={location.pathname === '/features'}
          >
            <ListItemIcon>
              <FeaturesIcon />
            </ListItemIcon>
            <ListItemText primary="GitHub Features" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/pricing"
            selected={location.pathname === '/pricing'}
          >
            <ListItemIcon>
              <PricingIcon />
            </ListItemIcon>
            <ListItemText primary="Pricing & Tiers" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/blogs"
            selected={location.pathname === '/blogs'}
          >
            <ListItemIcon>
              <BlogsIcon />
            </ListItemIcon>
            <ListItemText primary="Famous Blogs" />
          </ListItemButton>

          <ListItemButton
            component={Link}
            to="/tutorials"
            selected={location.pathname === '/tutorials'}
          >
            <ListItemIcon>
              <TutorialsIcon />
            </ListItemIcon>
            <ListItemText primary="Tutorials & Guides" />
          </ListItemButton>
        </List>
      </Box>
      <Divider />
    </Paper>
  );
};

export default Sidebar; 