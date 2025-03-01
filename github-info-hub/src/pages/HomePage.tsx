import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  useTheme, 
  alpha, 
  Stack,
  Avatar,
  Chip,
  Divider
} from '@mui/material';
import { 
  Code as CodeIcon, 
  GitHub as GitHubIcon, 
  Star as StarIcon, 
  Paid as PaidIcon, 
  MenuBook as MenuBookIcon, 
  School as SchoolIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'GitHub Commands',
      description: 'Learn essential Git commands for effective version control',
      icon: <CodeIcon />,
      link: '/commands',
      color: theme.palette.primary.main
    },
    {
      title: 'GitHub Features',
      description: 'Explore powerful features that make GitHub the leading platform',
      icon: <GitHubIcon />,
      link: '/features',
      color: theme.palette.secondary.main
    },
    {
      title: 'Pricing & Tiers',
      description: 'Compare different GitHub plans to find what suits your needs',
      icon: <PaidIcon />,
      link: '/pricing',
      color: '#10b981' // emerald color
    },
    {
      title: 'Famous Blogs',
      description: 'Discover popular blogs and resources about GitHub',
      icon: <MenuBookIcon />,
      link: '/blogs',
      color: '#8b5cf6' // violet color
    },
    {
      title: 'Tutorials & Guides',
      description: 'Step-by-step guides to master GitHub workflows',
      icon: <SchoolIcon />,
      link: '/tutorials',
      color: '#f59e0b' // amber color
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Senior Developer',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: 'This GitHub resource has been invaluable for our team. The command references and tutorials have helped us streamline our workflow significantly.'
    },
    {
      name: 'Sarah Chen',
      role: 'DevOps Engineer',
      avatar: 'https://i.pravatar.cc/150?img=5',
      content: 'The pricing comparison helped us choose the right GitHub plan for our startup. Saved us both time and money!'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Open Source Contributor',
      avatar: 'https://i.pravatar.cc/150?img=3',
      content: 'As someone new to open source, the tutorials section provided exactly what I needed to start contributing confidently.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          background: theme.palette.mode === 'dark' 
            ? `linear-gradient(to right, ${alpha(theme.palette.primary.dark, 0.8)}, ${alpha(theme.palette.primary.main, 0.4)})`
            : `linear-gradient(to right, ${alpha(theme.palette.primary.light, 0.1)}, ${alpha(theme.palette.primary.main, 0.05)})`,
        }}
      >
        {/* Background decoration */}
        <Box 
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: alpha(theme.palette.primary.main, 0.1),
            zIndex: 0
          }}
        />
        <Box 
          sx={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: alpha(theme.palette.secondary.main, 0.1),
            zIndex: 0
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box>
                <Chip 
                  label="Your GitHub Guide" 
                  size="small" 
                  color="primary" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    borderRadius: '16px',
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    color: theme.palette.primary.main,
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`
                  }} 
                />
                <Typography 
                  variant="h2" 
                  component="h1" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: theme.palette.mode === 'dark' 
                      ? 'linear-gradient(45deg, #fff, #ccc)' 
                      : `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 3
                  }}
                >
                  Master GitHub with Comprehensive Resources
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary" 
                  paragraph
                  sx={{ 
                    mb: 4,
                    maxWidth: 600,
                    lineHeight: 1.6,
                    fontSize: { xs: '1rem', md: '1.25rem' }
                  }}
                >
                  Your one-stop destination for everything GitHub - from basic commands to advanced features, pricing comparisons, and expert tutorials.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button 
                    component={RouterLink} 
                    to="/commands" 
                    variant="contained" 
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      py: 1.5,
                      px: 3,
                      borderRadius: '10px',
                      fontWeight: 600,
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                      '&:hover': {
                        transform: 'translateY(-3px)',
                        boxShadow: `0 12px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Explore Commands
                  </Button>
                  <Button 
                    component={RouterLink} 
                    to="/features" 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      py: 1.5,
                      px: 3,
                      borderRadius: '10px',
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        transform: 'translateY(-3px)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    View Features
                  </Button>
                </Stack>
                
                <Box sx={{ mt: 5, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 20, mr: 0.5, color: theme.palette.success.main }} />
                    Comprehensive Guides
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 20, mr: 0.5, color: theme.palette.success.main }} />
                    Up-to-date Information
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 20, mr: 0.5, color: theme.palette.success.main }} />
                    Beginner Friendly
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box 
                sx={{ 
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: 20,
                    bottom: 20,
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)}, ${alpha(theme.palette.secondary.main, 0.2)})`,
                    zIndex: 0
                  }
                }}
              >
                <Box
                  component="img"
                  src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png"
                  alt="GitHub Illustration"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '20px',
                    position: 'relative',
                    zIndex: 1,
                    boxShadow: `0 20px 40px ${alpha('#000', 0.2)}`,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                borderRadius: 2,
                backgroundColor: theme.palette.primary.main
              }
            }}
          >
            Explore Our Resources
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              mb: 2
            }}
          >
            Discover comprehensive guides and resources to help you master GitHub and enhance your development workflow.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 12px 30px ${alpha(feature.color, 0.15)}`,
                    borderColor: alpha(feature.color, 0.3)
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box 
                    sx={{ 
                      display: 'inline-flex',
                      p: 1.5,
                      borderRadius: '12px',
                      mb: 2,
                      backgroundColor: alpha(feature.color, 0.1),
                      color: feature.color
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ mb: 3 }}>
                    {feature.description}
                  </Typography>
                  <Button
                    component={RouterLink}
                    to={feature.link}
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      mt: 'auto',
                      color: feature.color,
                      '&:hover': {
                        backgroundColor: alpha(feature.color, 0.1)
                      }
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box 
        sx={{ 
          py: 8, 
          background: theme.palette.mode === 'dark' 
            ? alpha(theme.palette.background.paper, 0.4)
            : alpha(theme.palette.primary.main, 0.03)
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  borderRadius: 2,
                  backgroundColor: theme.palette.secondary.main
                }
              }}
            >
              What Users Say
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{ 
                maxWidth: 700, 
                mx: 'auto',
                mb: 2
              }}
            >
              Hear from developers who have used our resources to enhance their GitHub knowledge and workflow.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: '16px',
                    p: 3,
                    boxShadow: theme.palette.mode === 'dark' 
                      ? `0 8px 32px ${alpha('#000', 0.2)}`
                      : `0 8px 32px ${alpha('#000', 0.05)}`,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'visible',
                    '&::before': {
                      content: '"""',
                      position: 'absolute',
                      top: -15,
                      left: 20,
                      fontSize: '5rem',
                      lineHeight: 1,
                      color: alpha(theme.palette.primary.main, 0.1),
                      fontFamily: 'serif',
                      fontWeight: 'bold'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                    <Typography 
                      variant="body1" 
                      paragraph 
                      sx={{ 
                        mb: 3,
                        fontStyle: 'italic',
                        color: theme.palette.text.secondary
                      }}
                    >
                      "{testimonial.content}"
                    </Typography>
                    
                    <Divider sx={{ my: 2, opacity: 0.1 }} />
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        sx={{ 
                          width: 50, 
                          height: 50,
                          border: `2px solid ${theme.palette.primary.main}`
                        }}
                      />
                      <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Card 
          sx={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            background: theme.palette.mode === 'dark' 
              ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${alpha(theme.palette.primary.main, 0.3)})`
              : `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.3)}`,
          }}
        >
          <Box 
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: 'url("https://github.githubassets.com/images/modules/site/home-campaign/bg-stars-1.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <CardContent sx={{ p: { xs: 4, md: 6 }, position: 'relative', zIndex: 1 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Typography 
                  variant="h3" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' }
                  }}
                >
                  Ready to Master GitHub?
                </Typography>
                <Typography 
                  variant="h6" 
                  paragraph
                  sx={{ 
                    color: alpha('#fff', 0.8),
                    maxWidth: 600,
                    mb: 4
                  }}
                >
                  Start exploring our comprehensive resources and take your GitHub skills to the next level.
                </Typography>
                <Button 
                  component={RouterLink} 
                  to="/commands" 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    py: 1.5,
                    px: 4,
                    backgroundColor: '#fff',
                    color: theme.palette.primary.main,
                    fontWeight: 600,
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: alpha('#fff', 0.9),
                      transform: 'translateY(-3px)',
                      boxShadow: `0 10px 20px ${alpha('#000', 0.2)}`
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Started Now
                </Button>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box 
                  component="img"
                  src="https://github.githubassets.com/images/modules/site/home-campaign/illu-copilot-editor.png"
                  alt="GitHub Copilot"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    transform: 'scale(1.2)',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default HomePage; 