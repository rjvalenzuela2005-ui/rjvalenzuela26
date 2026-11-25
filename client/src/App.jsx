import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import StatsBar      from './components/StatsBar';
import FeaturedWork  from './components/FeaturedWork';
import Skills        from './components/Skills';
import AboutMe       from './components/AboutMe';
import Process       from './components/Process';
import Testimonials  from './components/Testimonials';
import Contact       from './components/Contact';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Portfolio | RJ Valenzuela | UI/UX Designer</title>
        <meta name="description" content="Personal portfolio — Web Developer & UI/UX Designer. Showcasing projects, skills, and creative process." />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <StatsBar />
        <FeaturedWork />
        <Skills />
        <AboutMe />
        <Process />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b from-midnight to-deep min-h-screen font-body overflow-x-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
