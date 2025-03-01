import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  useTheme,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Code as CodeIcon,
  BugReport as IssuesIcon,
  Autorenew as ActionsIcon,
  Language as PagesIcon,
  Security as SecurityIcon,
  Api as ApiIcon,
} from '@mui/icons-material';
import { JSX } from 'react';

interface FeatureSection {
  id: string;
  title: string;
  icon: JSX.Element;
  description: string;
  details: {
    title: string;
    content: string;
  }[];
  imageUrl?: string;
}

const FeaturesPage = () => {
  const theme = useTheme();

  const featureSections: FeatureSection[] = [
    {
      id: 'repositories',
      title: 'Repositories',
      icon: <CodeIcon fontSize="large" />,
      description: 'GitHub repositories are where you store, track, and collaborate on your projects.',
      imageUrl: 'https://github.githubassets.com/images/modules/site/home-campaign/illu-repositories.png',
      details: [
        {
          title: 'What is a Repository?',
          content: 'A repository (or "repo") is a storage space where your project lives. It contains all of your project\'s files and stores each file\'s revision history. Repositories can have multiple collaborators and can be either public or private.',
        },
        {
          title: 'Creating a Repository',
          content: 'You can create a new repository on GitHub or by using the git init command in your local directory. When creating a repository on GitHub, you can add a README file, a .gitignore file, and a license.',
        },
        {
          title: 'Forking a Repository',
          content: 'A fork is a copy of a repository that allows you to freely experiment with changes without affecting the original project. Forks are commonly used to propose changes to someone else\'s project or to use someone else\'s project as a starting point for your own idea.',
        },
        {
          title: 'Repository Visibility',
          content: 'Repositories can be public or private. Public repositories are visible to anyone, while private repositories are only accessible to you and people you explicitly share access with.',
        },
      ],
    },
    {
      id: 'issues-prs',
      title: 'Issues & Pull Requests',
      icon: <IssuesIcon fontSize="large" />,
      description: 'Track work, report bugs, and collaborate on changes with issues and pull requests.',
      imageUrl: 'https://github.githubassets.com/images/modules/site/home-campaign/illu-pull-requests.png',
      details: [
        {
          title: 'Issues',
          content: 'Issues are used to track todos, bugs, feature requests, and more. They act as a shared space for discussing and collaborating on important topics. You can assign issues to team members, add labels for categorization, and link them to pull requests.',
        },
        {
          title: 'Pull Requests',
          content: 'Pull requests let you tell others about changes you\'ve pushed to a branch in a repository. Once a pull request is opened, you can discuss and review the potential changes with collaborators before your changes are merged into the base branch.',
        },
        {
          title: 'Code Reviews',
          content: 'Code reviews are a key part of the pull request process. Reviewers can comment on changes, approve them, or request further modifications before the changes are merged into the base branch.',
        },
        {
          title: 'Discussions',
          content: 'GitHub Discussions provides a collaborative communication forum for the community around an open source project. Community members can ask and answer questions, share updates, and have open-ended conversations.',
        },
      ],
    },
    {
      id: 'actions',
      title: 'GitHub Actions',
      icon: <ActionsIcon fontSize="large" />,
      description: 'Automate your software development workflows with GitHub Actions.',
      imageUrl: 'https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png',
      details: [
        {
          title: 'What are GitHub Actions?',
          content: 'GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.',
        },
        {
          title: 'Workflows',
          content: 'A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.',
        },
        {
          title: 'Marketplace',
          content: 'The GitHub Marketplace is a central location to find, share, and use actions built by the GitHub community. You can find actions to help with continuous integration, deployment, code quality, security, and more.',
        },
        {
          title: 'Self-hosted Runners',
          content: 'Self-hosted runners offer more control of hardware, operating system, and software tools than GitHub-hosted runners provide. With self-hosted runners, you can create custom hardware configurations that meet your needs.',
        },
      ],
    },
    {
      id: 'pages',
      title: 'GitHub Pages',
      icon: <PagesIcon fontSize="large" />,
      description: 'Host your website directly from a GitHub repository.',
      imageUrl: 'https://github.githubassets.com/images/modules/site/home-campaign/illu-discussions.png',
      details: [
        {
          title: 'What is GitHub Pages?',
          content: 'GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.',
        },
        {
          title: 'Setting Up GitHub Pages',
          content: 'You can create a GitHub Pages site from a new or existing repository. You can publish your site from the main branch, the gh-pages branch, or a specific folder in the main branch.',
        },
        {
          title: 'Custom Domains',
          content: 'You can set up a custom domain for your GitHub Pages site to make your website available at a domain name of your choice, rather than the default github.io domain.',
        },
        {
          title: 'Jekyll Integration',
          content: 'GitHub Pages is integrated with Jekyll, a static site generator that makes it easy to create a beautiful website. Jekyll takes your content written in Markdown files, passes it through templates, and generates a complete static website.',
        },
      ],
    },
    {
      id: 'security',
      title: 'Security Features',
      icon: <SecurityIcon fontSize="large" />,
      description: 'Keep your code secure with GitHub\'s security features.',
      imageUrl: 'https://github.githubassets.com/images/modules/site/home-campaign/illu-security.png',
      details: [
        {
          title: 'Dependabot',
          content: 'Dependabot helps you keep your dependencies up-to-date by automatically creating pull requests when new versions of your dependencies are released. It also alerts you to known security vulnerabilities in your dependencies.',
        },
        {
          title: 'Code Scanning',
          content: 'Code scanning is a feature that allows you to analyze the code in a GitHub repository to find security vulnerabilities and coding errors. It uses CodeQL, a semantic code analysis engine, to identify vulnerabilities.',
        },
        {
          title: 'Secret Scanning',
          content: 'Secret scanning automatically scans repositories for known types of secrets, such as API keys, authentication tokens, and private keys, to prevent fraudulent use of credentials that were accidentally committed.',
        },
        {
          title: 'Security Advisories',
          content: 'Security advisories allow repository maintainers to privately discuss and fix security vulnerabilities in their code before disclosing them publicly. Once the vulnerability is fixed, the advisory can be published to alert users.',
        },
      ],
    },
    {
      id: 'integrations',
      title: 'Integrations & API',
      icon: <ApiIcon fontSize="large" />,
      description: 'Extend GitHub\'s functionality with integrations and the GitHub API.',
      imageUrl: 'https://github.githubassets.com/images/modules/site/home-campaign/illu-codespaces.png',
      details: [
        {
          title: 'GitHub Marketplace',
          content: 'The GitHub Marketplace is a platform for developers to buy and sell applications that extend and improve your workflow. You can find tools for continuous integration, project management, code quality, monitoring, and more.',
        },
        {
          title: 'GitHub API',
          content: 'The GitHub API provides programmatic access to GitHub data and functionality. You can use the API to create and manage repositories, branches, issues, pull requests, and more.',
        },
        {
          title: 'Webhooks',
          content: 'Webhooks allow you to build or set up integrations that subscribe to certain events on GitHub. When one of those events is triggered, GitHub sends an HTTP POST payload to the webhook\'s configured URL.',
        },
        {
          title: 'GitHub Apps',
          content: 'GitHub Apps are the officially recommended way to integrate with GitHub. They can be installed directly on organizations and user accounts and granted access to specific repositories. They come with granular permissions and built-in webhooks.',
        },
      ],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          GitHub Features
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Explore the powerful features that make GitHub the world's leading software development platform.
        </Typography>

        {featureSections.map((section, index) => (
          <Box key={section.id} sx={{ mb: 6 }}>
            {index > 0 && <Divider sx={{ mb: 6 }} />}
            
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: index % 2 === 0 ? 1 : 2 }}>
                <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 1, color: 'primary.main' }}>{section.icon}</Box>
                  {section.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {section.description}
                </Typography>
                
                {section.details.map((detail) => (
                  <Accordion key={detail.title} sx={{ mb: 1 }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${section.id}-${detail.title}-content`}
                      id={`${section.id}-${detail.title}-header`}
                    >
                      <Typography variant="subtitle1">{detail.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2">{detail.content}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Grid>
              
              <Grid item xs={12} md={6} order={{ xs: 1, md: index % 2 === 0 ? 2 : 1 }}>
                {section.imageUrl && (
                  <Card elevation={3}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={section.imageUrl}
                      alt={section.title}
                      sx={{
                        objectFit: 'cover',
                        borderRadius: 1,
                      }}
                    />
                  </Card>
                )}
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FeaturesPage; 