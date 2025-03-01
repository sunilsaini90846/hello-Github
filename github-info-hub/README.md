# GitHub Information Hub

A comprehensive website providing information about GitHub, including commands, features, and popular blogs.

![GitHub Information Hub](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)

## Overview

GitHub Information Hub is a React.js application that serves as a one-stop resource for everything related to GitHub. Whether you're a beginner looking to learn the basics or an advanced user seeking detailed information about GitHub's features, this website has you covered.

## Features

- **Home Page**: Introduction to Git and GitHub with highlights of key features
- **GitHub Commands**: Categorized list of Git commands with syntax, examples, and options
- **GitHub Features**: Detailed explanations of GitHub's features like repositories, issues, pull requests, actions, and more
- **Famous Blogs & Resources**: Curated list of popular GitHub-related blogs and learning resources
- **Tutorials & Guides**: Step-by-step tutorials for beginners, advanced users, and enterprise teams

## Tech Stack

- **Frontend**: React.js with TypeScript
- **UI Library**: Material UI
- **Routing**: React Router
- **Code Highlighting**: React Syntax Highlighter
- **Icons**: Material Icons

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/github-info-hub.git
   cd github-info-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
github-info-hub/
├── public/              # Static files
├── src/                 # Source files
│   ├── components/      # Reusable components
│   │   ├── home/        # Home page components
│   │   ├── commands/    # Commands page components
│   │   ├── features/    # Features page components
│   │   ├── blogs/       # Blogs page components
│   │   ├── tutorials/   # Tutorials page components
│   │   └── layout/      # Layout components (Header, Footer, Sidebar)
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── utils/           # Utility functions
│   ├── hooks/           # Custom hooks
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Building for Production

To build the application for production, run:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- GitHub for providing comprehensive documentation
- Material UI for the beautiful components
- The open-source community for their valuable resources and tutorials
