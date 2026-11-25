# ⚡ MERN Personal Portfolio — Aqua Neon Glassmorphism

A production-ready, full-stack **MERN (MongoDB, Express.js, React, Node.js)** personal portfolio website built with **Tailwind CSS**, **Framer Motion**, and **MongoDB Atlas**, styled with the **dark futuristic "aqua neon glassmorphism"** aesthetic.

---

## 🎨 Visual Design System

- **Palette**: Blue and blue-green hues only (strictly zero pink, magenta, or purple)
  - **Background**: Midnight navy to deep teal (`#030B1A` to `#06182B`) with radial glows and subtle grid
  - **Primary Accents**: Electric blue (`#2563EB`) and sky blue (`#38BDF8`)
  - **Secondary Accents**: Cyan (`#22D3EE`) and teal (`#14B8A6`)
  - **Highlight Accent**: Aqua-mint (`#2DD4BF`)
  - **Gradients**: `linear-gradient(135deg, #2563EB, #22D3EE, #2DD4BF)`
- **Typography**:
  - **Display Titles**: Bold condensed font (`Anton`)
  - **Body Text**: Clean geometric sans (`Inter`)
  - **Taglines & Signatures**: Neon script font (`Yellowtail`)
- **Cards**: Semi-transparent dark navy (`rgba(8, 20, 40, 0.65)`) with backdrop blur, 1px cyan borders, and neon hover glow

---

## 📑 Page Sections (In Sequence)

1. **Navbar**: Logo badge, owner name & title, smooth scroll links, and an animated pulsing "Available for new projects" status indicator.
2. **Hero**: Giant display name (`ZAYN KABIR`) with outline strokes layered around the cutout portrait photo, gradient role title, glowing script tagline ("Build Something Amazing"), service pills, and primary CTA.
3. **Stats Bar**: Glowing glass container with animated count-up numbers for Years of Experience, Projects Completed, Happy Clients, and Client Satisfaction.
4. **Featured Work**: Responsive project grid (Dashboard UI Design, Landing Page Design, Portfolio Website, Creative Website) with interactive detail modals and links to live demos and GitHub repositories.
5. **Skills**: Modern tech stack cards (React, Node.js, Express, MongoDB, Tailwind, Figma, Git, JavaScript) with proficiency meters and glowing icon squares.
6. **About Me**: Narrative biography, custom script signature, experience badge, and framed portrait with gradient neon rings.
7. **Design Process**: 5-step methodology cards (**01 Discover**, **02 Ideate**, **03 Design**, **04 Test**, **05 Deliver**) connected with directional milestones and gradient fills.
8. **Testimonials**: Glass review carousel with star ratings, client quote, circular avatar with gradient border, and auto-rotation controls.
9. **Contact & Footer**: Glowing circular *"Let's create something extraordinary together"* badge, contact details, responsive inquiry form (with validation & Nodemailer support), mobile QR code, and social links.

---

## 📁 Folder Structure

