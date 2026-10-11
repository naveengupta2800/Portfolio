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
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'JS', logo: javascriptLogo },
      
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
      { name: 'Netlify', logo: netlifyLogo },
     
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Sushila Devi Bansal College of Engineering",
      date: "Sept 2023 - July 2027",
      grade: "7.34 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science from Sushila Devi Bansal College of Engineering, and will complete it in 2027. During my studies, I have built a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participate in various workshops and technical events, which enhance my skills and knowledge. My experience at Sushila Devi Bansal College of Engineering is helping me grow both technically and professionally.",
      degree: "Bachelor of Engineering",
    },
    
    {
      id: 1,
      img: vpsLogo,
      school: "Shamgarh Public School",
      date: "March 2023",
      grade: "81.2%",
      desc: "I completed my Class 12 education from Shamgarh Public School (MP board) in March 2023, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science, securing an overall 81.2%.",
      degree: "MP Board(XII) - PCM ",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shamgarh Public School",
      date: " March 2021",
      grade: "68.6%",
      desc: "I completed my Class 10 education from Shamgarh Public School (CBSE board) in March 2021, where I studied Science with Computer, securing an overall 68.6%.",
      degree: "CBSE(X), Science ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Job Portal",
      description:
      "Developed an AI-powered Job Portal to connect job seekers with relevant opportunities using intelligent job matching and resume analysis. Strengthened understanding of full-stack development, AI integration, and personalized job recommendations.",
      image: githubdetLogo,
      tags: ["React JS", "Node.js", "Express JS", "MongoDB", "Gemini API","REST API","Payment Gateway"],
      github: "https://github.com/naveengupta2800/AI-Job-Portal",
      
    },
    {
      id: 1,
      title: "College placement Hub",
      description:
        "Developed a College Placement Hub to streamline campus recruitment by connecting students, recruiters, and placement officers on a single platform. Implemented job postings, student applications, and placement management features to simplify the recruitment process.",
      image: csprepLogo,
      tags: ["React JS", "Node.js","Express", "MongoDB", "REST API" ],
      github: "https://github.com/naveengupta2800/College-Placement-Hub",
      
    },
    {
      id: 2,
      title: "Expense Trackor",
      description:
        "Developed an Expense Tracker to record, manage, and monitor daily expenses efficiently. Strengthened understanding of CRUD operations, data management, and financial tracking in web applications.",
      image: movierecLogo,
      tags: ["React JS", "Node.js","Express", "MongoDB", "REST API"],
      github: "https://github.com/naveengupta2800/Expense-Tracker",
      
    }, 
  ];  