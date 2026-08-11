export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const proficient = ['Full Stack Web Development', 'Python', 'FastAPI', 'PostgreSQL', 'React/NextJS', 'TypeScript', 'Olympiad Mathematics']
export const workedWith = ['C++', 'LaTeX', 'Java', 'Rust', 'Git/GitHub', 'Docker', 'Manim', 'Google Sheets', 'Blender', 'Photoshop']
export const interests = ['Machine Learning/AI', 'Web3/Blockchain', 'Competitive Programming', 'UI/UX Design', 'Game Development']
export const experience = [
  {
    role: "AI Engineer",
    company: "Makebell Ltd.",
    location: "Central, Hong Kong (Remote)",
    duration: "June 2026 - Present, Full-time",
    badge: "primary",
    details: [
      "Built core components of the document-automation agent for an AI legal drafting platform: multi-turn DOCX drafting and redlining workflows using the Claude Agent SDK, producing Word-native tracked-change deliverables.",
      "Designed the document provenance and lineage system ensuring cumulative and version-to-version redlines resolve against the correct baseline, with fail-safe handling for re-uploads, lineage forks, renamed files, and adversarial inputs, backed by 18+ test suites.",
      "Built the OCR/ingestion pipeline and multi-model LLM orchestration across Anthropic and DeepSeek, alongside the in-browser DOCX viewer/editor and agent runtime security, concurrency, and sandboxing controls."
    ]
  },
  {
    role: "Full Stack Software Engineer",
    company: "Askturing.AI",
    location: "California, USA (Remote)",
    duration: "July 2024 - May 2026, Full-time",
    badge: "primary",
    details: [
      "Architected and executed agentic AI workflows (Cursor, Claude Code) to automate routine engineering tasks and accelerate delivery across frontend, backend, and admin surfaces.",
      "Designed and shipped large-scale analytics and billing-intelligence features, including multi-tenant usage and credit APIs, using Python, FastAPI, and PostgreSQL on a SOC 2 compliant LegalTech platform.",
      "Built the internal admin application for RAG benchmarking, model intelligence, and user lifecycle management, and maintained access management (RBAC) and permission control while collaborating in a remote-first, async global team."
    ]
  },
  {
    role: "Academic Team Member",
    company: "Bangladesh Math Olympiad",
    location: "Bangladesh",
    duration: "2022 - Present",
    badge: "primary",
    details: [
      "Train students at Olympiad Camps, including taking classes and tests.",
      "Develop questions for National and Regional Olympiads.",
      "Evaluate answer scripts and prepare results at National and Regional Olympiads."
    ]
  },
  {
    role: "Secretary of Seminar & Workshop",
    company: "CSEDU Students' Club",
    location: "University of Dhaka",
    duration: "2023 - 2025",
    badge: "secondary",
    details: [
      "Organize departmental events and collaborate with other DU departments for inter-department activities."
    ]
  },
  {
    role: "Head of HR & Coordinator",
    company: "Notre Dame Math Club",
    location: "Notre Dame College",
    duration: "2020 - 2021",
    badge: "secondary",
    details: [
      "Arranged sessions with distinguished researchers and teachers from home and abroad.",
      "Organized large-scale events to foster students' passion for mathematics."
    ]
  }
]
export const projects = [
  {
    title: "Hopper",
    tech: "Go, gRPC, Python, FastAPI, K8s, NATS, PostgreSQL, Docker",
    description: "Distributed, microservices-based VM cloud platform with a gRPC orchestration engine interfacing with the Kubernetes API.",
    projectType: "Academic Project",
    groupSize: "Group Project",
    details: [
      "Co-architected a distributed, microservices-based VM cloud platform, developing a gRPC orchestration engine in Go to interface with the Kubernetes API.",
      "Authored domain models with complex transactional logic, including an immutable double-entry credit ledger secured by PostgreSQL advisory locks.",
      "Implemented real-time metrics streaming via NATS JetStream and secured multi-service containerization using Docker, Compose, and Kubernetes.",
      "Engineered automated containerization and multi-service CI/CD pipelines to streamline deployment across the distributed architecture."
    ],
    github: "https://github.com/crevios/hopper"
  },
  {
    title: "KitchenMate",
    tech: "Flutter, Dart, Firebase, Supabase",
    description: "Cross-platform mobile app for smart cooking assistance with ingredient management, recipe discovery, custom timers, and offline functionality.",
    groupSize: "Group of 4",
    details: [
      "Cross-platform mobile app for smart cooking assistance with ingredient management, recipe discovery, custom timers, and offline functionality. Implemented email/Google authentication, recipe search/filter, and developed the to-do list feature.",
      "Contributed to Firebase and Supabase integration, handling initial connection and schema setup and ongoing database maintenance."
    ],
    github: "https://github.com/ninadgns/Android-Project-Pink-Flag"
  },
  {
    title: "AI Study Helper",
    tech: "Next.js, FastAPI, ChromaDB, Gemini API",
    description: "Full-stack AI-powered document Q&A system using Retrieval-Augmented Generation (RAG) for intelligent study assistance.",
    projectType: "Academic Project",
    groupSize: "Group of 4",
    details: [
      "Full-stack AI-powered document Q&A system using Retrieval-Augmented Generation (RAG) for intelligent study assistance. Students can upload PDF documents and ask natural language questions to receive context-aware answers.",
      "Built FastAPI backend with ChromaDB vector database for semantic search and Google Gemini API for embeddings and LLM responses. Implemented Celery with Redis for asynchronous PDF processing.",
      "Developed Next.js frontend with Supabase authentication and persistent chat sessions. Features multi-user support with isolated document collections per user."
    ],
    github: "https://github.com/Adha-KG/"
  },
  {
    title: "SecureFile",
    tech: "Python",
    description: "Desktop app that lets a user store files securely on the cloud with server-side encryption.",
    projectType: "Academic Project",
    groupSize: "Group of 2",
    details: [
      "A desktop app that lets a user store files securely on the cloud with server-side encryption.",
      "As this project was part of Networking Lab, we implemented TCP features such as reliable data transfer and flow control on the application layer for learning purposes.",
      "This also featured chunking of files and server-side encryption (AES 256) for the chunks, alongside a Qt-based desktop application."
    ],
    githubBackend: "https://github.com/mithunvoe/networking-project-backend",
    githubFrontend: "https://github.com/ninadgns/networking-project-frontend"
  },
  {
    title: "TEMS Academy LMS",
    tech: "Next.js 14, TypeScript, Supabase, PDF Generation",
    description: "Full-stack Learning Management System for TEMS Academy with automated PDF report generation and role-based access control.",
    projectType: "Personal Project",
    details: [
      "Developed a full-stack Learning Management System (LMS) for TEMS Academy, an Olympiad Math coaching center, where I used to work as an Olympiad math trainer.",
      "Seeing them struggling with the repetitive tasks of spreadsheets, I made this to streamline managing student data (exam scores and rank history) and weekly exam result generation (PDF Resultsheet). Built with Next.js 14 and TypeScript with Supabase PostgreSQL as the database for storage, featuring a mobile-responsive UI."
    ],
    github: "https://github.com/ninadgns/TEMS-LMS",
    liveUrl: "https://www.facebook.com/TEMS.MathAcademy",
    liveLabel: "TEMS Academy"
  },
  {
    title: "CGPA Calculator",
    tech: "React, HTML, CSS, JavaScript",
    description: "CGPA Calculator used by CSEDU students, featuring calculations for theory and lab subjects with mobile-responsive design.",
    projectType: "Personal Project",
    details: [
      "Built a CGPA Calculator as a hobby in my first year, using React.",
      "This is used by my batchmates regularly, featuring calculations for theory and lab subjects, including previous CGPA, with a mobile-responsive design."
    ],
    github: "https://github.com/ninadgns/ninadgns.github.io/tree/main/CGPASource"
  },
  {
    title: "Hill Climb Racing Clone",
    tech: "C++, SDL2, Custom Physics Engine",
    description: "2D physics-based game recreation with custom collision detection, fuel management, and audio integration.",
    projectType: "Academic Project",
    groupSize: "Group of 2",
    details: [
      "2D physics-based game recreation with custom collision detection, fuel management, and audio integration. Designed and implemented the custom physics engine and Entity Component System (ECS) architecture.",
      "Developed input systems and graphics rendering components, contributing to core gameplay mechanics."
    ],
    github: "https://github.com/mithunvoe/Hill-Climb-Racing"
  },
  {
    title: "NutriCulinary",
    tech: "Next.js, TypeScript, Supabase, Tailwind CSS",
    description: "Full-stack personalized meal planning platform with recipe recommendations based on dietary preferences, nutritional goals, and available ingredients.",
    projectType: "Academic Project",
    groupSize: "Group of 2",
    details: [
      "Full-stack personalized meal planning platform with recipe recommendations based on dietary preferences, nutritional goals, and available ingredients. Features an admin dashboard and real-time data synchronization.",
      "Implemented frontend logic for data fetching, processing, and display, including the admin dashboard and user authentication.",
      "Managed Supabase integration with Next.js, ensuring seamless data flow."
    ],
    github: "https://github.com/ninadgns/meal-planner"
  }
]
export const achievements = [
  {
    title: "2nd Runners Up at Bengali LLM Hallucination Detection Challenge, IUT 12th ICT Fest 2026",
    description: "Placed third in a national datathon on detecting hallucinated large language model outputs in Bengali.",
    link: "https://iutictfest26.tech/datathon",
    details: [
      "Placed third in a national datathon on detecting hallucinated large language model outputs in Bengali; built the detection pipeline and defended the methodology in documentation and a final-round presentation."
    ]
  },
  {
    title: "2nd Runners Up at Code Samurai Inter University Hackathon 2024",
    description: "Member of team 'DU_Diligence' in this competitive hackathon, focusing on rapid development and presentation of innovative solutions.",
    link: "https://www.codesamuraibd.net/",
    details: [
      "Member of team 'DU_Diligence' in this competitive hackathon, focusing on rapid development and presentation of innovative solutions for real-world problems."
    ]
  },
  {
    title: "1st Runners Up at Al-Khwarizmi CTF Contest 2025",
    description: "Secured second position as part of a four-member team in this nationwide cybersecurity CTF competition, part of the Al-Khwarizmi Science Fest 2025.",
    details: [
      "Secured second position as part of a four-member team in this nationwide cybersecurity Capture The Flag (CTF) competition, part of the Al-Khwarizmi Science Fest 2025, competing against the best teams from across Bangladesh in real-world cybersecurity scenarios and challenges."
    ]
  },
  {
    title: "Top 10 Finalist at MicroOps Hackathon, CUET CSE Fest 2025",
    description: "Built an end-to-end automated microservices pipeline during an intensive 11-hour onsite sprint.",
    details: [
      "Built an end-to-end automated microservices pipeline with CI/CD, service mesh, and observability during an intensive 11-hour onsite sprint, finishing in the top 10 teams nationwide."
    ]
  },
  {
    title: "1st Place at DU CTF 2024",
    description: "Member of team 'DU_MPLING' in this university-wide Capture The Flag cybersecurity competition.",
    details: [
      "Member of team 'DU_MPLING' in this university-wide Capture The Flag (CTF) cybersecurity competition, which challenged participants with problems in areas like reverse engineering, web exploitation, and forensics."
    ]
  },
  {
    title: "5th Place at DU CTF 2023",
    description: "Leader of team 'Doraemon' in the university's annual CTF event.",
    details: [
      "Leader of team 'Doraemon' in the university's annual CTF event, demonstrating leadership and technical proficiency in cybersecurity challenges."
    ]
  },
  {
    title: "Honorable Mention at Asian Pacific Mathematical Olympiad",
    description: "Recognized in 2019 & 2021 in this prestigious international mathematics competition for pre-university students.",
    link: "https://www.apmo-official.org/",
    details: [
      "Recognized as a top solver in 2019 & 2021 in this prestigious international mathematics competition for pre-university students across the Asia-Pacific region."
    ]
  },
  {
    title: "National Round Champion at Bangladesh Mathematical Olympiad",
    description: "National winner in 2013, 2017 (Junior Category Champion), 2018, and 2021; competed yearly from 2013-2021.",
    link: "https://matholympiad.org.bd/",
    details: [
      "National winner in 2013, 2017 (Junior Category Champion), 2018, and 2021; competed yearly from 2013-2021 with regional wins in all but 2015, and consistently advanced to National Camps and Selection Tests."
    ]
  },
  {
    title: "International Mathematical Olympiad (IMO) Team Selection Test Participant",
    description: "Qualified for and attended the selection tests for IMO in 2019 and 2020.",
    details: [
      "Qualified for and attended the selection tests for IMO in 2019 and 2020; with preparation and exams involving extensive work on IMO Shortlist (IMOSL) problems."
    ]
  },
  {
    title: "1st Runners Up at 1st Undergraduate Research Summit 2023, University of Dhaka",
    description: "Team achievement in the university's inaugural research summit.",
    details: [
      "Team achievement in the university's inaugural research summit, involving the presentation and defense of a high school research project."
    ]
  },
  {
    title: "3rd Place at SCB-PA Inter School College Programming Contest (ISCPC)",
    description: "Achieved a top-three finish in this competitive programming contest for school and college students in 2020.",
    details: [
      "2020. Achieved a top-three finish in this competitive programming contest for school and college students."
    ]
  },
  {
    title: "12th Place at National High School Programming Contest (NHSPC)",
    description: "Ranked well in this nationwide programming competition for high school students in 2017.",
    details: [
      "2017. Ranked well in this nationwide programming competition for high school students, assessing algorithmic thinking and coding skills."
    ]
  }
]
