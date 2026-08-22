// ponytail: Contains only active 'en' locale. Add 'vi' and 'zh' when multi-language UI is re-enabled.
export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
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
      p1: 'I am a backend developer with experience building web APIs and managing databases using PHP, Laravel, and MySQL.',
      p2: 'I am currently expanding my skills with Golang, PostgreSQL, and container orchestration using K3s. For my daily development setup, I use Arch Linux (with niri) on PC and CachyOS (with GNOME) on laptop, using Ghostty, Fish Shell, and Neovim.',
      coreValuesTitle: 'Development Focus',
      coreValues:
        'Writing clean and maintainable code, designing practical APIs, and keeping development workflows simple.'
    },
    experience: {
      heading: 'Work & Learning Timeline',
      subheading: 'Career history',
      items: [
        {
          period: 'Present',
          role: 'Self-Learning & Projects',
          company: 'Personal Projects',
          description:
            'Practicing Go, building small microservices, and testing K3s cluster deployments in a local environment.'
        },
        {
          period: '2023 - 2025',
          role: 'PHP / Laravel Developer',
          company: 'Software Company',
          description:
            'Developed RESTful APIs, designed database schemas, and handled background queues using Laravel and MySQL.'
        }
      ]
    },
    projects: {
      sectionNumber: '02. PROJECTS',
      heading: 'Featured Projects',
      subheading: 'Personal & open-source work',
      viewSource: 'Source',
      liveDemo: 'Demo',
      items: [
        {
          id: 'whoami',
          title: 'whoami - Personal Portfolio',
          description:
            'Minimalist, Linux-inspired portfolio website built with Vue 3, Vite, and Tailwind CSS.',
          tags: ['Vue 3', 'Tailwind CSS', 'Vite'],
          category: 'Web',
          github: 'https://github.com/haminh7036/whoami',
          demo: 'https://haminh.dev',
          featured: true,
          stars: 12
        },
        {
          id: 'go-microservice',
          title: 'Go Backend Service',
          description:
            'Backend API service written in Golang with PostgreSQL, Redis caching, and Docker/K3s deployment configs.',
          tags: ['Go', 'PostgreSQL', 'K3s', 'Docker'],
          category: 'Go & DevOps',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: true,
          stars: 34
        },
        {
          id: 'laravel-api',
          title: 'Laravel REST API',
          description:
            'RESTful API project built with Laravel, MySQL database design, Redis queues, and JWT authentication.',
          tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
          category: 'Laravel & PHP',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 25
        },
        {
          id: 'dotfiles',
          title: 'Linux Dotfiles',
          description:
            'Personal dotfiles and configs for Arch Linux (niri), CachyOS (GNOME), Fish Shell, Ghostty, and Neovim.',
          tags: ['Linux', 'Neovim', 'Fish', 'Lua'],
          category: 'Linux & Configs',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 48
        }
      ]
    },
    skills: {
      sectionNumber: '03. SKILLS',
      heading: 'Skills & Tools',
      subheading: 'Technologies used in daily work and projects',
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
          items: ['Neovim', 'Ghostty Terminal', 'Fish Shell', 'Wayland (niri & GNOME)']
        }
      ]
    },
    contact: {
      sectionNumber: '04. CONTACT',
      heading: 'Get in Touch',
      subheading: 'Reach out via email or social links',
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
