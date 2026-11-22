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
      title: 'Backend Engineer',
      bio: 'Backend Engineer with 5+ years of production experience in PHP (Laravel) and MySQL. Sole Backend Engineer (Dec 2025 - Oct 2026) on a 60+ batch e-commerce platform (1M+ SKUs) and open-source contributor to Laravel Telescope. Daily Linux user on Arch Linux & CachyOS with niri, Ghostty, Fish Shell, and Neovim.',
      location: 'Ho Chi Minh City, Vietnam',
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
      wm: 'Wayland (niri)',
      uptime: 'Online',
      focus: 'PHP (Laravel) & MySQL'
    },
    about: {
      sectionNumber: '01. ABOUT',
      heading: 'About Me',
      subheading: 'cat ~/about/bio.txt',
      p1: 'Backend Engineer with 5+ years of production experience in PHP (Laravel) and MySQL. From 2024 to Oct 2026, scaled and stabilized a 60+ batch e-commerce platform (1M+ SKUs) for Japanese marketplaces (Rakuten, Yahoo! Shopping): built its PHP 8.4 / Laravel 12 base first and drove the 5-month migration from PHP 5.6 / Laravel 5.2 (guiding a teammate to port business logic across the batches and internal staff portal), and served as its Sole Backend Engineer (Dec 2025 - Oct 2026).',
      p2: 'Also building personal backend projects in Go and PostgreSQL, including a Go REST API deployed on GCP (Docker Compose, Nginx, Cloudflare). Daily environment: Arch Linux and CachyOS with niri, Ghostty, Fish Shell, and Neovim.',
      coreValuesTitle: 'Open Source & Engineering Focus',
      coreValues:
        'Contributor to Laravel Telescope (2 merged PRs: #1669, #1671). Focused on predictable batch processing, relational query performance, and incremental legacy migrations.'
    },
    experience: {
      heading: 'Work & Learning Timeline',
      subheading: 'git log --oneline',
      items: [
        {
          period: 'Apr 2024 - Oct 2026',
          role: 'Backend Engineer (Webike Product Team)',
          company: 'Rivercrane Vietnam',
          hash: 'a4c8e12',
          description:
            'Drove the PHP 5.6 -> 8.4 / Laravel 5.2 -> 12 migration: built the new base first (reproducing legacy outputs to minimize rework), then guided a teammate as we ported 60+ production batches and the staff portal in phases (Jul-Dec 2025); Sole Backend Engineer (Dec 2025 - Oct 2026). Fixed circular-reference OOM crashes (1M+ SKUs), 3+ hour MySQL query stalls via keyset pagination, and 1-2h image pulls down to 5-15m with parallel rclone.'
        },
        {
          period: 'Mar 2021 - Apr 2024',
          role: 'Backend Engineer (B2B Outsource Team)',
          company: 'Rivercrane Vietnam',
          hash: '7d0c70b',
          description:
            'Built RESTful APIs for enterprise contract lifecycles and third-party approval workflows. Resolved deep-page query slowdowns by deferring heavy JSON columns and fixing N+1 queries.'
        },
        {
          period: 'Oct 2020 - Mar 2021',
          role: 'Backend Engineer',
          company: 'Anflash Technology',
          hash: '3f9b204',
          description:
            'Built e-commerce modules, inventory sync, and payment gateway integrations (Alepay, MoMo, VNPay, ZaloPay) including installment flows.'
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
      liveDemo: 'Healthcheck API',
      items: [
        {
          id: 'ecommerce-batch-platform',
          title: 'E-Commerce Batch Platform',
          description:
            '60+ production batches and internal staff portal connecting Japanese marketplaces across product, order, and contact workflows (1M+ SKUs). Built the PHP 8.4 / Laravel 12 base and drove the 5-month migration from PHP 5.6 / Laravel 5.2; includes CDP automation and maintenance scheduling.',
          tags: ['PHP 8.4', 'Laravel 12', 'MySQL', 'Inertia.js', 'Docker'],
          category: 'Company Work',
          private: true,
          github: '',
          demo: '',
          featured: true
        },
        {
          id: 'contract-management-system',
          title: 'Enterprise Contract & Document System',
          description:
            'Contract lifecycle and negotiation RESTful APIs integrated with an electronic approval engine; optimized deep pagination over large JSON payloads.',
          tags: ['PHP', 'Laravel', 'MySQL', 'React.js', 'REST API'],
          category: 'Company Work',
          private: true,
          github: '',
          demo: '',
          featured: false
        },
        {
          id: 'laravel-telescope',
          title: 'Laravel Telescope (2 Merged PRs)',
          description:
            'Merged PRs #1669 and #1671: excluded Chrome DevTools (.well-known*) probes from default request logs and fixed broken dump collapse toggles by adding the missing sf-js-enabled class.',
          tags: ['PHP', 'Laravel', 'Vue.js', 'Open Source'],
          category: 'Open Source',
          private: false,
          github:
            'https://github.com/laravel/telescope/pulls?q=is%3Apr+author%3Ahaminh7036+state%3Amerged',
          demo: '',
          featured: true
        },
        {
          id: 'expense-go',
          title: 'Expense-Go REST API',
          description:
            'Personal expense tracking REST API in Go and PostgreSQL. Packaged as a non-root multi-stage Docker image and deployed on GCP with Docker Compose, Nginx, and Cloudflare SSL/TLS (public healthcheck at /health).',
          tags: ['Go', 'PostgreSQL', 'Docker Compose', 'Nginx', 'GCP'],
          category: 'Hobby & Personal',
          private: true,
          github: '',
          demo: 'https://api.mingdev.io.vn/health',
          featured: true
        },
        {
          id: 'whoami',
          title: 'whoami - Personal Portfolio',
          description:
            'Linux-inspired personal portfolio website built with Vue 3, Vite, and Tailwind CSS.',
          tags: ['Vue 3', 'Tailwind CSS', 'Vite'],
          category: 'Hobby & Personal',
          private: false,
          github: 'https://github.com/haminh7036/whoami',
          demo: '',
          featured: true
        },
        {
          id: 'neovim-config',
          title: 'Neovim Lua Config',
          description:
            'Modular Neovim configuration in Lua for PHP/Laravel, Go, and web development.',
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
          items: [
            'PHP (5.6 -> 8.4) / Laravel (5.2 -> 12)',
            'MySQL (EXPLAIN & Keyset Pagination)',
            'Symfony Process & RESTful APIs',
            'ETL / Batch Processing & PostgreSQL',
            'Go (Personal Projects)'
          ]
        },
        {
          name: 'Frontend, Automation & Infra',
          items: [
            'Inertia.js / Vue.js / React.js / Tailwind CSS',
            'Node.js & Puppeteer (CDP)',
            'Docker & Nginx & PHP-FPM',
            'Google Cloud Platform (GCP) & Cloudflare',
            'Linux & Git'
          ]
        },
        {
          name: 'Environment & Daily Setup',
          items: [
            'Arch Linux & CachyOS',
            'Neovim (Lua)',
            'Ghostty Terminal & Fish Shell',
            'Wayland (niri)'
          ]
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
