import type { Project } from './types.ts'

// Most recent first. To link a project, add e.g.
//   link: { href: 'https://github.com/carlinnv/your-repo', label: 'View on GitHub' },
export const projects: Project[] = [
  {
    title: 'RollCall: AI Attendance Outreach Agent',
    context: 'HackPrinceton Fall 2026',
    date: 'Nov. 2026',
    highlights: [
      'Co-built a full-stack attendance tool that texts families after a student’s absence, uses Gemini to label the reason for absence, and detects shared causes like a failed bus route.',
      'Built the iMessage messaging layer on Photon 2.0 to send absence check-ins and approved plans, including a keyword-classifier fallback when Gemini fails, plain-language opt-out handling, and latency-tracked message logs.',
      'Built a multilingual keyword safety check that flags at-risk replies and alerts the on-call counselors.',
    ],
    tags: ['FastAPI', 'React', 'TigerData', 'Gemini', 'Photon 2.0'],
    link: {
      href: 'https://github.com/carlinnv/RollCall',
      label: 'View on GitHub',
    },
  },
  {
    title: 'Matrix Arcade: Determinant and Invertibility Explainer',
    context: 'CS 375 Honors',
    date: 'Oct. 2026',
    highlights: [
      'Extended an open-source interactive linear algebra explorable with a scroll-driven explainer that teaches matrix invertibility at a high school/undergraduate level.',
      'Directed an AI coding agent (Claude Code) using a written requirements spec, a project rules file, and a running development log recording each version’s goals, design decisions, and test status.',
    ],
    tags: ['Svelte', 'SvelteKit', 'Tailwind CSS', 'Claude Code'],
    link: {
      href: 'https://carlinnv.github.io/matrix-explorable/determinant/v4/',
      label: 'Try the explainer',
    },
  },
  {
    title: 'EcoLens AI: Waste Disposal Assistant',
    context: 'LA Hacks 2026',
    date: 'Apr. 2026',
    highlights: [
      'Co-built a mobile-first web app that identifies waste items in camera view and returns localized reduce/reuse/recycle guidance.',
      'Integrated the Gemini API to analyze items in real time and generate disposal recommendations.',
    ],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Gemini API'],
    link: {
      href: 'https://devpost.com/software/ecolens-ai-dp7ih3',
      label: 'View on Devpost',
    },
  },
  {
    title: 'Suspicion Sort: AI-Assisted Digital Forensics Triage',
    context: 'Hoya Hacks 2026, Powered by Cisco',
    date: 'Jan. 2026',
    highlights: [
      'Co-built a full-stack forensics tool that ranks files by a suspicion score using entropy analysis, extension mismatch, timestomp, and hidden-file checks, plus a Gemini-powered analyst chatbot that explains threats.',
      'Implemented JWT authentication in Flask (signup, login, token revocation) and the React login interface.',
    ],
    tags: ['Flask', 'React', 'JWT', 'Gemini'],
    link: {
      href: 'https://devpost.com/software/suspicion-sort',
      label: 'View on Devpost',
    },
  },
  {
    title: 'Pantheon of Productivity',
    context: 'Award Winner (156 participants), GirlHacks 2025',
    date: 'Oct. 2025',
    highlights: [
      'Co-built a full-stack web application; used MongoDB to implement a journaling feature and session tracking, supporting persistent user data.',
      'Integrated the Gemini AI API to power an AI-assisted bot that converts natural-language input into calendar tasks.',
    ],
    tags: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Gemini API'],
    link: {
      href: 'https://devpost.com/software/pantheon-of-productivity',
      label: 'View on Devpost',
    },
  },
  {
    title: 'Newark Connect: Community Outreach Platform',
    context: 'GirlHacks 2024',
    date: 'Sept. 2024',
    highlights: [
      'Developed the backend routing and database layer for a Flask web application, enabling community engagement.',
      'Designed and implemented the database schema using SQLite and SQLAlchemy to support persistent data.',
    ],
    tags: ['Flask', 'SQLite', 'SQLAlchemy'],
    link: {
      href: 'https://devpost.com/software/newark-connect',
      label: 'View on Devpost',
    },
  },
]
