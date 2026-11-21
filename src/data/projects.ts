
export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

export const projectCategories = [
  "Web Applications",
  "AI / ML",
  "Archive",
];

export const projects: PortfolioProject[] = [

{
  id: "karkhana-internal-web-system",
  name: "Karkhana Web System",
  category: "Web Applications",
  description:
    "An internal operations management platform designed to centralize organizational data and connect sales, procurement, production, inventory and dispatch workflows across Karkhana.",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Python",
    "Django REST Framework",
    "PostgreSQL",
    "AWS EC2",
    "Nginx",
    "Gunicorn",
  ],
  highlights: [
    "Led the system architecture, full-stack development and deployment of an internal web platform supporting organizational operations.",
    "Designed relational data models and REST APIs for schools, teachers, materials, vendors, members, assets and operational records.",
    "Developed React and TypeScript interfaces for managing operational data, inventory and cross-functional workflows.",
    "Designed workflows connecting sales activities, production planning, inventory tracking, finance approvals and dispatch operations.",
    "Implemented backend services using Django REST Framework and PostgreSQL, including authentication and data management.",
    "Configured and deployed the application on AWS EC2 using Nginx and Gunicorn.",
    "Coordinated development tasks, technical planning and integration across the development team.",
  ],
  },
  {
  id: "pause",
  name: "Pause",
  category: "AI / ML",
  description:
    "A full-stack wellness monitoring platform that analyzes self-reported behavioral patterns, assesses burnout-related risks and provides trend forecasts, personalized insights and recovery guidance.",
  stack: [
    "React",
    "TypeScript",
    "Python",
    "Django REST Framework",
    "PostgreSQL",
    "Machine Learning",
    "OpenAI API",
  ],
  highlights: [
    "Designed and developed the complete application, from the React and TypeScript frontend to the Django REST Framework backend and PostgreSQL database.",
    "Implemented deterministic burnout scoring and risk classification using daily wellness indicators, including stress, sleep, workload, energy, focus and recovery.",
    "Built Simple Linear Regression, K-Means Clustering and K-Nearest Neighbors algorithms from scratch in Python for trend forecasting, behavioral pattern discovery and historical similarity analysis.",
    "Integrated AI-assisted wellness summaries with deterministic fallback logic to preserve core functionality when the external AI service is unavailable.",
    "Developed interactive dashboards, weekly reports, recovery action plans, wellness goals, journaling and progress tracking.",
  ],
  github: "https://github.com/uttamshr10/Pause",
  },
  {
  id: "smartfin",
  name: "SmartFin",
  category: "AI / ML",
  description:
    "A full-stack personal finance platform combining expense tracking, budgeting, savings goals and NEPSE stock analytics with machine learning-based price forecasting and classification.",
  stack: [
    "React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Python",
    "Flask",
    "Scikit-learn",
    "Puppeteer",
    "Chart.js",
  ],
  highlights: [
    "Developed a personal finance management application with transaction tracking, monthly budgets, savings goals and financial dashboards.",
    "Built REST APIs using Node.js and Express, with MongoDB for user accounts, transactions, budgets, goals and stock records.",
    "Integrated a separate Python Flask service for NEPSE stock analytics and machine learning predictions.",
    "Implemented Random Forest Regression for stock price estimation and Random Forest Classification for Buy, Hold, Sell and Avoid recommendations.",
    "Developed a Puppeteer-based data collection pipeline to retrieve NEPSE stock information from ShareSansar and maintain historical records.",
    "Built interactive dashboards with Chart.js for income, expenses, historical stock prices and financial progress.",
  ],
  github: "https://github.com/uttamshr10/Smartfin",
  },
  {
  id: "devshowcase",
  name: "DevShowcase",
  category: "Web Applications",
  description:
    "A Django-based platform where developers can showcase their skills and projects, discover other developers, connect with them and communicate through an integrated messaging system.",
  stack: [
    "Python",
    "Django",
    "HTML",
    "CSS",
    "JavaScript",
    "Django REST Framework",
  ],
  highlights: [
    "Developed a web application for developers to create profiles and showcase their technical skills and projects.",
    "Implemented developer discovery with search functionality for skills and projects.",
    "Built an integrated inbox feature for communication between developers.",
    "Created features for exploring developer profiles, portfolios and technical expertise.",
    "Worked with Django for backend development and HTML, CSS and JavaScript for frontend interfaces.",
  ],
  github: "https://github.com/uttamshr10/devshowcase",
  },
  {
  id: "githublookup",
  name: "GitHubLookUp",
  category: "Web Applications",
  description:
    "A React application that uses the GitHub API to search for GitHub users, explore their profiles and view their 10 most recent repositories.",
  stack: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "GitHub API",
  ],
  highlights: [
    "Built a GitHub profile search application using React and the GitHub API.",
    "Implemented profile and repository data retrieval, displaying up to 10 recent repositories for each user.",
    "Explored React component architecture and state management using useReducer and useContext.",
    "Used Vite and Tailwind CSS for frontend development and styling.",
  ],
  github: "https://github.com/uttamshr10/GitHubLookup",
  },
  {
  id: "uttamos",
  name: "UttamOS",
  category: "Web Applications",
  description:
    "An Ubuntu-inspired interactive portfolio that recreates a desktop operating system experience in the browser, featuring window-based applications, a functional terminal and a project explorer.",
  stack: [
    "React",
    "TypeScript",
    "Vite",
    "CSS",
    "GitHub Pages",
  ],
  highlights: [
    "Designed and developed a desktop-inspired interface with a dock, application launcher and draggable, minimizable and maximizable windows.",
    "Built interactive applications for About, Experience, Education, Projects, Blog and Contact.",
    "Developed a functional terminal supporting custom commands, command history, tab completion and keyboard shortcuts.",
    "Created a project file explorer with category filtering, search and detailed project views.",
    "Implemented responsive layouts for desktop and mobile devices.",
    "Deployed the application through GitHub Pages with a custom domain.",
  ],
  github: "https://github.com/uttamshr10/site",
  demo: "https://www.uttam-shrestha.com.np/",
  },
  {
  id: "hrquest",
  name: "HRQuest",
  category: "Web Applications",
  description:
    "A college project built using PHP and MySQL to manage human resource operations, including recruitment, employee records, attendance and payroll through a centralized web portal.",
  stack: [
    "PHP",
    "MySQL",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  highlights: [
    "Developed a web-based Human Resource Management System as a college project.",
    "Built role-specific functionality for job applicants, employees and managers.",
    "Implemented recruitment features for job applications and candidate hiring.",
    "Developed employee management, attendance tracking and payroll features.",
    "Used PHP and MySQL for server-side functionality and database management.",
  ],
  github: "https://github.com/uttamshr10/HRQuest",
  },
  {
  id: "election-management-system",
  name: "Election Management System",
  category: "Archive",
  description:
    "A Java Swing-based desktop application designed to manage election processes, including voter administration, election records and winner declaration through role-specific interfaces.",
  stack: [
    "Java",
    "Java Swing",
    "Microsoft SQL Server",
    "JDBC",
  ],
  highlights: [
    "Developed a desktop-based election management application using Java Swing.",
    "Implemented CRUD operations for managing election-related records.",
    "Designed separate interfaces for administrators and voters.",
    "Built functionality for election result management and winner declaration.",
    "Used JDBC to connect the Java application with a SQL Server database.",
  ],
  github: "https://github.com/uttamshr10/election-management-system",
},
];
