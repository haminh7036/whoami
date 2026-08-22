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
      title: 'Software Engineer & Systems Enthusiast',
      bio: 'Passionate about building performant web applications, clean architectures, and Linux-driven workflows. Crafting software with precision, accessibility, and speed.',
      location: 'Vietnam',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      copyEmail: 'Copy Email',
      emailCopied: 'Email copied!'
    },
    sysinfo: {
      os: 'Linux x86_64',
      shell: 'zsh + tmux',
      editor: 'Neovim / VS Code',
      uptime: '99.9% uptime',
      focus: 'Full-Stack & Systems'
    },
    about: {
      sectionNumber: '01. ABOUT & BACKGROUND',
      heading: 'System Info & Philosophy',
      p1: 'I am a software engineer focused on building robust, scalable web applications and high-quality user experiences. I enjoy solving complex engineering challenges, optimizing system performance, and automating workflows.',
      p2: 'Deeply interested in modern frontend frameworks, distributed backends, and Unix philosophy—building small, composable, and purpose-driven tools.',
      coreValuesTitle: 'Core Philosophy',
      coreValues:
        'Correctness, simplicity, low latency, maintainable code, and high developer ergonomics.'
    },
    experience: {
      heading: 'Career Timeline',
      subheading: 'git log --oneline --graph',
      items: [
        {
          period: '2024 - Present',
          role: 'Software Engineer',
          company: 'Tech Company',
          description:
            'Designing scalable microservices and reactive frontend interfaces. Leading frontend architecture and developer experience optimizations.'
        },
        {
          period: '2022 - 2024',
          role: 'Full-Stack Developer',
          company: 'Software House',
          description:
            'Engineered responsive web applications and RESTful APIs. Collaborated on CI/CD automation pipelines and cloud deployment.'
        }
      ]
    },
    projects: {
      sectionNumber: '02. FEATURED WORK',
      heading: 'Projects & Repositories',
      subheading: 'ls -la ~/projects',
      filterAll: 'All',
      filterFrontend: 'Frontend',
      filterBackend: 'Backend / Systems',
      viewSource: 'Source Code',
      liveDemo: 'Live Demo',
      items: [
        {
          id: 'whoami',
          title: 'whoami',
          description:
            'A minimalist, Linux-inspired personal portfolio with multi-language and gentle eye-care theme support.',
          tags: ['Vue 3', 'Tailwind CSS', 'Vite', 'i18n'],
          category: 'Frontend',
          github: 'https://github.com/haminh7036/whoami',
          demo: 'https://haminh.dev',
          featured: true,
          stars: 12
        },
        {
          id: 'dotfiles',
          title: 'dotfiles & dev environment',
          description:
            'Optimized configurations for Zsh, Neovim, Tmux, and Linux development toolchains.',
          tags: ['Bash', 'Lua', 'Linux', 'Neovim'],
          category: 'Backend / Systems',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: true,
          stars: 28
        },
        {
          id: 'cloud-cli',
          title: 'Cloud Infrastructure CLI',
          description:
            'High-performance CLI utility written in Go for managing container clusters and remote services.',
          tags: ['Go', 'Docker', 'CLI', 'Linux'],
          category: 'Backend / Systems',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 45
        }
      ]
    },
    skills: {
      sectionNumber: '03. SKILLS & TOOLCHAIN',
      heading: 'Technical Arsenal',
      subheading: 'tree --dirs-only ~/skills',
      categories: [
        {
          name: 'Languages',
          items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'HTML5 / CSS3', 'Bash / Shell']
        },
        {
          name: 'Frameworks & UI',
          items: ['Vue.js 3', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js']
        },
        {
          name: 'Systems & DevOps',
          items: ['Linux / POSIX', 'Docker', 'Git', 'PostgreSQL', 'Redis', 'CI/CD Actions']
        }
      ]
    },
    contact: {
      sectionNumber: '04. GET IN TOUCH',
      heading: 'Initialize Connection',
      subheading: '$ ssh contact@haminh.dev',
      intro:
        'Have an opportunity, project proposal, or just want to discuss tech & Linux? My inbox is always open.',
      sendEmail: 'Send Email',
      copyAddress: 'Copy Address',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with Vue 3, Vite & Tailwind CSS',
      kernel: 'kernel: linux-6.x | prompt: ~$'
    }
  }
}
