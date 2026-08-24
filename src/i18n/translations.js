// ponytail: Contains only active 'en' locale. Add 'vi' and 'zh' when multi-language UI is re-enabled.
export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
      terminal: 'Terminal'
    },
    hero: {
      status: 'Open to opportunities',
      greeting: "Hi, I'm",
      title: 'Backend Developer (PHP & Go)',
      bio: 'Backend developer with practical experience in PHP (Laravel) & MySQL, currently learning Golang, PostgreSQL, and K3s. Daily Linux user on Arch Linux & CachyOS with Neovim, Fish Shell, and Ghostty.',
      location: 'Vietnam',
      viewProjects: 'View Projects',
      getInTouch: 'Contact Me',
      copyEmail: 'Copy Email',
      emailCopied: 'Copied!'
    },
    sysinfo: {
      os: 'Arch Linux / CachyOS',
      shell: 'fish shell',
      term: 'Ghostty',
      editor: 'Neovim',
      wm: 'Wayland (niri / GNOME)',
      uptime: 'Online',
      focus: 'PHP/Laravel & Go'
    },
    about: {
      sectionNumber: '01. ABOUT',
      heading: 'About Me',
      subheading: 'cat ~/about/bio.txt',
      p1: 'I am a backend developer with experience building web APIs and managing databases using PHP, Laravel, and MySQL.',
      p2: 'I am currently expanding my skills with Golang, PostgreSQL, and container orchestration using K3s. For my daily development setup, I use Arch Linux (with niri) on PC and CachyOS (with GNOME) on laptop, using Ghostty, Fish Shell, and Neovim.',
      coreValuesTitle: 'Motivation & Community',
      coreValues:
        'Driven by curiosity, continuous learning, and the open-source spirit. Always eager to build useful tools for the community, with small contributions to Laravel and ongoing personal projects.'
    },
    experience: {
      heading: 'Work & Learning Timeline',
      subheading: 'git log --oneline',
      items: [
        {
          period: 'Present',
          role: 'Self-Learning & Practice',
          company: 'Personal Projects',
          hash: 'cb3f769',
          description:
            'Practicing Go, building small backend microservices, and testing K3s cluster deployments in a local environment.'
        },
        {
          period: '2023 - 2025',
          role: 'PHP / Laravel Developer',
          company: 'Software Company',
          hash: '7d0c70b',
          description:
            'Developed RESTful APIs, designed database schemas, and handled background queues using Laravel and MySQL.'
        }
      ]
    },
    projects: {
      sectionNumber: '02. PROJECTS',
      heading: 'Projects & Work',
      subheading: 'ls -la ~/projects',
      privateBadge: 'Private / Company',
      publicBadge: 'Open Source',
      viewSource: 'Source',
      liveDemo: 'Demo',
      items: [
        {
          id: 'company-api',
          title: 'Backend Services & APIs',
          description:
            'RESTful APIs, database schema design, and asynchronous queue processing built with Laravel and MySQL for company products.',
          tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
          category: 'Company Work',
          private: true,
          github: '',
          demo: '',
          featured: true
        },
        {
          id: 'internal-portal',
          title: 'Internal Operations Portal',
          description:
            'Internal management system and API integrations supporting company workflows and data administration.',
          tags: ['Laravel', 'Vue.js', 'REST API', 'MySQL'],
          category: 'Company Work',
          private: true,
          github: '',
          demo: '',
          featured: false
        },
        {
          id: 'memremark',
          title: 'memremark - AI Memory Palace',
          description:
            'Seamless cross-session working memory palace and context bridge for Claude Code and Antigravity CLI built with Go, SQLite, and Model Context Protocol.',
          tags: ['Go', 'SQLite', 'MCP', 'AI Agents'],
          category: 'Hobby & Personal',
          private: false,
          github: 'https://github.com/haminh7036/memremark',
          demo: '',
          featured: true
        },
        {
          id: 'whoami',
          title: 'whoami - Personal Portfolio',
          description:
            'Minimalist, Linux-inspired personal portfolio website built with Vue 3, Vite, and Tailwind CSS.',
          tags: ['Vue 3', 'Tailwind CSS', 'Vite'],
          category: 'Hobby & Personal',
          private: false,
          github: 'https://github.com/haminh7036/whoami',
          demo: '',
          featured: true
        },
        {
          id: 'arch-niri-config',
          title: 'Arch Linux niri Config',
          description:
            'Personal dotfiles and configuration for Arch Linux running the niri scrollable-tiling Wayland compositor.',
          tags: ['Linux', 'Arch Linux', 'niri', 'Wayland'],
          category: 'Hobby & Personal',
          private: false,
          github: 'https://github.com/haminh7036/arch-niri-config',
          demo: '',
          featured: false
        },
        {
          id: 'neovim-config',
          title: 'Neovim Lua Config',
          description:
            'Fast and modular Neovim configuration written in Lua tailored for PHP/Laravel, Go, and web development workflows.',
          tags: ['Lua', 'Neovim', 'LSP', 'Treesitter'],
          category: 'Hobby & Personal',
          private: false,
          github: 'https://github.com/haminh7036/neovim-config',
          demo: '',
          featured: false
        }
      ]
    },
    skills: {
      sectionNumber: '03. SKILLS',
      heading: 'Skills & Tools',
      subheading: 'tree ~/skills',
      categories: [
        {
          name: 'Backend & Databases',
          items: ['PHP / Laravel', 'Golang', 'MySQL', 'PostgreSQL', 'RESTful APIs', 'Redis']
        },
        {
          name: 'DevOps & Containers',
          items: [
            'K3s (Kubernetes)',
            'Docker',
            'Linux (Arch & CachyOS)',
            'Git & GitHub CI',
            'Nginx'
          ]
        },
        {
          name: 'Environment & Tools',
          items: ['Neovim (Lua)', 'Ghostty Terminal', 'Fish Shell', 'Wayland (niri & GNOME)']
        }
      ]
    },
    contact: {
      sectionNumber: '04. CONTACT',
      heading: 'Get in Touch',
      subheading: 'ssh contact',
      intro:
        'If you have an opportunity, project question, or just want to connect about PHP, Go, or Linux setups, feel free to send an email.',
      sendEmail: 'Send Email',
      copyAddress: 'Copy Email',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Vue 3, Vite & Tailwind CSS',
      kernel: 'Arch Linux / CachyOS • Fish Shell • Ghostty'
    }
  }
}
