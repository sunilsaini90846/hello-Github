import { Box, Container, Grid, Typography, Link, Divider, useTheme } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'light' ? '#f5f5f5' : '#333',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              GitHub Info Hub
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Your comprehensive guide to all things GitHub, from basic commands to advanced features.
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              <Link href="https://github.com" target="_blank" color="inherit">
                <GitHub />
              </Link>
              <Link href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </Link>
              <Link href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" color="inherit" display="block" sx={{ mb: 1 }}>
              Home
            </Link>
            <Link href="/commands" color="inherit" display="block" sx={{ mb: 1 }}>
              GitHub Commands
            </Link>
            <Link href="/features" color="inherit" display="block" sx={{ mb: 1 }}>
              GitHub Features
            </Link>
            <Link href="/pricing" color="inherit" display="block" sx={{ mb: 1 }}>
              Pricing & Tiers
            </Link>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Resources
            </Typography>
            <Link href="/blogs" color="inherit" display="block" sx={{ mb: 1 }}>
              Famous Blogs
            </Link>
            <Link href="/tutorials" color="inherit" display="block" sx={{ mb: 1 }}>
              Tutorials & Guides
            </Link>
            <Link href="https://docs.github.com" target="_blank" color="inherit" display="block" sx={{ mb: 1 }}>
              Official GitHub Docs
            </Link>
            <Link href="https://github.blog" target="_blank" color="inherit" display="block" sx={{ mb: 1 }}>
              GitHub Blog
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 2 }} />
        
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {currentYear}
          {' GitHub Info Hub. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 