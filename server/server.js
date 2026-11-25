const express      = require('express');
const cors         = require('cors');
const dotenv       = require('dotenv');
const connectDB    = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();

// CORS — allow the React dev server and production client (including Vercel)
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (_req, res) =>
  res.json({ status: 'ok', message: 'Portfolio API running', timestamp: new Date().toISOString() })
);

// Routes
app.use('/api/auth',         require('./routes/authRoutes'));
app.use('/api/projects',     require('./routes/projectRoutes'));
app.use('/api/skills',       require('./routes/skillRoutes'));
app.use('/api/testimonials', require('./routes/testimonialRoutes'));
app.use('/api/stats',        require('./routes/statRoutes'));
app.use('/api/contact',      require('./routes/messageRoutes'));

// 404
app.use('*', (req, res) =>
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` })
);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀  Server: http://localhost:${PORT}`);
  console.log(`💚  Health: http://localhost:${PORT}/api/health\n`);
});
