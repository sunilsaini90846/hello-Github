import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Paper,
  Divider,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Grid,
  Chip,
  useTheme,
} from '@mui/material';
import { Search as SearchIcon, Terminal } from '@mui/icons-material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

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
      id={`commands-tabpanel-${index}`}
      aria-labelledby={`commands-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

interface GitCommand {
  name: string;
  description: string;
  syntax: string;
  example: string;
  options?: { flag: string; description: string }[];
  category: string;
}

const CommandsPage = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const [tabValue, setTabValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Sample Git commands data
  const gitCommands: GitCommand[] = [
    // Basic Commands
    {
      name: 'git init',
      description: 'Initialize a new Git repository',
      syntax: 'git init [directory]',
      example: 'git init\ngit init my-project',
      options: [
        { flag: '--bare', description: 'Create a bare repository' },
        { flag: '--template=<template-directory>', description: 'Specify the directory from which templates will be used' },
      ],
      category: 'basic',
    },
    {
      name: 'git clone',
      description: 'Clone a repository into a new directory',
      syntax: 'git clone <repository> [directory]',
      example: 'git clone https://github.com/username/repository.git\ngit clone https://github.com/username/repository.git my-project',
      options: [
        { flag: '--branch, -b <name>', description: 'Clone the specified branch' },
        { flag: '--depth <depth>', description: 'Create a shallow clone with a specified history depth' },
      ],
      category: 'basic',
    },
    {
      name: 'git add',
      description: 'Add file contents to the index',
      syntax: 'git add [<pathspec>...]',
      example: 'git add .\ngit add file.txt\ngit add src/',
      options: [
        { flag: '-A, --all', description: 'Add all files (including deleted files)' },
        { flag: '-p, --patch', description: 'Interactively choose hunks of patch to add' },
      ],
      category: 'basic',
    },
    {
      name: 'git commit',
      description: 'Record changes to the repository',
      syntax: 'git commit -m "<message>"',
      example: 'git commit -m "Add new feature"\ngit commit -am "Fix bug and update docs"',
      options: [
        { flag: '-a, --all', description: 'Automatically stage all modified and deleted files' },
        { flag: '--amend', description: 'Amend the previous commit' },
      ],
      category: 'basic',
    },
    {
      name: 'git status',
      description: 'Show the working tree status',
      syntax: 'git status',
      example: 'git status\ngit status -s',
      options: [
        { flag: '-s, --short', description: 'Give the output in the short format' },
        { flag: '-b, --branch', description: 'Show the branch and tracking info' },
      ],
      category: 'basic',
    },
    
    // Branching & Merging
    {
      name: 'git branch',
      description: 'List, create, or delete branches',
      syntax: 'git branch [<options>] [<branch-name>]',
      example: 'git branch\ngit branch new-feature\ngit branch -d old-feature',
      options: [
        { flag: '-d, --delete', description: 'Delete a branch' },
        { flag: '-a, --all', description: 'List both remote-tracking and local branches' },
      ],
      category: 'branching',
    },
    {
      name: 'git checkout',
      description: 'Switch branches or restore working tree files',
      syntax: 'git checkout <branch-name>\ngit checkout -b <new-branch>',
      example: 'git checkout main\ngit checkout -b feature-branch',
      options: [
        { flag: '-b <new-branch>', description: 'Create and checkout a new branch' },
        { flag: '-t, --track', description: 'Set up tracking mode' },
      ],
      category: 'branching',
    },
    {
      name: 'git merge',
      description: 'Join two or more development histories together',
      syntax: 'git merge <branch>',
      example: 'git merge feature-branch\ngit merge --no-ff feature-branch',
      options: [
        { flag: '--no-ff', description: 'Create a merge commit even when a fast-forward is possible' },
        { flag: '--squash', description: 'Create a single commit on top of the current branch' },
      ],
      category: 'branching',
    },
    {
      name: 'git merge --no-commit',
      description: 'Perform the merge but don\'t commit',
      syntax: 'git merge --no-commit <branch>',
      example: 'git merge --no-commit feature-branch',
      options: [
        { flag: '--no-commit', description: 'Perform the merge but don\'t commit' },
      ],
      category: 'branching',
    },
    
    // Remote Repositories
    {
      name: 'git remote',
      description: 'Manage set of tracked repositories',
      syntax: 'git remote [-v | --verbose]',
      example: 'git remote -v\ngit remote add origin https://github.com/username/repository.git',
      options: [
        { flag: 'add <name> <url>', description: 'Add a remote named <name> for the repository at <url>' },
        { flag: 'remove <name>', description: 'Remove the remote named <name>' },
      ],
      category: 'remote',
    },
    {
      name: 'git push',
      description: 'Update remote refs along with associated objects',
      syntax: 'git push [<remote>] [<branch>]',
      example: 'git push origin main\ngit push -u origin feature-branch',
      options: [
        { flag: '-u, --set-upstream', description: 'Set upstream for git pull/status' },
        { flag: '--force', description: 'Force push (use with caution)' },
      ],
      category: 'remote',
    },
    {
      name: 'git pull',
      description: 'Fetch from and integrate with another repository or a local branch',
      syntax: 'git pull [<remote>] [<branch>]',
      example: 'git pull\ngit pull origin main',
      options: [
        { flag: '--rebase', description: 'Rebase the current branch on top of the upstream branch' },
        { flag: '--no-commit', description: 'Perform the merge but don\'t commit' },
      ],
      category: 'remote',
    },
    
    // Undoing Changes
    {
      name: 'git reset',
      description: 'Reset current HEAD to the specified state',
      syntax: 'git reset [<mode>] [<commit>]',
      example: 'git reset --hard HEAD~1\ngit reset --soft HEAD~1',
      options: [
        { flag: '--soft', description: 'Does not touch the index file or the working tree' },
        { flag: '--hard', description: 'Resets the index and working tree' },
      ],
      category: 'undoing',
    },
    {
      name: 'git revert',
      description: 'Revert some existing commits',
      syntax: 'git revert <commit>',
      example: 'git revert HEAD\ngit revert abc123',
      options: [
        { flag: '--no-commit, -n', description: 'Revert but don\'t create a commit' },
        { flag: '--edit, -e', description: 'Edit the commit message prior to committing' },
      ],
      category: 'undoing',
    },
    
    // Advanced Commands
    {
      name: 'git rebase',
      description: 'Reapply commits on top of another base tip',
      syntax: 'git rebase <base>',
      example: 'git rebase main\ngit rebase -i HEAD~3',
      options: [
        { flag: '-i, --interactive', description: 'Make a list of commits to be rebased and edit it' },
        { flag: '--continue', description: 'Continue the rebasing process' },
      ],
      category: 'advanced',
    },
    {
      name: 'git stash',
      description: 'Stash the changes in a dirty working directory away',
      syntax: 'git stash [push [-m <message>]]',
      example: 'git stash\ngit stash pop\ngit stash list',
      options: [
        { flag: 'pop', description: 'Apply the stashed changes and remove them from the stash' },
        { flag: 'list', description: 'List all stashes' },
      ],
      category: 'advanced',
    },
  ];

  // Filter commands based on the current tab and search query
  const getFilteredCommands = () => {
    const categories = ['basic', 'branching', 'remote', 'undoing', 'advanced'];
    const currentCategory = categories[tabValue];
    
    return gitCommands
      .filter((command) => command.category === currentCategory)
      .filter((command) => 
        searchQuery === '' || 
        command.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        command.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  const filteredCommands = getFilteredCommands();

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          GitHub Commands
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          A comprehensive guide to Git commands, from basic to advanced, with examples and use cases.
        </Typography>
        
        {/* Search Bar */}
        <Paper sx={{ p: 2, mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search commands..."
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
        </Paper>
        
        {/* Command Categories Tabs */}
        <Paper sx={{ mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="command categories"
          >
            <Tab label="Basic Commands" icon={<Terminal />} iconPosition="start" />
            <Tab label="Branching & Merging" icon={<Terminal />} iconPosition="start" />
            <Tab label="Remote Repositories" icon={<Terminal />} iconPosition="start" />
            <Tab label="Undoing Changes" icon={<Terminal />} iconPosition="start" />
            <Tab label="Advanced Commands" icon={<Terminal />} iconPosition="start" />
          </Tabs>
          
          {/* Command List */}
          <TabPanel value={tabValue} index={0}>
            <CommandList commands={filteredCommands} isDarkMode={isDarkMode} />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <CommandList commands={filteredCommands} isDarkMode={isDarkMode} />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <CommandList commands={filteredCommands} isDarkMode={isDarkMode} />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <CommandList commands={filteredCommands} isDarkMode={isDarkMode} />
          </TabPanel>
          <TabPanel value={tabValue} index={4}>
            <CommandList commands={filteredCommands} isDarkMode={isDarkMode} />
          </TabPanel>
        </Paper>
      </Box>
    </Container>
  );
};

interface CommandListProps {
  commands: GitCommand[];
  isDarkMode: boolean;
}

const CommandList: React.FC<CommandListProps> = ({ commands, isDarkMode }) => {
  return (
    <Grid container spacing={3}>
      {commands.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="body1" align="center">
            No commands found. Try a different search term.
          </Typography>
        </Grid>
      ) : (
        commands.map((command) => (
          <Grid item xs={12} key={command.name}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h5" component="h2">
                    {command.name}
                  </Typography>
                  <Chip label={command.category} color="primary" size="small" />
                </Box>
                <Typography variant="body1" paragraph>
                  {command.description}
                </Typography>
                
                <Typography variant="subtitle2" gutterBottom>
                  Syntax:
                </Typography>
                <SyntaxHighlighter
                  language="bash"
                  style={isDarkMode ? dark : docco}
                  customStyle={{ borderRadius: '4px' }}
                >
                  {command.syntax}
                </SyntaxHighlighter>
                
                <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                  Example:
                </Typography>
                <SyntaxHighlighter
                  language="bash"
                  style={isDarkMode ? dark : docco}
                  customStyle={{ borderRadius: '4px' }}
                >
                  {command.example}
                </SyntaxHighlighter>
                
                {command.options && command.options.length > 0 && (
                  <>
                    <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                      Common Options:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      {command.options.map((option) => (
                        <Box component="li" key={option.flag} sx={{ mb: 1 }}>
                          <Typography variant="body2">
                            <strong>{option.flag}</strong>: {option.description}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CommandsPage; 