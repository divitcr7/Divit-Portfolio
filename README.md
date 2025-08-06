
# Divit's Portfolio

A React-based personal portfolio website showcasing skills, projects, and experience.

## Features

- Modern UI with responsive design
- Interactive components
- Project showcase
- GitHub activity integration
- Command palette for quick navigation
- Keyboard shortcuts for improved navigation

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (v6 or higher recommended)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

### Running the Development Server

Start the development server with:

```
npm run dev
```

or

```
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create a production build with:

```
npm run build
```

## Keyboard Shortcuts

- `Ctrl+K` or `Cmd+K`: Open command palette
- `1-5`: Navigate to different sections
- `Escape`: Scroll to top

## Dependencies

- React 18
- Framer Motion
- Bootstrap 5
- React Draggable
- React Syntax Highlighter
- React Tabs

## Notes

- The project has some security vulnerabilities in its dependencies. Run `npm audit fix` to address issues that don't require breaking changes.
- For a complete security fix (including breaking changes), run `npm audit fix --force`.