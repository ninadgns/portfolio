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

export const proficient = ['Full Stack Web Development', 'React/NextJS', 'Olympiad Mathematics', 'Python']
export const workedWith = ['Rust', 'C++', 'LaTeX', 'Java', 'PostgreSQL', 'GitHub', 'Manim', 'Blender', 'Photoshop']
export const interests = ['Machine Learning/AI', 'Web3/Blockchain', 'Competitive Programming', 'UI/UX Design', 'Game Development']
export const projects = [
  {
    title: "KitchenMate",
    tech: "Flutter, Dart, Firebase, Supabase",
    description: "Cross-platform mobile app for smart cooking assistance with ingredient management, recipe discovery, custom timers, and offline functionality.",
    github: "https://github.com/ninadgns/Android-Project-Pink-Flag"
  },
  {
    title: "TEMS Academy LMS",
    tech: "Next.js 14, TypeScript, Supabase",
    description: "Full-stack Learning Management System for TEMS Academy with automated PDF report generation and role-based access control.",
    github: "https://github.com/ninadgns/TEMS-LMS"
  },
  {
    title: "Hill Climb Racing Clone",
    tech: "C++, SDL2, Custom Physics Engine",
    description: "2D physics-based game recreation with custom collision detection, fuel management, and Entity Component System architecture.",
    github: "https://github.com/mithunvoe/Hill-Climb-Racing"
  },
  {
    title: "NutriCulinary",
    tech: "Next.js, TypeScript, Supabase",
    description: "Full-stack personalized meal planning platform with recipe recommendations and admin dashboard.",
    github: "https://github.com/ninadgns/meal-planner"
  },
  {
    title: "CGPA Calculator",
    tech: "React, HTML, CSS, JavaScript",
    description: "CGPA Calculator used by CSEDU students, featuring calculations for theory and lab subjects with mobile-responsive design.",
    github: "https://github.com/ninadgns/ninadgns.github.io/tree/main/CGPASource"
  },
  {
    title: "BookStay - Hotel Booking App",
    tech: "JavaFX, PostgreSQL, Maven",
    description: "Desktop hotel booking platform with multi-user authentication, real-time chat, and comprehensive booking management.",
    github: "https://github.com/ninadgns/OOP-Project"
  }
]
export const achievements = [
  {
    title: "2nd Runners Up at Code Samurai Inter University Hackathon 2024",
    description: "Member of team 'DU_Diligence' in this competitive hackathon, focusing on rapid development and presentation of innovative solutions."
  },
  {
    title: "1st Place at DU CTF 2024",
    description: "Member of team 'DU_MPLING' in this university-wide Capture The Flag cybersecurity competition."
  },
  {
    title: "Honorable Mention at Asian Pacific Mathematical Olympiad",
    description: "Recognized in 2019 & 2021 in this prestigious international mathematics competition for pre-university students."
  },
  {
    title: "Bangladesh Mathematical Olympiad National Winner",
    description: "2013, 2017, 2018, 2021. Consistently ranked well in BdMO and attended multiple National Camps."
  },
  {
    title: "International Mathematical Olympiad Team Selection",
    description: "Participated in selection tests in 2019, 2020. Qualified through rigorous pre-tests for this global competition."
  }
]