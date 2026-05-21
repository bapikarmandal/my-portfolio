import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const roles = ['Future Software Engineer', 'Full Stack Developer', 'React Developer', 'AI Enthusiast', 'Creative Web Designer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const roles_cycle = ['Future Software Engineer', 'Full Stack Developer', 'React Developer', 'AI Enthusiast', 'Creative Web Designer'];
    let currentRole = roles_cycle[currentRoleIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles_cycle.length);
          setTypedText('');
        }, 2000);
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentRoleIndex]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  };

  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Responsive Web Design', 'UI/UX Optimization', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'REST API Development', 'Authentication & Authorization', 'PHP Basics'] },
    { category: 'Database & Cloud', items: ['MongoDB', 'MySQL', 'Firebase', 'Cloudinary'] },
    { category: 'Tools & Platforms', items: ['Git & GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Figma Basics'] },
    { category: 'Additional', items: ['Problem Solving', 'Team Collaboration', 'Project Management', 'Debugging & Optimization', 'AI Tool Integration', 'SEO Basics'] }
  ];

  const projects = [
    {
      title: 'Jarvis AI Desktop Assistant',
      description: 'An AI-powered desktop assistant inspired by Jarvis that performs voice-based commands, automation, and smart desktop interactions.',
      tech: ['Python', 'AI APIs', 'Automation Tools'],
      features: ['Voice command support', 'Desktop automation', 'Smart assistant system', 'AI interaction features']
    },
    {
      title: 'Online Course Material Management System',
      description: 'Developed a full-stack web application for managing and sharing educational course materials efficiently.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      features: ['Secure authentication', 'Upload PDFs, notes, videos', 'Student & teacher dashboards', 'Search and filter functionality']
    },
    {
      title: 'AI Powered Resume & Portfolio Builder',
      description: 'An AI-assisted platform that helps users generate professional resumes and portfolio websites instantly.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase'],
      features: ['Real-time preview', 'Downloadable PDF resume', 'Portfolio customization', 'AI-generated suggestions']
    },
    {
      title: 'Smart Attendance Management System',
      description: 'A smart attendance management platform for educational institutions.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      features: ['Attendance tracking', 'Admin dashboard', 'Monthly reports', 'Secure database']
    },
    {
      title: 'Social Media Reel Analytics Dashboard',
      description: 'A dashboard that analyzes social media reel performance and engagement trends.',
      tech: ['React.js', 'Chart.js', 'Firebase'],
      features: ['Real-time analytics', 'Growth tracking', 'Engagement charts', 'Audience insights']
    },
    {
      title: 'Modern E-Commerce Website',
      description: 'A modern e-commerce platform with authentication and shopping features.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      features: ['Product search', 'Shopping cart', 'Order management', 'Secure authentication', 'Responsive UI']
    }
  ];

  const achievements = [
    { stat: '6+', label: 'Full-Stack Projects' },
    { stat: '50+', label: 'Skills Mastered' },
    { stat: '100%', label: 'Project Commitment' },
    { stat: '∞', label: 'Learning Drive' }
  ];

  const differences = [
    {
      title: 'Fast Learner',
      description: 'Quick adaptation to new frameworks, tools, and technologies with strong problem-solving mindset.'
    },
    {
      title: 'Full-Stack Builder',
      description: 'Ability to build complete full-stack applications from frontend to backend independently.'
    },
    {
      title: 'UX Focused',
      description: 'Focus on clean UI design and smooth user experience in every project.'
    },
    {
      title: 'Self-Improver',
      description: 'Consistent project building and continuous self-improvement mindset.'
    }
  ];

  const navLinks = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];

  const scrollToSection = (section) => {
    setActiveNav(section);
    setMobileMenuOpen(false);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            BM
          </motion.div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <motion.button
                key={link}
                onClick={() => scrollToSection(link)}
                className={`capitalize transition-all ${activeNav === link ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-300 hover:text-white'}`}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="md:hidden bg-black/90 border-t border-white/10 p-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map(link => (
                  <motion.button
                    key={link}
                    onClick={() => scrollToSection(link)}
                    className="capitalize text-left text-gray-300 hover:text-cyan-400 transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>
        
        {/* Animated Blobs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Bapikar Mandal
          </motion.h1>

          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-cyan-300 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building scalable and modern web experiences with creativity & performance.
          </motion.p>

          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Turning ideas into fast, responsive, and user-friendly applications.
          </motion.p>

          <motion.div 
            className="flex gap-6 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-2xl text-cyan-400">↓</div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          {...fadeInUp}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="space-y-6"
            {...fadeInUp}
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Diploma student in Computer Science and Technology from India, passionate about web development, software engineering, and modern technologies.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I thrive on building modern web applications and experimenting with creative software ideas. My journey is driven by the desire to become a software engineer at a top IT company like Infosys.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm actively learning React, Node.js, and full-stack development while maintaining a strong focus on clean code, scalability, and user experience.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
                variants={fadeInUp}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 255, 255, 0.1)' }}
              >
                <p className="text-3xl font-bold text-cyan-400 mb-2">{achievement.stat}</p>
                <p className="text-gray-400 text-sm">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          {...fadeInUp}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-6">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          {...fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-400/20 hover:border-cyan-400/50 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(0, 255, 255, 0.1)' }}
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <motion.button
                  className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-black text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.button>
                <motion.button
                  className="flex-1 py-2 border border-cyan-400 text-cyan-400 text-sm font-semibold rounded-lg hover:bg-cyan-400/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          {...fadeInUp}
        >
          What Makes Me Different
        </motion.h2>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {differences.map((diff, idx) => (
            <motion.div
              key={idx}
              className="p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-400/30 hover:border-cyan-400/70 transition-all"
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: '0 25px 50px rgba(0, 255, 255, 0.15)' }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-3">✨</div>
              <h3 className="text-xl font-semibold text-white mb-3">{diff.title}</h3>
              <p className="text-gray-400 leading-relaxed">{diff.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
          {...fadeInUp}
        >
          Let's Connect
        </motion.h2>

        <motion.div 
          className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-400/30 backdrop-blur"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-sm font-semibold text-cyan-300 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-cyan-300 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-cyan-300 mb-2">Message</label>
              <textarea 
                placeholder="Your message..."
                rows="5"
                className="w-full px-4 py-3 bg-black/40 border border-cyan-400/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>

          <motion.div 
            className="mt-8 pt-8 border-t border-cyan-400/20 text-center space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-400">
              <span className="text-cyan-400 font-semibold">Location:</span> India
            </p>
            <p className="text-gray-400">
              <span className="text-cyan-400 font-semibold">Status:</span> Available for internships and opportunities
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <motion.div 
          className="max-w-6xl mx-auto text-center space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/bapikar2022" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://www.instagram.com/bapikar.exe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Footer Text */}
          <div className="text-gray-500 text-sm space-y-2">
            <p>© 2026 Bapikar Mandal. Built with React & Tailwind CSS.</p>
            <p className="text-xs text-gray-600">Portfolio v1.0</p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}