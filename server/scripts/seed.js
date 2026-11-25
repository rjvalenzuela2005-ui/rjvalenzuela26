/**
 * Seed script – populates MongoDB with sample portfolio data.
 * Usage (from /server folder): node scripts/seed.js
 *       or via root npm alias: npm run seed (from /server)
 */
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');

const Project     = require('../models/Project');
const Skill       = require('../models/Skill');
const Testimonial = require('../models/Testimonial');
const Stat        = require('../models/Stat');

// ── Sample Data ────────────────────────────────────────────────────────────────

const projects = [
  {
    title: 'Smart Wedding Planner Dashboard',
    category: 'Web System',
    description: 'A web-based system that combines an AI chatbot with CRM-style client and vendor management to help wedding planners handle inquiries, bookings, and coordination in one place.',
    image: '/swpdashboard2.jpg',
    techStack: ['OpenAI', 'Node.js', 'Express', 'PostgreSQL', 'SupaBase', 'REST API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'Landing Page Design',
    category: 'Product Website',
    description: 'High-conversion product landing page featuring dark neon glassmorphism aesthetics, interactive feature comparisons, and Stripe payment checkout integration.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Stripe API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    category: 'Personal Brand',
    description: 'Personal developer & designer portfolio website with custom neon glassmorphism effects, dynamic REST API synchronization, and contact inquiry storage in MongoDB Atlas.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    title: 'Creative Website',
    category: 'Agency Website',
    description: 'Futuristic digital creative agency showcase featuring smooth page transitions, web canvas shader effects, and high-performance design.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    techStack: ['React', 'Three.js / Canvas', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

const skills = [
  { name: 'React.js',               category: 'Frontend',       icon: 'FaReact',               level: 92 },
  { name: 'JavaScript',             category: 'Frontend',       icon: 'SiJavascript',          level: 95 },
  { name: 'Tailwind CSS',           category: 'Frontend',       icon: 'SiTailwindcss',         level: 90 },
  { name: 'Figma',                  category: 'Design',         icon: 'SiFigma',               level: 88 },
  { name: 'Adobe Lightroom Classic', category: 'Creative Tools', icon: 'SiAdobelightroomclassic', level: 90 },
  { name: 'Adobe Photoshop',         category: 'Creative Tools', icon: 'TbBrandAdobePhotoshop', level: 80 },
  { name: 'Davinci Resolve',         category: 'Creative Tools', icon: 'SiDavinciresolve',         level: 60 },
  { name: 'Node.js',                category: 'Backend',        icon: 'FaNodeJs',              level: 88 },
  { name: 'Express.js',             category: 'Backend',        icon: 'SiExpress',             level: 87 },
  { name: 'MongoDB',                category: 'Database',       icon: 'SiMongodb',             level: 85 },
  { name: 'Git & GitHub',           category: 'DevOps',         icon: 'FaGitAlt',              level: 90 },
  { name: 'VS Code',                category: 'Tools',          icon: 'VscVscode',             level: 85 },
];

const testimonials = [
  {
    name: 'Capstone Project Manager & Leader',
    role: 'Project Manager & Lead UI/UX Designer',
    company: 'Bukidnon State University — BSIT Capstone',
    avatar: '',
    message: 'Spearheaded our agile team’s capstone system, steering both system architecture and UI/UX design. Guided sprint planning, user research, and cross-functional collaboration to deliver a production-grade web platform commended for its user experience and clean engineering.',
    rating: 5,
  },
  {
    name: 'Multimedia and Publication Head',
    role: 'Executive Head of Multimedia & Publication',
    company: 'BukSU Computer Society',
    avatar: '',
    message: 'Led the creative department for the university’s official IT student organization. Directed branding identity, official publicity materials, and multimedia assets across collegiate conferences, tech summits, and general assemblies while mentoring junior creatives in design tools.',
    rating: 5,
  },
  {
    name: 'Artistic Photography — 1st Place Champion',
    role: '1st Place Awardee (Artistic Photography)',
    company: 'BukSU Intramurals 2023',
    avatar: '',
    message: 'Awarded 1st Place Champion in the university-wide artistic photography competition. Commended for creative framing, emotive lighting, and meticulous color grading in Adobe Lightroom Classic, reflecting a deep passion for visual storytelling.',
    rating: 5,
  },
  {
    name: 'Media and Publication Head',
    role: 'Executive Media & Publication Head',
    company: 'MAS-AMiCUS BukSU Chapter',
    avatar: '',
    message: 'Oversaw creative media coverage, official publication releases, and social media campaigns for two consecutive academic years. Established unified visual guidelines that dramatically elevated student engagement and organizational visibility.',
    rating: 5,
  },
];

const stats = [
  { label: 'Years Designing & Creating', value: '3+',   icon: 'FaPalette',    order: 1 },
  { label: 'Creative & Web Projects',    value: '15+',  icon: 'FaLayerGroup', order: 2 },
  { label: 'Curated Visuals & Edits',    value: '100+', icon: 'FaPhotoVideo', order: 3 },
  { label: 'Visual Storytelling',        value: '100%', icon: 'FaMagic',      order: 4 },
];

// ── Seed Runner ────────────────────────────────────────────────────────────────

const seed = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri || uri.includes('<username>')) {
    console.error('❌  Cannot seed: set a valid MONGO_URI in server/.env first.');
    process.exit(1);
  }

  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(uri);
    console.log('Connected!\n');

    // Clear
    await Promise.all([
      Project.deleteMany({}),
      Skill.deleteMany({}),
      Testimonial.deleteMany({}),
      Stat.deleteMany({}),
    ]);
    console.log('Cleared existing data.');

    // Insert
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    await Testimonial.insertMany(testimonials);
    await Stat.insertMany(stats);

    console.log('\n🎉  Seed complete!');
    console.log(`   ${projects.length} Projects`);
    console.log(`   ${skills.length} Skills`);
    console.log(`   ${testimonials.length} Testimonials`);
    console.log(`   ${stats.length} Stats\n`);

    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message);
    process.exit(1);
  }
};

seed();
