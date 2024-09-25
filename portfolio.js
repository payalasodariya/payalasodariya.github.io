import emoji from "react-easy-emoji";

export const greetings = {
  name: "Payal Baldha",
  title: "Hi all, I'm Payal",
  description:
    "I'm passionate Frontend Developer having an experience of 4+ years. I have experience working with Angular, VueJs, ReactJs and NodeJs.",
  resumeLink:
    "https://docs.google.com/document/d/1lwE4_TYljbuAfxTqgEgCbEqBjjNCpROpjEk1Xz0sLqU/edit?usp=sharing",
};

export const openSource = {
  githubUserName: "payalasodariya",
};

export const contact = {};

export const socialLinks = {
  // instagram: "https://www.instagram.com/Baldha___",
  twitter: "https://twitter.com/AsodariyaPayal",
  github: "https://github.com/payalasodariya",
  linkedin: "https://www.linkedin.com/in/payalasodariya",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "Frontend Development | Backend Development ",
  data: [
    {
      title: "Frontend Development & Backend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building Reusable Component Based Web Applications"),
        emoji("⚡ Building RESTful APIs"),
      ],
      softwareSkills: [
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "logos:nodejs",
        },
        {
          skillName: "ReactJs",
          fontAwesomeClassname: "vscode-icons:file-type-reactts",
        },
        {
          skillName: "ViewJs",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "logos:yarn",
        },
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb",
        },
      ],
    },
  ],
};

export const SkillBars = [];

export const educationInfo = [
  {
    University: "Gujarat Technological University",
    subHeader: "Bachelor of Engineering in Computer Engineering",
    duration: "Aug 2013 - May 2017",
    desc: "",
    descBullets: ["Completed my graduation by securing 8.5 CGPA"],
  },
];

export const experience = [
  {
    role: "Application development senior analyst ",
    company: "Accenture",
    companylogo: "/img/icons/common/Accenture-Logo.png",
    date: "Jan 2022 – July 2022",
    desc: "I worked as a Senior Software Developer at Accenture.",
    descBullets: [
      "Had training on their Internal softwares, Coding standards and Security protocols",
      "Created an admin panel for the client to add their internal data and view their statistics using ngChart and
materialUI library",
      "Implemented Authentication flow, Created web app structure and integrated GraphQL API",
      "Develop and enhance software applications to meet client-specific requirements and operational goals"
    ],
  },
  {
    role: "Full stack developer",
    company: "Codeflash Infotech",
    companylogo: "/img/icons/common/codeflash.png",
    date: "Jan 2020 – Dec 2021",
    desc: "Here being a full stack developer, my role was to work with ReactJs, VueJs and NodeJs.",
    descBullets: [
      "Conceptualized project to operate home appliances using ReactJs(typescript), redux and redux-saga for
state management",
      "Implemented Forms and validations, routing, services and api calls using axios in VueJs",
      "Worked on front end using javascript and typescript",
      "Created and Integrated RESTful web services with front end",
    ],
  },
  {
    role: "Tech Lead",
    company: "Srkay Consulting Group",
    companylogo: "/img/icons/common/scikey.png",
    date: "June 2017 - Jan 2020",
    desc: "Developed a high-performance web platform for a SaaS product SCIKEY, used by 100+ clients",
    descBullets: [
      "Designed feature flows, UI and databases",
      "Initiated Angular web application base structures and npm packages for future effort minimization",
      "Worked as a front end developer(Angular 2, 4, 5), Implemented chat bot(Angular, NodeJs, Google Dialog-flow, Socket Programming, mongodb)",
      "Generated REST APIs and integrated with the front end",
    ],
  },
];

export const projects = [];

export const feedbacks = [];
