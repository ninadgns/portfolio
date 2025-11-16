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

export const proficient = ['Full Stack Web Development', 'Python',' PostgreSQL','React/NextJS', 'Olympiad Mathematics']
export const workedWith = ['C++', 'Latex', 'Java', 'Rust', 'Github', 'Manim', 'Google Sheets', 'Blender', 'Photoshop']
export const interests = ['Machine Learning/AI', 'Web3/Blockchain', 'Competitive Programming', 'UI/UX Design', 'Game Development']
export const projects = [
  {
    title: "AI Study Helper",
    tech: "Next.js, FastAPI, ChromaDB, Gemini API",
    description: "Full-stack AI-powered document Q&A system using Retrieval-Augmented Generation (RAG) for intelligent study assistance.",
    projectType: "Academic Project (Ongoing)",
    groupSize: "Group of 4",
    details: [
      "Full-stack AI-powered document Q&A system using Retrieval-Augmented Generation (RAG) for intelligent study assistance. Students can upload PDF documents and ask natural language questions to receive context-aware answers.",
      "Built FastAPI backend with ChromaDB vector database for semantic search and Google Gemini API for embeddings and LLM responses. Implemented Celery with Redis for asynchronous PDF processing.",
      "Developed Next.js frontend with Supabase authentication and persistent chat sessions. Features multi-user support with isolated document collections per user."
    ],
    github: "https://github.com/Adha-KG/"
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
    title: "TEMS Academy LMS",
    tech: "Next.js 14, TypeScript, Supabase, PDF Generation",
    description: "Full-stack Learning Management System for TEMS Academy with automated PDF report generation and role-based access control.",
    projectType: "Personal Project",
    details: [
      "Developed a full-stack Learning Management System (LMS) for TEMS Academy, an Olympiad Math coaching center, where I used to work as an Olympiad math trainer.",
      "Seeing them struggling with spreadsheet's repetitive tasks, I made this to streamline managing student's data (exam scores and rank history) and weekly exam's result generation (PDF Resultsheet). Built with Next.js 14 and TypeScript with Supabase PostgreSQL as Database for storage, featuring a mobile-responsive UI."
    ],
    github: "https://github.com/ninadgns/TEMS-LMS"
  },
  {
    title: "NutriCulinary",
    tech: "Next.js, TypeScript, Supabase, Tailwind CSS",
    description: "Full-stack personalized meal planning platform with recipe recommendations based on dietary preferences, nutritional goals, and available ingredients.",
    projectType: "Academic Project",
    groupSize: "Group of 2",
    details: [
      "Full-stack personalized meal planning platform with recipe recommendations based on dietary preferences, nutritional goals, and available ingredients. Features admin dashboard and real-time data synchronization.",
      "Implemented frontend logic for data fetching, processing, and display, including the admin dashboard and user authentication.",
      "Managed Supabase integration with Next.js, ensuring seamless data flow."
    ],
    github: "https://github.com/ninadgns/meal-planner"
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
    title: "SecureFile",
    tech: "Python",
    description: "Desktop app that lets a user store files securely on the cloud with server side encryption.",
    projectType: "Academic Project",
    groupSize: "Group of 2",
    details: [
      "A desktop app that let's a user store files securely on the cloud with server side encryption.",
      "As this project was part of Networking Lab, we implemented TCP features such as reliable data transfer and flow control on application layer as learning purpose.",
      "This also featured chunking of files and server side encryption (AES 256) for the chunks. And a QT based desktop application."
    ],
    github: "https://github.com/mithunvoe/networking-project-backend",
    githubBackend: "https://github.com/mithunvoe/networking-project-backend",
    githubFrontend: "https://github.com/ninadgns/networking-project-frontend"
  },
  {
    title: "BookStay - Hotel Booking App",
    tech: "JavaFX, PostgreSQL, Maven",
    description: "Desktop hotel booking platform with multi-user authentication, real-time chat, and comprehensive booking management.",
    projectType: "Academic Project",
    groupSize: "Group of 3",
    details: [
      "Desktop hotel booking platform with multi-user authentication, real-time chat, and comprehensive booking management. Implements Decorator, Factory, Strategy, and Observer design patterns.",
      "Co-developed the real-time, multi-user chat functionality, including database persistence and backend logic.",
      "Implemented the client abstraction layer for Supabase integration using JDBC, enabling database connectivity from Java."
    ],
    github: "https://github.com/ninadgns/OOP-Project"
  }
]
export const achievements = [
  {
    title: "2nd Runners Up at Code Samurai Inter University Hackathon 2024",
    description: "Member of team 'DU_Diligence' in this competitive hackathon, focusing on rapid development and presentation of innovative solutions.",
    link: "https://www.codesamuraibd.net/",
    details: [
      "Member of team 'DU_Diligence' in this competitive hackathon, focusing on rapid development and presentation of innovative solutions for real-world problems."
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
    details: [
      "Recognized in 2019 & 2021 in this prestigious international mathematics competition for pre-university students across the Asia-Pacific region."
    ]
  },
  {
    title: "Bangladesh Mathematical Olympiad",
    description: "National winner in 2013, 2017, 2018, and 2021; competed yearly from 2013–2021.",
    details: [
      "National winner in 2013, 2017, 2018, and 2021; competed yearly from 2013–2021 with regional wins in all but 2015, and consistently advanced to National Camps and Selection Tests."
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