<div align="center">
  <h1>Bapikar Mandal — Portfolio</h1>
  <p><strong>A responsive, animated personal portfolio built to present skills, projects, and career goals.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
    <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </p>

  <p><a href="https://bapikarmandal.vercel.app">Live portfolio</a> · <a href="https://github.com/bapikarmandal">GitHub profile</a></p>
</div>

## Overview

This is the personal portfolio website of **Bapikar Mandal**, an aspiring full-stack developer. The site uses a dark, blue-and-cyan visual system with motion-led interactions to introduce professional interests, technical skills, project concepts, and availability for internships and opportunities.

## Highlights

- Responsive single-page layout with smooth-scroll navigation and a mobile menu
- Animated hero section with rotating developer roles and ambient gradient effects
- Skills organized across frontend, backend, database/cloud, tools, and additional capabilities
- Project showcase covering AI assistance, course management, resume building, attendance, analytics, and e-commerce concepts
- Achievement and strengths sections that communicate a full-stack, UX-focused learning journey
- Motion-driven transitions and hover states built with Framer Motion
- Social links and an informational contact form section

## Tech Stack

| Category | Tools |
| --- | --- |
| UI | React 19, JSX, Tailwind CSS |
| Build tooling | Vite 8, PostCSS, Autoprefixer |
| Animation | Framer Motion |
| Icons | Lucide React |
| Quality | ESLint |

## Run Locally

### Prerequisites

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/bapikarmandal/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

Vite will print the local development URL, normally [http://localhost:5173](http://localhost:5173).

## Available Scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Create an optimized production build in dist/
npm run preview   # Preview the production build locally
npm run lint      # Check the project with ESLint
```

## Page Structure

```text
src/
├── App.jsx        # One-page portfolio, navigation, content, and animations
├── main.jsx       # React application entry point
├── index.css      # Tailwind directives
└── assets/        # Local visual assets
public/
└── icons.svg      # Public icon asset
```

## Customization

Most portfolio content is intentionally centralized in [`src/App.jsx`](src/App.jsx):

- `roles` controls the rotating hero title
- `skills` controls the categorized technical-skills cards
- `projects` controls the project showcase content
- `achievements` and `differences` control the career and strengths sections
- `navLinks` controls the primary navigation

Replace these data arrays and the social URLs in the footer to adapt the portfolio to new projects or contact channels.

## Notes

- The **Contact Me** form is currently a visual interface; it does not submit messages to an email, API, or database yet.
- The GitHub and Demo buttons in project cards are presentational placeholders. Add per-project URLs before treating them as live links.
- No environment variables are required for the current static portfolio.

## Future Improvements

- Connect the contact form to a validated email or form service
- Add live GitHub and demo links for each project
- Add project images, case studies, and accessibility improvements
- Add tests and continuous-deployment checks

---

Designed and built by [Bapikar Mandal](https://github.com/bapikarmandal).
