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
      status: 'Available for new opportunities',
      greeting: "Hi, I'm",
      title: 'Backend Engineer (Laravel → Go & K3s)',
      bio: 'Backend developer with solid foundations in PHP, Laravel & MySQL, actively mastering Go, PostgreSQL, and cloud-native Kubernetes (K3s). Devoted Linux craftsman living inside Neovim, Fish Shell, and Ghostty.',
      location: 'Vietnam',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      copyEmail: 'Copy Email',
      emailCopied: 'Email copied!'
    },
    sysinfo: {
      os: 'Arch Linux / CachyOS',
      shell: 'fish shell',
      term: 'Ghostty',
      editor: 'Neovim',
      wm: 'Wayland (niri / GNOME)',
      uptime: '99.9% uptime',
      focus: 'Laravel → Go & K3s'
    },
    about: {
      sectionNumber: '01. ABOUT & BACKGROUND',
      heading: 'System Info & Tech Journey',
      p1: 'I am a backend-focused software engineer with hands-on experience in building scalable web APIs and reliable database architectures with PHP (Laravel) and MySQL.',
      p2: 'Currently expanding my engineering horizon into Golang, PostgreSQL, and cloud-native container orchestration with K3s. My daily workflow runs on pure Wayland (niri on Arch, GNOME on CachyOS), powered by Ghostty, Fish Shell, and Neovim.',
      coreValuesTitle: 'Engineering Philosophy',
      coreValues:
        'Clean architecture, pragmatic design, type safety, low latency, and uncompromising developer ergonomics.'
    },
    experience: {
      heading: 'Career & Growth Timeline',
      subheading: 'git log --oneline --graph',
      items: [
        {
          period: 'Present',
          role: 'Backend & Systems Explorer',
          company: 'Self-Directed / Homelab',
          description:
            'Building cloud-native microservices in Go, provisioning lightweight Kubernetes clusters (K3s), and optimizing Linux workflows.'
        },
        {
          period: '2023 - 2025',
          role: 'PHP / Laravel Developer',
          company: 'Software Company',
          description:
            'Engineered RESTful APIs, database schema design, and background job queues with Laravel & MySQL. Collaborated on frontend integration and automated deployments.'
        }
      ]
    },
    projects: {
      sectionNumber: '02. FEATURED WORK',
      heading: 'Projects & Repositories',
      subheading: 'ls -la ~/projects',
      viewSource: 'Source Code',
      liveDemo: 'Live Demo',
      items: [
        {
          id: 'whoami',
          title: 'whoami - Personal Portfolio',
          description:
            'Minimalist, Linux-inspired portfolio built with Vue 3, Vite, and Tailwind CSS with Carlotta-inspired theme.',
          tags: ['Vue 3', 'Tailwind CSS', 'Vite'],
          category: 'Backend & APIs',
          github: 'https://github.com/haminh7036/whoami',
          demo: 'https://haminh.dev',
          featured: true,
          stars: 12
        },
        {
          id: 'go-microservice',
          title: 'Go Cloud Microservice',
          description:
            'High-performance HTTP/gRPC service written in Golang with PostgreSQL, Redis cache, and K3s manifest deployment.',
          tags: ['Go', 'PostgreSQL', 'K3s', 'Docker'],
          category: 'Go & Cloud-Native',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: true,
          stars: 34
        },
        {
          id: 'laravel-api',
          title: 'Laravel Clean Architecture API',
          description:
            'Modular RESTful API boilerplates built with Laravel 11, MySQL, Redis queues, and JWT authentication.',
          tags: ['PHP', 'Laravel', 'MySQL', 'Redis'],
          category: 'Backend & APIs',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 25
        },
        {
          id: 'dotfiles',
          title: 'Linux Dotfiles (niri + Ghostty + Neovim)',
          description:
            'Personal dotfiles for Arch Linux (niri scrollable-tiling), CachyOS, Fish Shell, Ghostty terminal, and custom Lua Neovim config.',
          tags: ['Linux', 'Neovim', 'Fish', 'Lua'],
          category: 'Go & Cloud-Native',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 48
        }
      ]
    },
    skills: {
      sectionNumber: '03. SKILLS & TOOLCHAIN',
      heading: 'Technical Stack',
      subheading: 'tree --dirs-only ~/skills',
      categories: [
        {
          name: 'Backend & Core',
          items: ['PHP / Laravel', 'Golang (Go)', 'MySQL', 'PostgreSQL', 'RESTful APIs', 'Redis']
        },
        {
          name: 'Cloud-Native & DevOps',
          items: [
            'K3s (Kubernetes)',
            'Docker',
            'Linux (Arch & CachyOS)',
            'Git / GitHub CI',
            'Nginx'
          ]
        },
        {
          name: 'Environment & Workflow',
          items: ['Neovim (Lua)', 'Ghostty Terminal', 'Fish Shell', 'Wayland (niri & GNOME)']
        }
      ]
    },
    contact: {
      sectionNumber: '04. GET IN TOUCH',
      heading: 'Initialize Connection',
      subheading: '$ ssh contact@haminh.dev',
      intro:
        'Interested in discussing Laravel, Go, Kubernetes (K3s), or Linux rice setups? My inbox is always open.',
      sendEmail: 'Send Email',
      copyAddress: 'Copy Address',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Vue 3, Vite & Tailwind CSS',
      kernel: 'arch-linux + cachyos | fish shell | ghostty'
    }
  }
}
