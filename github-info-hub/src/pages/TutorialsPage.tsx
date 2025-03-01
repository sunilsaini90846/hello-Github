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
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  useTheme,
} from '@mui/material';
import {
  School as SchoolIcon,
  EmojiObjects as BeginnerIcon,
  Psychology as AdvancedIcon,
  Business as EnterpriseIcon,
  ArrowForward as ArrowIcon,
  CheckCircle as CheckIcon,
  OpenInNew as ExternalLinkIcon,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tutorials-tabpanel-${index}`}
      aria-labelledby={`tutorials-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

interface Tutorial {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'advanced' | 'enterprise';
  imageUrl: string;
  steps?: {
    title: string;
    content: string;
  }[];
  externalUrl?: string;
  source?: string;
}

const TutorialsPage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Sample tutorials data
  const tutorials: Tutorial[] = [
    // Beginner Tutorials
    {
      id: 'beginner-1',
      title: 'Getting Started with GitHub',
      description: 'Learn the basics of GitHub, including creating an account, setting up your profile, and understanding the GitHub interface.',
      level: 'beginner',
      imageUrl: 'https://github.blog/wp-content/uploads/2020/12/GitHub-desktop.png?fit=1200%2C630',
      steps: [
        {
          title: 'Create a GitHub Account',
          content: 'Go to github.com and sign up for a new account. Choose a username that represents you professionally, as it will be visible in your contributions.',
        },
        {
          title: 'Set Up Your Profile',
          content: 'Add a profile picture, bio, and other details to make your profile more complete. Consider creating a special README.md file for your profile to showcase your skills and projects.',
        },
        {
          title: 'Explore the GitHub Interface',
          content: 'Familiarize yourself with the GitHub dashboard, repositories, issues, pull requests, and other features. The top navigation bar provides access to notifications, creating new repositories, and your profile.',
        },
        {
          title: 'Install Git',
          content: 'Download and install Git from git-scm.com. This will allow you to use Git commands from your local machine to interact with GitHub repositories.',
        },
        {
          title: 'Configure Git',
          content: 'Set up your Git configuration with your name and email using the commands: git config --global user.name "Your Name" and git config --global user.email "your.email@example.com".',
        },
      ],
    },
    {
      id: 'beginner-2',
      title: 'Creating Your First Repository',
      description: 'Learn how to create a new repository, add files, make commits, and push changes to GitHub.',
      level: 'beginner',
      imageUrl: 'https://docs.github.com/assets/cb-303734/mw-1440/images/help/repository/repo-create.webp',
      steps: [
        {
          title: 'Create a New Repository on GitHub',
          content: 'Click the "+" icon in the top-right corner of GitHub and select "New repository". Give your repository a name, description, and choose whether it should be public or private.',
        },
        {
          title: 'Initialize with README',
          content: 'Check the option to initialize the repository with a README file. This creates an initial commit and makes it easier to clone the repository.',
        },
        {
          title: 'Clone the Repository',
          content: 'Copy the repository URL from the GitHub interface. Then, use the command git clone [URL] to create a local copy on your machine.',
        },
        {
          title: 'Add Files to Your Repository',
          content: 'Create or copy files into your local repository folder. Use git add . to stage all new files for commit.',
        },
        {
          title: 'Commit Your Changes',
          content: 'Use git commit -m "Your commit message" to commit the staged changes with a descriptive message explaining what you\'ve added or changed.',
        },
        {
          title: 'Push to GitHub',
          content: 'Use git push origin main to upload your local commits to the GitHub repository. Now your files are available online!',
        },
      ],
    },
    {
      id: 'beginner-3',
      title: 'Understanding GitHub Flow',
      description: 'Learn the GitHub Flow workflow for collaborating on projects, including branches, pull requests, and reviews.',
      level: 'beginner',
      imageUrl: 'https://docs.github.com/assets/cb-75044/mw-1440/images/help/pull_requests/pull-request-review-edit-branch.webp',
      steps: [
        {
          title: 'Create a Branch',
          content: 'Start by creating a new branch from the main branch using git checkout -b [branch-name]. This isolates your work from the main codebase.',
        },
        {
          title: 'Make Changes',
          content: 'Add, edit, or delete files in your branch. Use git add and git commit to save your changes locally.',
        },
        {
          title: 'Push Your Branch',
          content: 'Upload your branch to GitHub with git push origin [branch-name]. This makes your changes available for others to see and review.',
        },
        {
          title: 'Open a Pull Request',
          content: 'Go to the repository on GitHub and click "Compare & pull request" for your branch. Add a title and description explaining your changes.',
        },
        {
          title: 'Discuss and Review',
          content: 'Others can now review your code, leave comments, and suggest changes. Address any feedback by making additional commits to your branch.',
        },
        {
          title: 'Merge',
          content: 'Once your pull request is approved, it can be merged into the main branch. This incorporates your changes into the project.',
        },
      ],
    },
    
    // Advanced Tutorials
    {
      id: 'advanced-1',
      title: 'Advanced Git Techniques',
      description: 'Master advanced Git commands and techniques like rebasing, cherry-picking, and managing complex merge conflicts.',
      level: 'advanced',
      imageUrl: 'https://git-scm.com/images/branching-illustration@2x.png',
      steps: [
        {
          title: 'Interactive Rebasing',
          content: 'Use git rebase -i HEAD~[n] to rewrite, combine, or reorder your recent commits. This helps create a cleaner commit history before sharing your changes.',
        },
        {
          title: 'Cherry-Picking',
          content: 'Apply specific commits from one branch to another using git cherry-pick [commit-hash]. This is useful when you want to apply only certain changes from a feature branch.',
        },
        {
          title: 'Resolving Complex Merge Conflicts',
          content: 'Learn strategies for handling difficult merge conflicts, including using git mergetool and understanding conflict markers in the code.',
        },
        {
          title: 'Git Hooks',
          content: 'Set up custom scripts that run automatically on Git events like pre-commit or pre-push. These can enforce code quality standards or run tests before allowing commits.',
        },
        {
          title: 'Git Reflog',
          content: 'Use git reflog to recover lost commits or branches. This command shows a log of all reference updates in your repository, including commits that are no longer visible in git log.',
        },
      ],
    },
    {
      id: 'advanced-2',
      title: 'GitHub Actions CI/CD Pipeline',
      description: 'Build a complete CI/CD pipeline using GitHub Actions to automate testing, building, and deployment of your applications.',
      level: 'advanced',
      imageUrl: 'https://docs.github.com/assets/cb-25535/mw-1440/images/help/actions/learn-github-actions-workflow.webp',
      steps: [
        {
          title: 'Create a Workflow File',
          content: 'Add a .github/workflows/main.yml file to your repository. This YAML file defines when and how your automated processes will run.',
        },
        {
          title: 'Define Triggers',
          content: 'Configure events that trigger your workflow, such as pushes to specific branches, pull requests, or scheduled times using cron syntax.',
        },
        {
          title: 'Set Up Testing',
          content: 'Add steps to run your test suite automatically. GitHub Actions supports many testing frameworks and can report results directly in pull requests.',
        },
        {
          title: 'Build Your Application',
          content: 'Configure the workflow to build your application, creating artifacts that can be deployed or published.',
        },
        {
          title: 'Deploy to Staging/Production',
          content: 'Add deployment steps that trigger based on specific conditions, such as merges to the main branch or creation of tags/releases.',
        },
        {
          title: 'Notifications and Monitoring',
          content: 'Set up notifications for workflow successes or failures, and integrate with monitoring tools to track your deployments.',
        },
      ],
    },
    {
      id: 'advanced-3',
      title: 'GitHub Security Features',
      description: 'Learn how to use GitHub\'s advanced security features to protect your code and prevent vulnerabilities.',
      level: 'advanced',
      imageUrl: 'https://github.blog/wp-content/uploads/2020/09/github-sast-tool-social.png?fit=1200%2C630',
      steps: [
        {
          title: 'Dependabot Alerts and Updates',
          content: 'Enable Dependabot to automatically detect vulnerable dependencies and create pull requests to update them to secure versions.',
        },
        {
          title: 'Code Scanning with CodeQL',
          content: 'Set up CodeQL analysis to automatically find security vulnerabilities and coding errors in your code. Configure custom queries for your specific security concerns.',
        },
        {
          title: 'Secret Scanning',
          content: 'Enable GitHub\'s secret scanning to detect accidentally committed secrets like API keys, tokens, and passwords before they can be exploited.',
        },
        {
          title: 'Security Policies',
          content: 'Create a SECURITY.md file to provide security guidelines for your project, including how to report vulnerabilities and your disclosure policy.',
        },
        {
          title: 'Branch Protection Rules',
          content: 'Configure branch protection rules to enforce code review, passing status checks, and signed commits before changes can be merged to important branches.',
        },
      ],
    },
    
    // Enterprise Tutorials
    {
      id: 'enterprise-1',
      title: 'GitHub for Enterprise Teams',
      description: 'Best practices for using GitHub in large enterprise environments, including organization structure, permissions, and compliance.',
      level: 'enterprise',
      imageUrl: 'https://github.blog/wp-content/uploads/2019/01/Enterprise-Social-Card.png?fit=1200%2C630',
      steps: [
        {
          title: 'Organization Structure',
          content: 'Design an effective GitHub organization structure with teams that reflect your company\'s departments or project groups. Use nested teams for more granular access control.',
        },
        {
          title: 'Permission Management',
          content: 'Set up role-based access control using GitHub\'s permission levels. Assign repository and organization roles based on job responsibilities.',
        },
        {
          title: 'Compliance and Auditing',
          content: 'Configure audit logs and compliance features to track actions across your organization. Set up required status checks and approval workflows for regulated code.',
        },
        {
          title: 'Enterprise SSO Integration',
          content: 'Connect GitHub Enterprise with your company\'s identity provider using SAML or SCIM for centralized authentication and user provisioning.',
        },
        {
          title: 'Custom Policies',
          content: 'Implement organization-wide policies for repository creation, outside collaborators, and other security concerns using GitHub Enterprise features.',
        },
      ],
    },
    {
      id: 'enterprise-2',
      title: 'GitHub Enterprise Migration',
      description: 'Learn how to migrate from other version control systems to GitHub Enterprise, including preserving history and setting up new workflows.',
      level: 'enterprise',
      imageUrl: 'https://github.blog/wp-content/uploads/2022/05/migration-tools-blog-1.png?fit=1200%2C630',
      externalUrl: 'https://docs.github.com/en/enterprise-cloud@latest/migrations/overview/migration-options-for-github-enterprise',
      source: 'GitHub Docs',
    },
    {
      id: 'enterprise-3',
      title: 'GitHub Enterprise Governance',
      description: 'Implement governance practices for GitHub Enterprise, including policy enforcement, compliance monitoring, and security standards.',
      level: 'enterprise',
      imageUrl: 'https://github.blog/wp-content/uploads/2021/04/GitHub-Enterprise-Server-3.0-1.png?fit=1200%2C630',
      externalUrl: 'https://docs.github.com/en/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise',
      source: 'GitHub Docs',
    },
  ];

  // Filter tutorials based on the current tab
  const getFilteredTutorials = () => {
    const levels = ['beginner', 'advanced', 'enterprise'];
    const currentLevel = levels[tabValue] as 'beginner' | 'advanced' | 'enterprise';
    
    return tutorials.filter(tutorial => tutorial.level === currentLevel);
  };

  const filteredTutorials = getFilteredTutorials();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Tutorials & Guides
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Step-by-step tutorials and comprehensive guides for GitHub users of all levels.
        </Typography>
        
        {/* Tutorial Categories Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            aria-label="tutorial categories"
          >
            <Tab 
              label="Beginner Tutorials" 
              icon={<BeginnerIcon />} 
              iconPosition="start"
              id="tutorials-tab-0"
              aria-controls="tutorials-tabpanel-0"
            />
            <Tab 
              label="Advanced Tutorials" 
              icon={<AdvancedIcon />} 
              iconPosition="start"
              id="tutorials-tab-1"
              aria-controls="tutorials-tabpanel-1"
            />
            <Tab 
              label="Enterprise Guides" 
              icon={<EnterpriseIcon />} 
              iconPosition="start"
              id="tutorials-tab-2"
              aria-controls="tutorials-tabpanel-2"
            />
          </Tabs>
          
          {/* Beginner Tutorials */}
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={4}>
              {filteredTutorials.map(tutorial => (
                <Grid item key={tutorial.id} xs={12}>
                  <Card>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={tutorial.imageUrl}
                          alt={tutorial.title}
                          sx={{ height: '100%', minHeight: 200 }}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <CardContent>
                          <Typography variant="h5" component="h2" gutterBottom>
                            {tutorial.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {tutorial.description}
                          </Typography>
                          
                          {tutorial.steps ? (
                            <Stepper orientation="vertical" sx={{ mt: 3 }}>
                              {tutorial.steps.map((step, index) => (
                                <Step key={step.title} active={true}>
                                  <StepLabel>{step.title}</StepLabel>
                                  <StepContent>
                                    <Typography variant="body2">{step.content}</Typography>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                          ) : (
                            <Box sx={{ mt: 3 }}>
                              {tutorial.externalUrl ? (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  endIcon={<ExternalLinkIcon />}
                                  href={tutorial.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View on {tutorial.source}
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  disabled
                                >
                                  No external link available
                                </Button>
                              )}
                            </Box>
                          )}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          
          {/* Advanced Tutorials */}
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={4}>
              {filteredTutorials.map(tutorial => (
                <Grid item key={tutorial.id} xs={12}>
                  <Card>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={tutorial.imageUrl}
                          alt={tutorial.title}
                          sx={{ height: '100%', minHeight: 200 }}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <CardContent>
                          <Typography variant="h5" component="h2" gutterBottom>
                            {tutorial.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {tutorial.description}
                          </Typography>
                          
                          {tutorial.steps ? (
                            <Stepper orientation="vertical" sx={{ mt: 3 }}>
                              {tutorial.steps.map((step, index) => (
                                <Step key={step.title} active={true}>
                                  <StepLabel>{step.title}</StepLabel>
                                  <StepContent>
                                    <Typography variant="body2">{step.content}</Typography>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                          ) : (
                            <Box sx={{ mt: 3 }}>
                              {tutorial.externalUrl ? (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  endIcon={<ExternalLinkIcon />}
                                  href={tutorial.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View on {tutorial.source}
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  disabled
                                >
                                  No external link available
                                </Button>
                              )}
                            </Box>
                          )}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          
          {/* Enterprise Guides */}
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={4}>
              {filteredTutorials.map(tutorial => (
                <Grid item key={tutorial.id} xs={12}>
                  <Card>
                    <Grid container>
                      <Grid item xs={12} md={4}>
                        <CardMedia
                          component="img"
                          height="100%"
                          image={tutorial.imageUrl}
                          alt={tutorial.title}
                          sx={{ height: '100%', minHeight: 200 }}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <CardContent>
                          <Typography variant="h5" component="h2" gutterBottom>
                            {tutorial.title}
                          </Typography>
                          <Typography variant="body1" paragraph>
                            {tutorial.description}
                          </Typography>
                          
                          {tutorial.steps ? (
                            <Stepper orientation="vertical" sx={{ mt: 3 }}>
                              {tutorial.steps.map((step, index) => (
                                <Step key={step.title} active={true}>
                                  <StepLabel>{step.title}</StepLabel>
                                  <StepContent>
                                    <Typography variant="body2">{step.content}</Typography>
                                  </StepContent>
                                </Step>
                              ))}
                            </Stepper>
                          ) : (
                            <Box sx={{ mt: 3 }}>
                              {tutorial.externalUrl ? (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  endIcon={<ExternalLinkIcon />}
                                  href={tutorial.externalUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  View on {tutorial.source}
                                </Button>
                              ) : (
                                <Button
                                  variant="contained"
                                  color="primary"
                                  disabled
                                >
                                  No external link available
                                </Button>
                              )}
                            </Box>
                          )}
                        </CardContent>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Paper>
        
        {/* Best Practices Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
            <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
            GitHub Best Practices
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Commit Best Practices
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Write clear commit messages" 
                        secondary="Use the imperative mood and explain why the change was made, not just what was changed."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Make atomic commits" 
                        secondary="Each commit should represent a single logical change, making it easier to understand, review, and revert if needed."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Commit early and often" 
                        secondary="Small, frequent commits are easier to manage than large, infrequent ones."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Use conventional commit messages" 
                        secondary="Consider using a format like 'feat: add user authentication' to categorize your changes."
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Pull Request Best Practices
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Keep PRs small and focused" 
                        secondary="Smaller PRs are easier to review and less likely to contain bugs."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Write descriptive PR titles and descriptions" 
                        secondary="Explain what the PR does, why it's needed, and any important implementation details."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Link related issues" 
                        secondary="Use keywords like 'Fixes #123' to automatically link and close issues when the PR is merged."
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                      <ListItemText 
                        primary="Request reviews from appropriate team members" 
                        secondary="Choose reviewers who are familiar with the code being changed."
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Repository Management Best Practices
                  </Typography>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <List>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText 
                            primary="Use a .gitignore file" 
                            secondary="Avoid committing build artifacts, dependencies, and environment-specific files."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText 
                            primary="Add a README.md" 
                            secondary="Include project description, setup instructions, and contribution guidelines."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText 
                            primary="Use branch protection rules" 
                            secondary="Require reviews and status checks before merging to important branches."
                          />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <List>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText 
                            primary="Set up CI/CD with GitHub Actions" 
                            secondary="Automate testing, building, and deployment processes."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText 
                            primary="Use GitHub Issues for tracking" 
                            secondary="Organize work with issues, labels, milestones, and projects."
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon><CheckIcon color="success" /></ListItemIcon>
                          <ListItemText 
                            primary="Document with GitHub Wiki" 
                            secondary="Create comprehensive documentation for your project."
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default TutorialsPage; 