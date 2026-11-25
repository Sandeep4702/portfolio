import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Illustration
const illustration = {
  animated: true
};

// Introduction
const greeting = {
  username: "Sandeep V",
  title: "Hi, I'm Sandeep V.",
  subTitle: emoji(
    "A passionate Frontend Developer and aspiring Full Stack Developer 🚀. I enjoy building responsive and user-friendly web applications using HTML, CSS, JavaScript and React.js. I also have knowledge of Python, SQL and Excel, and I'm continuously improving my development skills."
  ),
  resumeLink: "/Sandeep_V_Resume.pdf",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/Sandeep4702",
  linkedin: "https://www.linkedin.com/in/sandeepv47/",
  gmail: "vsandeep4747@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "FRONTEND DEVELOPER PASSIONATE ABOUT BUILDING WEB APPLICATIONS",

  skills: [
    emoji("⚡ Build responsive and user-friendly web interfaces."),
    emoji("⚡ Develop interactive frontend applications using React.js."),
    emoji(
      "⚡ Work with Python and SQL for programming and database operations."
    ),
    emoji("⚡ Analyze and organize data using Microsoft Excel.")
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],

  display: true
};

// Education
const educationInfo = {
  display: true,

  schools: [
    {
      schoolName: "SRM Institute of Science and Technology",
      logo: require("./assets/images/SRM Institute Tree Emblem.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "2022 - 2026",
      desc: "Graduated with a CGPA of 8.47.",
      descBullets: ["Studied Information Technology and Software Development."]
    }
  ]
};

// Technical Skills
const techStack = {
  viewSkillBars: true,

  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "75%"
    },
    {
      Stack: "Python Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL & Database",
      progressPercentage: "65%"
    },
    {
      Stack: "Microsoft Excel",
      progressPercentage: "70%"
    }
  ],

  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: false,
  experience: []
};

// GitHub Projects
const openSource = {
  showGithubProfile: "true",
  display: false
};

// Projects
const bigProjects = {
  title: "My Projects",
  subtitle: "SOME OF THE PROJECTS I HAVE WORKED ON",

  projects: [],

  display: false
};

// Achievements
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "My certifications and learning achievements.",

  achievementsCards: [],

  display: false
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle: "Sharing my learning journey.",

  displayMediumBlogs: "false",
  blogs: [],

  display: false
};

// Talks
const talkSection = {
  title: "Talks",
  subtitle: "Technology and Development.",

  talks: [],

  display: false
};

// Podcasts
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Technology conversations.",

  podcast: [],

  display: false
};

// Resume
const resumeSection = {
  title: "My Resume",
  subtitle: "Feel free to download my resume.",

  display: true
};

// Contact
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm open to entry-level opportunities and exciting projects. Feel free to connect with me.",
  number: "+91 9943007833",
  email_address: "vsandeep4747@gmail.com"
};

// Twitter
const twitterDetails = {
  userName: "",
  display: false
};

// Open to Opportunities
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
