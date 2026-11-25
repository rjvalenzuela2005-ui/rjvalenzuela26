export const fallbackProjects = [
  {
    _id: '1',
    title: 'Smart Wedding Planner Dashboard',
    description: 'A web-based system that combines an AI chatbot with CRM-style client and vendor management to help wedding planners handle inquiries, bookings, and coordination in one place.',
    category: 'Web System',
    tags: ['OpenAI', 'Node.js', 'Express', 'PostgreSQL', 'SupaBase', 'REST API'],
    imageUrl: '/swpdashboard2.jpg',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    _id: '2',
    title: 'Aura E-Commerce Store',
    description: 'Full-featured online store with Stripe payment integration, cart management, customer reviews, and order tracking.',
    category: 'Full Stack',
    tags: ['React', 'Express', 'MongoDB', 'Stripe', 'Redux Toolkit'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    _id: '3',
    title: 'Pulse Flow Task Manager',
    description: 'Collaborative Kanban board and agile sprint planning tool with drag-and-drop workflow and team permissions.',
    category: 'Frontend',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'REST API'],
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    _id: '4',
    title: 'Sentient AI Assistant API',
    description: 'Microservice backend enabling conversational AI streaming, document semantic search, and prompt caching.',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'OpenAI API', 'JWT'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

export const fallbackSkills = [
  // Frontend
  { _id: 's1', name: 'React.js', category: 'Frontend', level: 92, icon: '⚛️' },
  { _id: 's2', name: 'JavaScript (ES6+)', category: 'Frontend', level: 95, icon: '🟨' },
  { _id: 's3', name: 'Tailwind CSS', category: 'Frontend', level: 90, icon: '🎨' },
  // Creative Tools & Design
  { _id: 's4', name: 'Figma', category: 'Design', level: 88, icon: '🎨' },
  { _id: 's5', name: 'Adobe Lightroom Classic', category: 'Creative Tools', level: 90, icon: '📷' },
  { _id: 's6', name: 'Adobe Photoshop', category: 'Creative Tools', level: 80, icon: '🖌️' },
  { _id: 's7', name: 'Davinci Resolve', category: 'Creative Tools', level: 60, icon: '🎬' },

  // Backend
  { _id: 's8', name: 'Node.js', category: 'Backend', level: 88, icon: '🟢' },
  { _id: 's9', name: 'Express.js', category: 'Backend', level: 87, icon: '🚂' },

  // Database
  { _id: 's10', name: 'MongoDB', category: 'Database', level: 85, icon: '🍃' },

  // DevOps & Tools
  { _id: 's11', name: 'Git & GitHub', category: 'DevOps', level: 90, icon: '🐙' },
  { _id: 's12', name: 'VS Code', category: 'Tools', level: 85, icon: '💻' },
];
