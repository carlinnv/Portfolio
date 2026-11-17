import type { ExperienceEntry } from './types.ts'

// Most recent first. Add or remove objects as needed.
export const experience: ExperienceEntry[] = [
  {
    role: 'AI Fellow, Google’s FaithfulMed Project',
    organization: 'Break Through Tech | Cornell Tech',
    dates: 'Mar. 2026 – Present',
    highlights: [
      'Built the orchestration layer for a five-agent AI system using Google’s Agent Development Kit that turns clinical reports into patient-friendly explanations, connecting teammates’ agents into a seven-stage pipeline with automated checks that every extracted fact quotes the source report.',
      'Defined the team’s success rubric of four measurable quality metrics, each with a calculation method and target.',
      'Developing a reproducible, resumable test harness comparing the multi-agent system against a single-model Gemini baseline on a locked 50-case test set, logging each run’s settings, sources, and failures for audit.',
      'Added 33 automated tests (130 passing) and caught a defect that swapped in the wrong source document during test runs; reviewed and merged code from GitHub and wrote Mac/Windows setup guides for a 6-person team.',
    ],
  },
  {
    role: 'Code Coach',
    organization: 'The Coder School, Millburn, NJ',
    dates: 'Nov. 2025 – Aug. 2026',
    highlights: [
      'Designed and delivered 15+ structured coding lesson plans covering Python, Java, C++, and Scratch.',
      'Led a five-part AI workshop guiding students through building their own chatbots using the Grok API.',
      'Coordinated with fellow coaches to maintain instructional continuity and track student progress after each session.',
    ],
  },
  {
    role: 'Software Research Engineer and URI Research Fellow (Summer 2026)',
    organization:
      'ViTALHS Lab: Physical-Virtual Flood Simulation Project, Newark, NJ',
    dates: 'Sept. 2025 – Aug. 2026',
    highlights: [
      'Won a competitive $3,000 research grant to develop a Unity application that projects a real-time flood simulation onto a non-parametric surface, featuring touch interaction between the projection and physical interface.',
      'Built a Python/OpenCV pipeline to detect touch points from live camera input, streaming coordinates to Unity.',
      'Computed a homography transform to map camera-space points into Unity world-space coordinates, validating touch registration accuracy to a mean error of 3.94px on held-out test markers.',
      'Tested and evaluated various materials for the model surface via 3D SLA printing and CNC milling.',
    ],
  },
  {
    role: 'Writing Tutor',
    organization: 'NJIT Writing Center, Newark, NJ',
    dates: 'Sept. 2025 – Aug. 2026',
    highlights: [
      'Communicated clear, actionable feedback on technical and academic writing for 20+ students a month.',
      'Assisted students in improving documentation clarity, structure, and logical flow for technical coursework.',
    ],
  },
  {
    role: 'VR Software Developer',
    organization: 'iXR Lab: VR Crime Scene Investigation Project, Newark, NJ',
    dates: 'Mar. 2025 – Sept. 2025',
    highlights: [
      'Designed and built a custom C# inventory system in Unity, then wired user input through the Unity XR Toolkit.',
      'Engineered a workaround to relocate the touch detection point, increasing responsiveness by ~15% for end users.',
      'Coordinated code changes across a 5-person team using GitLab branching strategies and merge request workflows.',
      'Awarded a $3,000 competitive research stipend through the Honors Summer Research Institute.',
    ],
  },
  {
    role: 'Game Development Intern',
    organization: 'Studio Wildcard (Hybrid)',
    dates: 'Sept. 2023 – June 2024',
    highlights: [
      'Developed a Java-based game mod using Eclipse and the Forge framework, enhancing environment generation.',
      'Collaborated with a team of 10+ programmers and designers to align visual assets with application logic.',
    ],
  },
]
