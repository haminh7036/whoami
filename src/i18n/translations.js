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
  },

  vi: {
    nav: {
      about: 'Giới thiệu',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      experience: 'Kinh nghiệm',
      contact: 'Liên hệ',
      terminal: 'Terminal'
    },
    hero: {
      status: 'Sẵn sàng đón nhận cơ hội mới',
      greeting: 'Xin chào, mình là',
      title: 'Kỹ sư Phần mềm & Đam mê Hệ thống Linux',
      bio: 'Đam mê xây dựng các ứng dụng web hiệu năng cao, kiến trúc sạch và quy trình làm việc tối ưu trên Linux. Chú trọng sự chuẩn xác, tốc độ và trải nghiệm mượt mà.',
      location: 'Việt Nam',
      viewProjects: 'Xem Dự Án',
      getInTouch: 'Liên Hệ Ngay',
      copyEmail: 'Sao chép Email',
      emailCopied: 'Đã sao chép Email!'
    },
    sysinfo: {
      os: 'Linux x86_64',
      shell: 'zsh + tmux',
      editor: 'Neovim / VS Code',
      uptime: '99.9% uptime',
      focus: 'Full-Stack & Systems'
    },
    about: {
      sectionNumber: '01. GIỚI THIỆU & NỀN TẢNG',
      heading: 'Thông tin Hệ thống & Triết lý',
      p1: 'Mình là một kỹ sư phần mềm tập trung vào phát triển ứng dụng web ổn định, có khả năng mở rộng cao và trải nghiệm người dùng tinh tế. Mình yêu thích giải quyết các bài toán tối ưu hiệu năng và tự động hóa quy trình.',
      p2: 'Quan tâm sâu sắc đến các framework frontend hiện đại, backend phân tán và triết lý Unix: tạo ra những công cụ nhỏ gọn, dễ kết hợp và làm tốt một việc duy nhất.',
      coreValuesTitle: 'Triết lý Cốt lõi',
      coreValues:
        'Tính đúng đắn, sự đơn giản, độ trễ thấp, mã nguồn dễ bảo trì và trải nghiệm lập trình viên tốt.'
    },
    experience: {
      heading: 'Lộ trình Sự nghiệp',
      subheading: 'git log --oneline --graph',
      items: [
        {
          period: '2024 - Hiện tại',
          role: 'Kỹ sư Phần mềm',
          company: 'Công ty Công nghệ',
          description:
            'Thiết kế microservices và giao diện frontend phản hồi nhanh. Tối ưu hóa kiến trúc ứng dụng và trải nghiệm phát triển.'
        },
        {
          period: '2022 - 2024',
          role: 'Lập trình viên Full-Stack',
          company: 'Software House',
          description:
            'Phát triển web responsive và RESTful APIs. Phối hợp xây dựng pipeline CI/CD và triển khai trên cloud.'
        }
      ]
    },
    projects: {
      sectionNumber: '02. DỰ ÁN TIÊU BIỂU',
      heading: 'Dự Án & Kho Lưu Trữ',
      subheading: 'ls -la ~/projects',
      filterAll: 'Tất cả',
      filterFrontend: 'Frontend',
      filterBackend: 'Backend / Hệ thống',
      viewSource: 'Mã nguồn',
      liveDemo: 'Bản Demo',
      items: [
        {
          id: 'whoami',
          title: 'whoami',
          description:
            'Trang portfolio cá nhân tối giản phong cách Linux, hỗ trợ đa ngôn ngữ và giao diện dịu mắt bảo vệ thị giác.',
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
          description: 'Bộ cấu hình tối ưu cho Zsh, Neovim, Tmux và môi trường lập trình Linux.',
          tags: ['Bash', 'Lua', 'Linux', 'Neovim'],
          category: 'Backend / Hệ thống',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: true,
          stars: 28
        },
        {
          id: 'cloud-cli',
          title: 'Cloud Infrastructure CLI',
          description:
            'Công cụ CLI hiệu năng cao viết bằng Go giúp quản lý cụm container và dịch vụ từ xa.',
          tags: ['Go', 'Docker', 'CLI', 'Linux'],
          category: 'Backend / Hệ thống',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 45
        }
      ]
    },
    skills: {
      sectionNumber: '03. KỸ NĂNG & CÔNG CỤ',
      heading: 'Hệ thống Công nghệ',
      subheading: 'tree --dirs-only ~/skills',
      categories: [
        {
          name: 'Ngôn ngữ Lập trình',
          items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'HTML5 / CSS3', 'Bash / Shell']
        },
        {
          name: 'Framework & UI',
          items: ['Vue.js 3', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js']
        },
        {
          name: 'Hệ thống & DevOps',
          items: ['Linux / POSIX', 'Docker', 'Git', 'PostgreSQL', 'Redis', 'CI/CD Actions']
        }
      ]
    },
    contact: {
      sectionNumber: '04. LIÊN HỆ',
      heading: 'Khởi tạo Kết nối',
      subheading: '$ ssh contact@haminh.dev',
      intro:
        'Bạn có cơ hội nghề nghiệp, dự án hợp tác, hoặc muốn trò chuyện về công nghệ & Linux? Hãy liên hệ ngay.',
      sendEmail: 'Gửi Email',
      copyAddress: 'Sao chép Địa chỉ',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'Bảo lưu mọi quyền.',
      builtWith: 'Xây dựng với Vue 3, Vite & Tailwind CSS',
      kernel: 'kernel: linux-6.x | prompt: ~$'
    }
  },

  zh: {
    nav: {
      about: '关于',
      projects: '项目',
      skills: '技能',
      experience: '经历',
      contact: '联系',
      terminal: '终端'
    },
    hero: {
      status: '开放新机遇与合作',
      greeting: '你好，我是',
      title: '软件工程师 & Linux 系统爱好者',
      bio: '专注于构建高性能 Web 应用、清晰架构与 Linux 高效工作流。致力于打造兼具精准度、速度与良好可用性的软件产品。',
      location: '越南',
      viewProjects: '浏览项目',
      getInTouch: '取得联系',
      copyEmail: '复制邮箱',
      emailCopied: '已复制邮箱！'
    },
    sysinfo: {
      os: 'Linux x86_64',
      shell: 'zsh + tmux',
      editor: 'Neovim / VS Code',
      uptime: '99.9% 正常运行',
      focus: '全栈开发与系统架构'
    },
    about: {
      sectionNumber: '01. 关于与背景',
      heading: '系统信息与工程哲学',
      p1: '我是一名软件工程师，专注于构建高可用、易扩展的 Web 应用及出色的用户体验。我热衷于解决复杂的工程难题，优化系统性能与自动化工作流。',
      p2: '对现代前端框架、分布式后端架构及 Unix 哲学怀有浓厚兴趣——主张构建专注、精简且高度可组合的工具。',
      coreValuesTitle: '核心哲学',
      coreValues: '正确性、简洁、低延迟、高可维护性及卓越的开发者体验。'
    },
    experience: {
      heading: '职业历程',
      subheading: 'git log --oneline --graph',
      items: [
        {
          period: '2024 - 至今',
          role: '软件工程师',
          company: '科技企业',
          description: '设计微服务后端与高响应式前端界面。主导前端架构升级与工程体验优化。'
        },
        {
          period: '2022 - 2024',
          role: '全栈开发工程师',
          company: '软件服务公司',
          description: '开发响应式 Web 应用与 RESTful API 接口，参与 CI/CD 自动化流水线与云部署。'
        }
      ]
    },
    projects: {
      sectionNumber: '02. 精选项目',
      heading: '项目与开源仓库',
      subheading: 'ls -la ~/projects',
      filterAll: '全部',
      filterFrontend: '前端',
      filterBackend: '后端 / 系统',
      viewSource: '源码',
      liveDemo: '在线演示',
      items: [
        {
          id: 'whoami',
          title: 'whoami',
          description: '极简 Linux 风格个人作品集，支持多语言切换与舒适护眼明暗主题。',
          tags: ['Vue 3', 'Tailwind CSS', 'Vite', 'i18n'],
          category: '前端',
          github: 'https://github.com/haminh7036/whoami',
          demo: 'https://haminh.dev',
          featured: true,
          stars: 12
        },
        {
          id: 'dotfiles',
          title: 'dotfiles & 开发环境',
          description: '为 Zsh、Neovim、Tmux 与 Linux 打造的深度优化配置文件集。',
          tags: ['Bash', 'Lua', 'Linux', 'Neovim'],
          category: '后端 / 系统',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: true,
          stars: 28
        },
        {
          id: 'cloud-cli',
          title: '云基础设施 CLI 工具',
          description: '使用 Go 语言编写的高性能命令行工具，用于管理容器集群及远程服务。',
          tags: ['Go', 'Docker', 'CLI', 'Linux'],
          category: '后端 / 系统',
          github: 'https://github.com/haminh7036',
          demo: '',
          featured: false,
          stars: 45
        }
      ]
    },
    skills: {
      sectionNumber: '03. 技能与工具链',
      heading: '技术专长',
      subheading: 'tree --dirs-only ~/skills',
      categories: [
        {
          name: '编程语言',
          items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'HTML5 / CSS3', 'Bash / Shell']
        },
        {
          name: '框架与界面',
          items: ['Vue.js 3', 'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Node.js']
        },
        {
          name: '系统与 DevOps',
          items: ['Linux / POSIX', 'Docker', 'Git', 'PostgreSQL', 'Redis', 'CI/CD Actions']
        }
      ]
    },
    contact: {
      sectionNumber: '04. 联系我',
      heading: '建立连接',
      subheading: '$ ssh contact@haminh.dev',
      intro: '如果您有工作机会、合作提案，或想聊聊技术与 Linux，欢迎随时来信交流。',
      sendEmail: '发送邮件',
      copyAddress: '复制邮箱',
      github: 'GitHub',
      linkedin: '领英'
    },
    footer: {
      rights: '版权所有。',
      builtWith: '基于 Vue 3、Vite 与 Tailwind CSS 构建',
      kernel: 'kernel: linux-6.x | prompt: ~$'
    }
  }
}