```text
portfolio2/
├── package.json                         # Root concurrent script runner
├── .gitignore                           # Git ignore rules for node_modules & env
├── README.md                            # Complete setup & deployment guide
│
├── server/                              # Node.js + Express + MongoDB Backend
│   ├── package.json                     # Express, Mongoose, JWT, Nodemailer, etc.
│   ├── server.js                        # App initialization & route mounting
│   ├── .env                             # Environment secrets (port, DB URI, JWT)
│   ├── .env.example                     # Environment template
│   ├── config/
│   │   └── db.js                        # Mongoose connection with warning handling
│   ├── models/
│   │   ├── Project.js                   # Project schema (techStack, URLs, featured)
│   │   ├── Skill.js                     # Skill schema (name, category, level, icon)
│   │   ├── Testimonial.js               # Testimonial schema (avatar, rating, role)
│   │   ├── Message.js                   # Contact messages schema
│   │   └── Stat.js                      # Metric counters schema
│   ├── controllers/
│   │   ├── authController.js            # Admin JWT login
│   │   ├── projectController.js         # Project CRUD
│   │   ├── skillController.js           # Skill CRUD
│   │   ├── testimonialController.js     # Testimonial CRUD
│   │   ├── statController.js            # Stat CRUD
│   │   └── messageController.js         # Contact message handling & Nodemailer
│   ├── middleware/
│   │   ├── auth.js                      # Bearer JWT verification
│   │   └── errorHandler.js              # Centralized error handler
│   ├── routes/
│   │   ├── authRoutes.js                # POST /api/auth/login
│   │   ├── projectRoutes.js             # /api/projects
│   │   ├── skillRoutes.js               # /api/skills
│   │   ├── testimonialRoutes.js         # /api/testimonials
│   │   ├── statRoutes.js                # /api/stats
│   │   └── messageRoutes.js             # /api/contact
│   └── scripts/
│       └── seed.js                      # Seed database with sample projects & skills
│
└── client/                              # React 18 + Vite + Tailwind CSS Frontend
    ├── package.json                     # React, Framer Motion, Axios, Icons, etc.
    ├── vite.config.js                   # Vite config with API proxy
    ├── tailwind.config.js               # Theme colors (midnight, cyan, mint, etc.)
    ├── postcss.config.js                # PostCSS setup
    ├── index.html                       # HTML document & Google Fonts
    ├── .env                             # VITE_API_URL
    ├── .env.example
    └── src/
        ├── index.css                    # Tailwind directives & glassmorphism utilities
        ├── main.jsx                     # Root React render with Helmet & Toaster
        ├── App.jsx                      # Page orchestration & layout
        ├── services/
        │   └── api.js                   # Axios client with JWT interceptor
        └── components/
            ├── Navbar.jsx               # Header with available badge & mobile menu
            ├── Hero.jsx                 # Split display name, glowing photo, tagline
            ├── StatsBar.jsx             # Animated count-up numbers
            ├── SectionTitle.jsx         # Section title component with sparkle icon
            ├── FeaturedWork.jsx         # Project grid with modal viewer
            ├── Skills.jsx               # Tech cards with proficiency bars
            ├── AboutMe.jsx              # Bio, photo, script signature
            ├── Process.jsx              # 5-step workflow cards
            ├── Testimonials.jsx         # Testimonial review carousel
            └── Contact.jsx              # Circular badge, working form & footer
```

---

## 🚀 Setup & Local Execution

### 1. Install Dependencies
```bash
# In project root:
npm run install:all
```

### 2. Configure Environment Variables

**Backend (`server/.env`):**
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
JWT_SECRET=supersecret_jwt_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=supersecretpassword
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_receiving_email@gmail.com
CLIENT_URL=http://localhost:5173
```

**Frontend (`client/.env`):**
```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Seed Database
```bash
npm run seed
```

### 4. Run Development Servers
```bash
npm run dev
```
- **Client Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)
- **Health Check**: [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📡 REST API Reference

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/health` | Public | Server healthcheck status |
| `POST` | `/api/auth/login` | Public | Admin login, returns JWT token |
| `GET` | `/api/projects` | Public | Fetch all projects (`?category=`, `?featured=`) |
| `GET` | `/api/projects/:id` | Public | Fetch single project by ID |
| `POST` | `/api/projects` | Protected | Create a new project (Bearer JWT) |
| `PUT` | `/api/projects/:id` | Protected | Update existing project (Bearer JWT) |
| `DELETE` | `/api/projects/:id` | Protected | Delete project (Bearer JWT) |
| `GET` | `/api/skills` | Public | Fetch all skills (`?category=`) |
| `POST` | `/api/skills` | Protected | Create skill (Bearer JWT) |
| `DELETE` | `/api/skills/:id` | Protected | Delete skill (Bearer JWT) |
| `GET` | `/api/testimonials` | Public | Fetch client testimonials |
| `POST` | `/api/testimonials` | Protected | Add testimonial (Bearer JWT) |
| `DELETE` | `/api/testimonials/:id` | Protected | Remove testimonial (Bearer JWT) |
| `GET` | `/api/stats` | Public | Fetch metric counters |
| `POST` | `/api/contact` | Public | Validate & save message, send email notification |
| `GET` | `/api/contact` | Protected | Read all submitted messages (Bearer JWT) |

---

## 🚢 Deployment Guide

### 1. Database: MongoDB Atlas
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Add a Database User under **Database Access**.
3. Allow network traffic from everywhere (`0.0.0.0/0`) under **Network Access**.
4. Retrieve the connection string under **Clusters > Connect > Drivers** and set as `MONGO_URI`.

### 2. Backend: Render or Railway
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- **Environment Variables**: Add all variables from `server/.env` (including `CLIENT_URL` pointing to your deployed frontend domain).

### 3. Frontend: Vercel or Netlify
- **Root Directory**: `client`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: `VITE_API_URL=https://your-backend-service.onrender.com/api`
