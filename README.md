# whoami

A minimalist, Linux-inspired personal portfolio website built with Vue 3, Vite, and Tailwind CSS.

## Tech Stack

- Framework: Vue 3 (Composition API)
- Build Tool: Vite
- Styling: Tailwind CSS v4
- Package Manager: pnpm
- Code Quality: ESLint + Prettier

## Features

- Terminal-inspired user interface with system status indicators
- Low eye-strain Light and Dark themes with automatic system preference detection
- Responsive layout across desktop, tablet, and mobile devices
- Modular component structure with centralized data configuration

## Project Structure

```text
.
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── composables/     # Shared state logic (useTheme, useI18n)
│   ├── data/            # Profile and site data
│   ├── i18n/            # Text content and translations
│   ├── App.vue          # Root application component
│   ├── main.js          # Application entry point
│   └── style.css        # Tailwind styles and theme tokens
├── index.html           # HTML entry point
├── eslint.config.js     # Linter configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- pnpm (>= 9.x)

### Installation & Development

```bash
# Clone the repository
git clone git@github.com:haminh7036/whoami.git
cd whoami

# Install dependencies
pnpm install

# Start local development server
pnpm dev

# Run linter and formatter before committing
pnpm check

# Build for production
pnpm build
```

## License

This project is licensed under the [MIT License](LICENSE).
