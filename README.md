# 🌐 whoami - Personal Portfolio

[![GitHub](https://img.shields.io/badge/GitHub-haminh7036-181717?style=flat-square&logo=github)](https://github.com/haminh7036)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A modern, responsive, and minimalist personal portfolio website showcasing projects, skills, experience, and contact information.

---

## 🚀 Features

- **🐧 Linux & Terminal Aesthetic**: Clean Unix-inspired design with prompt accents (`$ whoami`, `cat bio.txt`, `git log`, `tree ~/skills`), system stats widget, and statusline.
- **👁️ Gentle Eye-Care Theme**: Soft, low-contrast Light & Dark modes designed to minimize eye strain (inspired by Catppuccin / Nord / Slate palettes).
- **🌐 Multi-Language (i18n)**: Full support for **English (EN)**, **Tiếng Việt (VI)**, and **中文 (ZH)** with instant reactive switching and persistence.
- **⚡ Reactive & Modular**: Built with Vue 3 (Composition API + `<script setup>`) and Tailwind CSS v4.
- **📱 Fully Responsive & Accessible**: WCAG compliant contrast, keyboard navigation, and mobile-friendly touch targets.

---

## 🛠️ Tech Stack

- **Framework**: [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Vue Next](https://lucide.dev/) / Iconify
- **Deployment**: Vercel / GitHub Pages / Cloudflare Pages

---

## 📂 Project Structure

```text
.
├── public/          # Static assets (images, icons, resume)
├── src/
│   ├── assets/      # Styles, fonts, media
│   ├── components/  # Reusable UI components (Navbar, Hero, Projects, etc.)
│   ├── data/        # Portfolio data (projects, skills, experience)
│   ├── App.vue      # Root component
│   └── main.js      # App entry point
├── index.html       # HTML entry
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (>= 18.x)
- [pnpm](https://pnpm.io/) (>= 9.x / 10.x / 11.x) - _Primary package manager for local development_

### Setup & Run

```bash
# Clone the repository
git clone git@github.com:haminh7036/whoami.git

# Navigate into project directory
cd whoami

# Install dependencies (Local: pnpm)
pnpm install

# Start local development server
pnpm dev

# Lint & automatically format code (Run before commit)
pnpm check

# Check linting only
pnpm lint

# Format code with Prettier
pnpm format

# Build for production
pnpm build
```

> [!NOTE]
> Local development uses **pnpm** as the primary package manager. For deployments (e.g. Vercel), build scripts and `pnpm-lock.yaml` / npm are supported.

---

## 📬 Contact & Connect

- **GitHub**: [@haminh7036](https://github.com/haminh7036)
- **Email**: `your-email@example.com`
- **LinkedIn**: [linkedin.com/in/your-profile](https://linkedin.com/in/)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
