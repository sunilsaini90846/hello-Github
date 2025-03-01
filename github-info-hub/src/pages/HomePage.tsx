import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Paper,
  InputAdornment,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  Code as CodeIcon,
  Star as FeaturesIcon,
  AttachMoney as PricingIcon,
  Book as BlogsIcon,
  School as TutorialsIcon,
} from '@mui/icons-material';

const HomePage = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search functionality
    console.log('Search for:', searchQuery);
  };

  const features = [
    {
      title: 'GitHub Commands',
      description: 'Learn all Git commands from basic to advanced, with examples and use cases.',
      icon: <CodeIcon fontSize="large" />,
      link: '/commands',
    },
    {
      title: 'GitHub Features',
      description: 'Explore GitHub features like repositories, issues, pull requests, actions, and more.',
      icon: <FeaturesIcon fontSize="large" />,
      link: '/features',
    },
    {
      title: 'Pricing & Tiers',
      description: 'Compare different GitHub plans and find the one that suits your needs.',
      icon: <PricingIcon fontSize="large" />,
      link: '/pricing',
    },
    {
      title: 'Famous Blogs',
      description: 'Discover popular blogs and resources to enhance your GitHub knowledge.',
      icon: <BlogsIcon fontSize="large" />,
      link: '/blogs',
    },
    {
      title: 'Tutorials & Guides',
      description: 'Step-by-step tutorials for beginners and advanced users.',
      icon: <TutorialsIcon fontSize="large" />,
      link: '/tutorials',
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        sx={{
          pt: 8,
          pb: 6,
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          color="text.primary"
          gutterBottom
        >
          GitHub Info Hub
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Your comprehensive guide to all things GitHub
        </Typography>

        {/* Search Bar */}
        <Box
          component="form"
          onSubmit={handleSearchSubmit}
          sx={{
            mt: 4,
            mb: 6,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', sm: '70%', md: '50%' },
            }}
          >
            <TextField
              fullWidth
              placeholder="Search for commands, features, or tutorials..."
              value={searchQuery}
              onChange={handleSearchChange}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{ ml: 1, flex: 1 }}
            />
            <Button type="submit" sx={{ p: '10px' }}>
              Search
            </Button>
          </Paper>
        </Box>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Introduction to Git and GitHub
        </Typography>
        <Typography variant="body1" paragraph>
          Git is a distributed version control system that helps developers track changes in their code, collaborate with others, and manage different versions of their projects. It was created by Linus Torvalds in 2005 for the development of the Linux kernel.
        </Typography>
        <Typography variant="body1" paragraph>
          GitHub is a web-based platform built around Git that provides hosting for software development and version control. It offers all of Git's distributed version control and source code management functionality along with its own features, such as access control, bug tracking, feature requests, task management, continuous integration, and wikis for every project.
        </Typography>
        <Typography variant="body1" paragraph>
          Together, Git and GitHub have revolutionized how developers work together on projects, making collaboration easier and more efficient than ever before.
        </Typography>
      </Box>

      {/* Features Section */}
      <Typography variant="h4" gutterBottom>
        Key Features
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {features.map((feature) => (
          <Grid item key={feature.title} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.shadows[10],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    color: 'primary.main',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography gutterBottom variant="h5" component="h2" align="center">
                  {feature.title}
                </Typography>
                <Typography>{feature.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={feature.link}
                  sx={{ ml: 'auto', mr: 'auto' }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          p: 6,
          borderRadius: 2,
          textAlign: 'center',
          mb: 6,
          boxShadow: theme.shadows[3],
        }}
      >
        <Typography variant="h5" gutterBottom>
          Ready to master GitHub?
        </Typography>
        <Typography variant="body1" paragraph>
          Start exploring our comprehensive guides and tutorials to enhance your GitHub skills.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/commands"
          size="large"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage; 