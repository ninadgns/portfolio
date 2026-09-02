// Kept short: with 12 achievement cards a 0.1s stagger meant the last card
// only finished ~1.8s after the section scrolled into view.
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35
    }
  }
};

// Groups mirror the "Technical Skills" section of cv/main.tex, but each list is
// the headline subset rather than the full CV line: the About section is a
// three-column grid, and a complete list makes this column twice the height of
// the two beside it. The PDF carries the exhaustive version.
export const languages = ['Python', 'TypeScript', 'C++', 'Java', 'Go', 'Rust', 'SQL', 'LaTeX']
export const aiAndMl = ['Claude Agent SDK', 'RAG', 'PyTorch', 'TensorFlow/Keras', 'ONNX Runtime']
export const engineering = ['FastAPI', 'Next.js/React', 'PostgreSQL', 'Docker', 'Kubernetes', 'gRPC']
export const experience = [
  {
    role: "AI Engineer",
    company: "Makebell Ltd.",
    location: "Central, Hong Kong (Remote)",
    duration: "June 2026 - Present, Full-time",
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
    details: [
      "Architected and executed agentic AI workflows (Cursor, Claude Code) to automate routine engineering tasks and accelerate delivery across frontend, backend, and admin surfaces.",
      "Designed and shipped large-scale analytics and billing-intelligence features (multi-tenant usage and credit APIs) in Python, FastAPI, and PostgreSQL on a SOC 2 compliant LegalTech platform.",
      "Built the internal admin application for RAG benchmarking and model evaluation, giving the team a repeatable way to compare retrieval and model configurations, alongside user lifecycle and role-based access control (RBAC), collaborating in a remote-first, async global team."
    ]
  },
  {
    role: "Academic Team Member",
    company: "Bangladesh Math Olympiad",
    location: "Bangladesh",
    duration: "2022 - Present",
    details: [
      "Train students at Olympiad Camps, running classes and tests.",
      "Develop questions, evaluate answer scripts, and prepare results for National and Regional Olympiads."
    ]
  },
  {
    role: "Secretary of Seminar & Workshop",
    company: "CSEDU Students' Club",
    location: "University of Dhaka",
    duration: "2023 - 2025",
    details: [
      "Organize departmental events and collaborate with other DU departments for inter-department activities."
    ]
  },
  {
    role: "Head of HR & Coordinator",
    company: "Notre Dame Math Club",
    location: "Notre Dame College",
    duration: "2020 - 2021",
    details: [
      "Arranged sessions with researchers and teachers from home and abroad, and organized large-scale events to foster students' passion for mathematics."
    ]
  }
]
// Order follows the Projects section of cv/main.tex. Entries the CV keeps
// commented as [OPTIONAL] (TEMS LMS, CGPA Calculator, NutriCulinary) stay live
// here: the page has no two-page budget to spend.
export const projects = [
  {
    title: "Bangla Photocard Verifier",
    tech: "YOLOv8-cls, ONNX Runtime, TensorFlow/Keras, FastAPI, Docker",
    description: "Visual-forensic classifier that flags fabricated Bengali news photocards from layout and typography cues, at 97.4% accuracy under leak-free group 5-fold cross-validation.",
    projectType: "Research",
    groupSize: "Group of 4",
    details: [
      "Visual-forensic classifier that flags fabricated Bengali news photocards from layout and typography cues, at 97.4% accuracy (±0.4%) under leak-free group 5-fold cross-validation, folds grouped by source image so augmented variants never leak across splits.",
      "Owned data and evaluation: labelled 337 originals, augmented to 3,800, and benchmarked Ultralytics YOLOv8-cls against TensorFlow/Keras ANN and CNN baselines; co-authoring an IEEE-format paper.",
      "Shipped the public web app: exported to ONNX and served on onnxruntime, cutting the container from 1.9 GB to roughly 300 MB, behind FastAPI with a feedback loop persisting user corrections to a Hugging Face dataset."
    ],
    github: "https://github.com/AnindyaMaster42001/Fake-Bangla-News-Photocard-Detector",
    liveUrl: "https://ninadgns-bangla-photocard-verifier.hf.space/",
    liveLabel: "Live Demo"
  },
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
      "Cross-platform cooking assistant with ingredient management, recipe discovery, timers, and offline support. Built email/Google auth, recipe search and filter, and the to-do feature.",
      "Contributed to Firebase and Supabase integration, covering initial connection, schema setup, and ongoing database maintenance."
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
      "Built the FastAPI backend on a ChromaDB vector database for semantic search with Gemini embeddings and responses, Celery and Redis for async PDF processing, and a Next.js frontend with Supabase auth, persistent chat sessions, and per-user document isolation."
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
      "Implemented TCP-style reliable data transfer and flow control at the application layer, with file chunking and AES-256 server-side encryption per chunk behind a Qt desktop client."
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
      "2D physics-based game recreation with custom collision detection, fuel management, and audio. Designed the custom physics engine and Entity Component System (ECS) architecture, plus the input and rendering systems."
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
// Titles use the placing the CV states ("3rd Place"), not the ceremony wording
// ("2nd Runners Up"), so a reader comparing page and PDF sees the same rank.
// DU CTF 2023 and NHSPC 2017 are live here but cut from the CV for length.
export const achievements = [
  {
    title: "3rd Place at Bengali LLM Hallucination Detection Challenge, IUT 12th ICT Fest 2026",
    link: "https://iutictfest26.tech/datathon",
    github: "https://github.com/AnindyaMaster42001/DU_RDANTO_Olikbochon_Onsite_Submission",
    details: [
      "National datathon on detecting hallucinated large language model outputs in Bengali, finishing at 0.904 macro-F1.",
      "Our system splits each case into grounding versus closed-book factuality over a retrieval and LLM-as-judge stack (Qwen2.5, BGE-M3, NLI), then settles it with a deterministic gold-answer verification layer that lifted 0.831 to 0.904 on CPU with no fine-tuning. Co-wrote the solution paper."
    ]
  },
  {
    title: "3rd Place at Code Samurai Inter University Hackathon 2024",
    link: "https://www.codesamuraibd.net/",
    details: [
      "Member of team 'DU_Diligence', placing third nationally among inter-university teams; judged on rapid development and final-round presentation of a working solution to a real-world waste management problem."
    ]
  },
  {
    title: "2nd Place at Al-Khwarizmi CTF Contest 2025",
    details: [
      "Member of a four-member team, placing second nationally in this cybersecurity capture-the-flag competition at Al-Khwarizmi Science Fest 2025."
    ]
  },
  {
    title: "Top 10 Finalist at MicroOps Hackathon, CUET CSE Fest 2025",
    details: [
      "Built an end-to-end automated microservices pipeline with CI/CD, service mesh, and observability during an intensive 11-hour onsite sprint."
    ]
  },
  {
    title: "1st Place at DU CTF 2024",
    details: [
      "Member of team 'DU_MPLING' in this university-wide capture-the-flag competition covering reverse engineering, web exploitation, and forensics."
    ]
  },
  {
    title: "5th Place at DU CTF 2023",
    details: [
      "Leader of team 'Doraemon' in the university's annual CTF event, demonstrating leadership and technical proficiency in cybersecurity challenges."
    ]
  },
  {
    title: "Honorable Mention at Asian Pacific Mathematical Olympiad",
    link: "https://www.apmo-official.org/",
    details: [
      "Recognized as a top solver in 2019 & 2021 in this prestigious international mathematics competition for pre-university students across the Asia-Pacific region."
    ]
  },
  {
    title: "National Round Champion at Bangladesh Mathematical Olympiad",
    link: "https://matholympiad.org.bd/",
    details: [
      "National winner in 2013, 2017 (Junior Category Champion), 2018, and 2021; competed yearly from 2013-2021 with regional wins in all but 2015, and consistently advanced to National Camps and Selection Tests."
    ]
  },
  {
    title: "Bangladesh IMO Team Selection Test (TST), 2019 & 2020",
    details: [
      "Qualified for and sat the national selection tests that choose Bangladesh's team for the International Mathematical Olympiad."
    ]
  },
  {
    title: "2nd Place at 1st Undergraduate Research Summit 2023, University of Dhaka",
    details: [
      "Team achievement in the university's inaugural research summit, involving the presentation and defense of a high school research project."
    ]
  },
  {
    title: "3rd Place at SCB-PA Inter School College Programming Contest (ISCPC) 2020",
    details: [
      "Top-three finish in this competitive programming contest for school and college students."
    ]
  },
  {
    title: "12th Place at National High School Programming Contest (NHSPC) 2017",
    details: [
      "Ranked well in this nationwide programming competition for high school students, assessing algorithmic thinking and coding skills."
    ]
  }
]
