import { Box, Container, Grid, Typography, Link, Divider, useTheme, IconButton, Stack, alpha } from '@mui/material';
import { GitHub, Twitter, LinkedIn, Code, Favorite } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'light' 
          ? alpha(theme.palette.primary.main, 0.03)
          : alpha(theme.palette.background.paper, 0.2),
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <GitHub sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h6" color="text.primary" fontWeight={700}>
                GitHub Info Hub
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3, maxWidth: 300 }}>
              Your comprehensive guide to all things GitHub, from basic commands to advanced features.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton 
                href="https://github.com" 
                target="_blank" 
                aria-label="GitHub"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { 
                    color: theme.palette.primary.main,
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                href="https://twitter.com" 
                target="_blank" 
                aria-label="Twitter"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { 
                    color: '#1DA1F2',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                href="https://linkedin.com" 
                target="_blank" 
                aria-label="LinkedIn"
                sx={{ 
                  color: theme.palette.text.secondary,
                  '&:hover': { 
                    color: '#0A66C2',
                    transform: 'translateY(-3px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              <Link 
                href="/" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Home
              </Link>
              <Link 
                href="/commands" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                GitHub Commands
              </Link>
              <Link 
                href="/features" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                GitHub Features
              </Link>
            </Stack>
          </Grid>
          
          <Grid item xs={12} sm={2}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Resources
            </Typography>
            <Stack spacing={1.5}>
              <Link 
                href="/blogs" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Famous Blogs
              </Link>
              <Link 
                href="/tutorials" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Tutorials & Guides
              </Link>
              <Link 
                href="https://docs.github.com" 
                target="_blank" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                Official GitHub Docs
              </Link>
              <Link 
                href="https://github.blog" 
                target="_blank" 
                color="text.secondary" 
                sx={{ 
                  textDecoration: 'none',
                  '&:hover': { color: theme.palette.primary.main },
                  transition: 'color 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                GitHub Blog
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle2" color="text.primary" fontWeight={600} gutterBottom>
              Subscribe to Updates
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Get the latest GitHub tips, tutorials, and news delivered to your inbox.
            </Typography>
            <Box 
              component="form" 
              sx={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: `1px solid ${alpha(theme.palette.divider, 0.2)}`,
                  backgroundColor: alpha(theme.palette.background.paper, 0.5),
                  color: theme.palette.text.primary,
                  fontSize: '0.875rem',
                  width: '100%',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: theme.palette.primary.main,
                  color: 'white',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                Subscribe
              </button>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, opacity: 0.1 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} GitHub Info Hub. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 } }}>
            <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
              Made with <Favorite sx={{ mx: 0.5, fontSize: '0.875rem', color: theme.palette.error.main }} /> and <Code sx={{ mx: 0.5, fontSize: '0.875rem', color: theme.palette.primary.main }} />
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 