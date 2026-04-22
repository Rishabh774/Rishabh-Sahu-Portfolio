// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo's
import bbdlogo from './assets/education_logo/bbdlogo.png';
import schoollogo from './assets/education_logo/schoollogo.png'

// Project Section Logo's
import portfolio from './assets/work_logo/portfolio.png'
import roomadda from'./assets/work_logo/roomadda.png'
import empowerher from'./assets/work_logo/empowerher.png'



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
     
      { name: 'Redux', logo: reduxLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
     
      { name: 'Java', logo: javaLogo },
   
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
     
      { name: 'Vercel', logo: vercelLogo },
    
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

 
  
 export const education = [
  {
    id: 0,
    img: bbdlogo,
    school: "BBD University, Lucknow",
    date: "August 2023 - June 2027",
    grade: "8.65 CGPA", // Adjusted to match your official resume [cite: 68, 74, 111]
    degree: "Bachelor of Technology in Computer Science & Engineering",
    desc: "Maintaining a strong academic record while mastering full-stack development. Proficient in Data Structures, Algorithms, and DBMS. Actively involved in the SCRS Forum, contributing to the campus technical community.",
  },
  {
    id: 1,
    img: schoollogo,
    school: "S.S.K.T.C.P. Inter College, Raibareli",
    date: "Apr 2022 - March 2023",
    grade: "86%",
    degree: "Intermediate (Class XII)",
    desc: "Completed senior secondary education with a focus on Physics, Chemistry, and Mathematics (PCM). Developed a solid foundation in analytical reasoning and advanced numerical problem-solving.",
  },
  {
    id: 2,
    img: schoollogo,
    school: "S.S.K.T.C.P. Inter College, Raibareli",
    date: "Apr 2020 - March 2021",
    grade: "91.43%", // Updated to match your verified high school percentage 
    degree: "High School (Class X)",
    desc: "Achieved distinction-level marks through consistent academic discipline. Recognized for excellence in core logical subjects and problem-solving aptitude.",
  },
];
  export const projects = [
    {
      id: 3,
      title: "Generative AI Content for Women-Focused Skill Development",
      description:
        "A full-stack web application developed using Spring Boot that leverages Generative AI to provide personalized, skill-oriented learning content for women. The platform is designed to support women-focused skill development by generating relevant educational material, guidance, and resources based on user needs. ",
      image:  empowerher,
      tags: ["HTML","CSS", "Javascript", "Springboot", "Mysql"],
      github: "https://github.com/Rishabh774/empower-her",
      
    },
    {
      id: 0,
      title: "Personal Portfolio",
      description:
        "A modern, responsive personal portfolio website built with React.js and Tailwind CSS to showcase my skills, projects, education, and achievements. The application features a clean UI, smooth user experience, reusable components, and a fully responsive design across all devices. It reflects my journey as a developer and serves as a professional platform for recruiters and collaborators to explore my work",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/Rishabh774/Portfolio",
      webapp: "https://rishabhsahuportfolio.vercel.app/",
    },
   
    {
      id: 2,
      title: "Roomadda",
      description:
        "RoomAdda is a modern accommodation discovery platform built using HTML, CSS, and JavaScript that enables users to search for rooms, hostels, PGs, and mess facilities in nearby locations. The website features a clean layout, intuitive navigation, and detailed property listings, ensuring a seamless user experience. Its responsive and interactive design makes RoomAdda accessible across all devices, helping students and working professionals find suitable accommodation quickly and effortlessly.",
      image: roomadda ,
      tags: [ "HTML", "CSS","Bootstrap", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://roomadda.vercel.app/",
    },
    
   
  ];  