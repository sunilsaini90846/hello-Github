import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  TextField,
  InputAdornment,
  Chip,
  Divider,
  Avatar,
  Link as MuiLink,
  Paper,
  useTheme,
} from '@mui/material';
import {
  Search as SearchIcon,
  OpenInNew as ExternalLinkIcon,
  GitHub as GitHubIcon,
  Bookmark as BookmarkIcon,
  Star as StarIcon,
} from '@mui/icons-material';

interface BlogPost {
  id: string;
  title: string;
  author: {
    name: string;
    avatar?: string;
  };
  date: string;
  summary: string;
  imageUrl: string;
  url: string;
  source: string;
  tags: string[];
  featured?: boolean;
}

const BlogsPage = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'GitHub Actions: Supercharge Your Workflow Automation',
      author: {
        name: 'GitHub Blog',
        avatar: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      },
      date: '2023-05-15',
      summary: 'Learn how to automate your development workflow with GitHub Actions. This comprehensive guide covers everything from basic concepts to advanced use cases.',
      imageUrl: 'https://github.blog/wp-content/uploads/2022/11/GitHub-Actions-Update-social.png?fit=1200%2C630',
      url: 'https://github.blog/2022-02-02-build-ci-cd-pipeline-github-actions-four-steps/',
      source: 'GitHub Blog',
      tags: ['CI/CD', 'Automation', 'DevOps'],
      featured: true,
    },
    {
      id: '2',
      title: 'Mastering Git Branching Strategies',
      author: {
        name: 'Atlassian',
        avatar: 'https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/apple-touch-icon-152x152.png',
      },
      date: '2023-04-10',
      summary: 'Explore different Git branching strategies like Git Flow, GitHub Flow, and Trunk-Based Development. Learn which one is right for your team and project.',
      imageUrl: 'https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f8-4bd4-9d10-d05f9d3b696d/hero.svg?cdnVersion=1055',
      url: 'https://www.atlassian.com/git/tutorials/comparing-workflows',
      source: 'Atlassian Git Tutorials',
      tags: ['Git', 'Branching', 'Workflow'],
    },
    {
      id: '3',
      title: 'GitHub Copilot: Your AI Pair Programmer',
      author: {
        name: 'Scott Hanselman',
        avatar: 'https://www.hanselman.com/images/scott-hanselman-2021-avatar.jpg',
      },
      date: '2023-06-20',
      summary: 'Discover how GitHub Copilot can help you write better code faster. This article explores the capabilities, limitations, and ethical considerations of AI-assisted coding.',
      imageUrl: 'https://github.blog/wp-content/uploads/2023/05/GitHub-Copilot-X-Social.png?fit=1200%2C630',
      url: 'https://www.hanselman.com/blog/github-copilot-is-the-most-impressive-thing-ive-seen-in-code-tooling-since-intellisense',
      source: 'Scott Hanselman\'s Blog',
      tags: ['AI', 'Productivity', 'Tools'],
      featured: true,
    },
    {
      id: '4',
      title: 'Advanced Git Commands You Should Know',
      author: {
        name: 'CSS-Tricks',
        avatar: 'https://css-tricks.com/apple-touch-icon.png',
      },
      date: '2023-03-05',
      summary: 'Take your Git skills to the next level with these advanced commands. Learn about rebasing, cherry-picking, reflog, and more to become a Git power user.',
      imageUrl: 'https://css-tricks.com/wp-content/uploads/2020/11/git-pull.png',
      url: 'https://css-tricks.com/advanced-git-commands-you-should-know/',
      source: 'CSS-Tricks',
      tags: ['Git', 'Commands', 'Advanced'],
    },
    {
      id: '5',
      title: 'GitHub Security Best Practices',
      author: {
        name: 'Snyk',
        avatar: 'https://res.cloudinary.com/snyk/image/upload/v1537345894/press-kit/brand/avatar-transparent.png',
      },
      date: '2023-07-12',
      summary: 'Secure your GitHub repositories with these essential security best practices. Learn about dependency scanning, secret detection, and access control.',
      imageUrl: 'https://snyk.io/wp-content/uploads/GitHub-security-best-practices-1.png',
      url: 'https://snyk.io/blog/github-security-best-practices/',
      source: 'Snyk Blog',
      tags: ['Security', 'Best Practices', 'DevSecOps'],
    },
    {
      id: '6',
      title: 'Building a Personal Portfolio with GitHub Pages',
      author: {
        name: 'Dev.to',
        avatar: 'https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png',
      },
      date: '2023-02-18',
      summary: 'Create a stunning personal portfolio website using GitHub Pages. This step-by-step guide shows you how to showcase your projects and skills for free.',
      imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0FRJGdyZ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg',
      url: 'https://dev.to/github/how-to-create-a-github-profile-readme-jha',
      source: 'Dev.to',
      tags: ['GitHub Pages', 'Portfolio', 'Web Development'],
    },
    {
      id: '7',
      title: 'Effective Pull Request Reviews',
      author: {
        name: 'Thoughtbot',
        avatar: 'https://thoughtbot.com/assets/thoughtbot-signet-9d5a8a20c6c9e6cfa1e8a7c646a1f9f6c868b6bf.svg',
      },
      date: '2023-05-30',
      summary: 'Learn how to conduct effective code reviews that improve code quality and foster team collaboration. This guide covers best practices for both reviewers and authors.',
      imageUrl: 'https://images.thoughtbot.com/blog-vellum-image-uploads/lpTEBRATRgCMvQIU9U6D_code-review.jpg',
      url: 'https://thoughtbot.com/blog/effective-code-reviews',
      source: 'Thoughtbot Blog',
      tags: ['Code Review', 'Collaboration', 'Best Practices'],
    },
    {
      id: '8',
      title: 'GitHub for Open Source Maintainers',
      author: {
        name: 'Open Source Guides',
        avatar: 'https://opensource.guide/assets/images/illos/beginners.svg',
      },
      date: '2023-04-25',
      summary: 'Discover best practices for maintaining open source projects on GitHub. Learn how to manage contributions, build community, and ensure project sustainability.',
      imageUrl: 'https://opensource.guide/assets/images/cards/maintaining.png',
      url: 'https://opensource.guide/best-practices/',
      source: 'Open Source Guides',
      tags: ['Open Source', 'Community', 'Maintainer'],
    },
  ];

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter blog posts based on search query and selected tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  // Featured posts
  const featuredPosts = filteredPosts.filter(post => post.featured);
  // Regular posts
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Famous Blogs & Resources
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Discover popular GitHub-related blogs, articles, and learning resources.
        </Typography>
        
        {/* Search and Filter */}
        <Paper sx={{ p: 2, mb: 4 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={handleSearchChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {allTags.map(tag => (
                  <Chip
                    key={tag}
                    label={tag}
                    clickable
                    color={selectedTag === tag ? 'primary' : 'default'}
                    onClick={() => handleTagClick(tag)}
                    size="small"
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon sx={{ mr: 1, color: 'primary.main' }} />
              Featured Articles
            </Typography>
            <Grid container spacing={4}>
              {featuredPosts.map(post => (
                <Grid item key={post.id} xs={12} md={6}>
                  <Card sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: `1px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[3],
                  }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.imageUrl}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar src={post.author.avatar} alt={post.author.name} sx={{ width: 24, height: 24, mr: 1 }} />
                          <Typography variant="subtitle2" color="text.secondary">
                            {post.author.name}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          {post.date}
                        </Typography>
                      </Box>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {post.summary}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {post.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            onClick={() => handleTagClick(tag)}
                            clickable
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        endIcon={<ExternalLinkIcon />}
                        component={MuiLink}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ ml: 'auto' }}
                      >
                        Read on {post.source}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        
        {/* Regular Posts */}
        {regularPosts.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
              <BookmarkIcon sx={{ mr: 1, color: 'primary.main' }} />
              All Articles
            </Typography>
            <Grid container spacing={3}>
              {regularPosts.map(post => (
                <Grid item key={post.id} xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.imageUrl}
                      alt={post.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar src={post.author.avatar} alt={post.author.name} sx={{ width: 20, height: 20, mr: 1 }} />
                          <Typography variant="caption" color="text.secondary">
                            {post.author.name}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          {post.date}
                        </Typography>
                      </Box>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" paragraph>
                        {post.summary.length > 120 ? `${post.summary.substring(0, 120)}...` : post.summary}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                        {post.tags.map(tag => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            onClick={() => handleTagClick(tag)}
                            clickable
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button 
                        size="small" 
                        endIcon={<ExternalLinkIcon />}
                        component={MuiLink}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ ml: 'auto' }}
                      >
                        Read More
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        
        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h6">
              No blog posts found matching your search criteria.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Try adjusting your search or filters.
            </Typography>
          </Box>
        )}
        
        {/* Additional Resources */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Additional Resources
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <GitHubIcon sx={{ mr: 1 }} />
                    Official GitHub Resources
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://github.blog/" target="_blank" rel="noopener noreferrer">
                        GitHub Blog
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">
                        GitHub Docs
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://github.com/topics" target="_blank" rel="noopener noreferrer">
                        GitHub Topics
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://github.com/features" target="_blank" rel="noopener noreferrer">
                        GitHub Features
                      </MuiLink>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <BookmarkIcon sx={{ mr: 1 }} />
                    Learning Platforms
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://lab.github.com/" target="_blank" rel="noopener noreferrer">
                        GitHub Learning Lab
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://www.atlassian.com/git/tutorials" target="_blank" rel="noopener noreferrer">
                        Atlassian Git Tutorials
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://www.pluralsight.com/paths/github" target="_blank" rel="noopener noreferrer">
                        Pluralsight GitHub Path
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://www.udemy.com/topic/github/" target="_blank" rel="noopener noreferrer">
                        Udemy GitHub Courses
                      </MuiLink>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarIcon sx={{ mr: 1 }} />
                    Community Resources
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://stackoverflow.com/questions/tagged/github" target="_blank" rel="noopener noreferrer">
                        Stack Overflow GitHub Tag
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://dev.to/t/github" target="_blank" rel="noopener noreferrer">
                        Dev.to GitHub Articles
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://github.community/" target="_blank" rel="noopener noreferrer">
                        GitHub Community Forum
                      </MuiLink>
                    </Box>
                    <Box component="li" sx={{ mb: 1 }}>
                      <MuiLink href="https://opensource.guide/" target="_blank" rel="noopener noreferrer">
                        Open Source Guides
                      </MuiLink>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogsPage; 