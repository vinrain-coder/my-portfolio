//Hero
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import FacebookCircleLineIcon from "remixicon-react/FacebookCircleLineIcon";
import DribbbleLineIcon from "remixicon-react/DribbbleLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";

export const heroIcons = [
  /* eslint-disable react/jsx-key */
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
];

//About me
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import AwardFillIcon from "remixicon-react/AwardFillIcon";

export const aboutData = [
  {
    title: "Github repos",
    amount: "150",
    icon: <GithubFillIcon />,
  },
  {
    title: "Successfull projects",
    amount: "127",
    icon: <Projector2LineIcon />,
  },
  {
    title: "Satisified clients",
    amount: "184",
    icon: <GroupLineIcon />,
  },
  {
    title: "Awards and recognition",
    amount: "25",
    icon: <AwardFillIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText =
  "Hello, I'm Vin Rain, a web developer and designer. I blend the technical skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites which are visually appealing and user friendly. My role ensures that websites not only work well but also look great and provide excellent user experience.";

//Experience
export const experienceData = [
  {
    year: "2024",
    title: "Senior Web Developer",
    education: "Bachelor of Science in Computer Science",
    experiences: [
      "Led the development of a storage management platform using Next.js and Appwrite.",
      "Implemented dynamic dashboards with Tailwind CSS and Shadcn UI components.",
      "Optimized website performance, reducing load time by 30%.",
    ],
  },
  {
    year: "2023",
    title: "Web Developer",
    education: "Online Courses and Certifications",
    experiences: [
      "Built a blog website using the MERN stack with full authentication and an admin dashboard.",
      "Integrated secure authentication workflows with NextAuth.js.",
      "Deployed and maintained web applications on Vercel.",
    ],
  },
  {
    year: "2022",
    title: "Frontend Developer Intern",
    education: "Coding Bootcamp Graduate",
    experiences: [
      "Created responsive user interfaces using React.js and Tailwind CSS.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Developed reusable components to streamline future development projects.",
    ],
  },
  {
    year: "2021",
    title: "Freelance Web Developer",
    education: "Self-taught",
    experiences: [
      "Designed and launched small business websites with custom CMS solutions.",
      "Implemented SEO best practices to increase client visibility by 50%.",
      "Provided ongoing maintenance and updates for client sites.",
    ],
  },
  {
    year: "2020",
    title: "Junior Developer",
    education: "Diploma in Web Development",
    experiences: [
      "Worked on frontend features and bug fixes for e-commerce platforms.",
      "Collaborated with designers to ensure pixel-perfect implementation.",
      "Participated in code reviews to improve code quality and maintainability.",
    ],
  },
  {
    year: "2019",
    title: "Intern Web Developer",
    education: "High School Graduate",
    experiences: [
      "Learned foundational web technologies like HTML, CSS, and JavaScript.",
      "Assisted in creating landing pages for local businesses.",
      "Shadowed senior developers to understand project workflows.",
    ],
  },
];

//Skills
export const skillsData = [
  {
    name: "Figma",
    icon: "/assets/skills/figma.png",
  },
  {
    name: "AI",
    icon: "/assets/skills/ai.png",
  },
  {
    name: "Blender",
    icon: "/assets/skills/blender.png",
  },
  {
    name: "CSS",
    icon: "/assets/skills/css.png",
  },
  {
    name: "Framer",
    icon: "/assets/skills/framer.png",
  },
  {
    name: "Figma",
    icon: "/assets/skills/figma.png",
  },
  {
    name: "Github",
    icon: "/assets/skills/github.png",
  },
  {
    name: "Html",
    icon: "/assets/skills/html.png",
  },
  {
    name: "JavaScript",
    icon: "/assets/skills/js.png",
  },
  {
    name: "MongoDB",
    icon: "/assets/skills/mongodb.png",
  },
  {
    name: "NextJS",
    icon: "/assets/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    icon: "/assets/skills/nodejs.png",
  },
  {
    name: "PhotoShop",
    icon: "/assets/skills/photoshop.png",
  },
  {
    name: "React",
    icon: "/assets/skills/react.png",
  },
  {
    name: "Tailwind",
    icon: "/assets/skills/tailwind.png",
  },
  {
    name: "Three",
    icon: "/assets/skills/three.png",
  },
  {
    name: "Typescript",
    icon: "/assets/skills/ts.png",
  },
  {
    name: "Vite",
    icon: "/assets/skills/vite.png",
  },
  {
    name: "VS Code",
    icon: "/assets/skills/vscode.png",
  },
];

//Reviews
import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />];
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />];

export const reviewData = [
  {
    image: "/assets/reviews/client-1.png",
    name: "Jane Smith, XYZ Corp",
    comment:
      "Incredible attention to detail and deep expertise in web development. Delivered our project ahead of schedule and exceeded expectations!",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/assets/reviews/client-2.png",
    name: "Michael Lee, ABC Startups",
    comment:
      "Great communication and problem-solving skills. Our website redesign significantly improved user engagement.",
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/assets/reviews/client-3.png",
    name: "Sophia Green, Freelance Designer",
    comment:
      "A true collaborator! Made implementing complex UI designs a breeze with his deep knowledge of Tailwind CSS and React.",
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/assets/reviews/client-4.png",
    name: "Daniel Thompson, LMN Tech",
    comment:
      "Handled backend integration seamlessly. His work with NextAuth.js and Appwrite was crucial to our secure authentication system.",
    stars: [1, 1, 1, 1, 0.7],
  },
  {
    image: "/assets/reviews/client-5.png",
    name: "Emily Johnson, Small Business Owner",
    comment:
      "Created a stunning website for my business that attracts more customers daily. Very professional and supportive throughout the process.",
    stars: [1, 1, 1, 1, 1],
  },
];

export const projectsButton = [
  "All",
  "Figma",
  "Photoshop",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "TailwindCSS",
  "NextJS",
  "FramerMotion",
  "ThreeJS",
];

export const projectsData = [
  {
    name: "Invoicer",
    desc: "A comprehensive invoice management solution with dynamic dashboards and user authentication.",
    url: "/assets/projects/image-1.jpg",
    tech: ["NextJS", "TailwindCSS", "FramerMotion", "JavaScript"],
  },
  {
    name: "3D React Landing Page",
    desc: "An animated, interactive landing page with 3D elements and smooth transitions.",
    url: "/assets/projects/image-2.jpg",
    tech: ["ReactJS", "ThreeJS", "TailwindCSS", "JavaScript"],
  },
  {
    name: "Storage Manager",
    desc: "A web application for managing and organizing files with cloud storage integration.",
    url: "/assets/projects/image-3.jpg",
    tech: ["NextJS", "JavaScript", "TailwindCSS", "Figma"],
  },
  {
    name: "MERN Blog Platform",
    desc: "A full-stack blog website with an admin dashboard and user authentication.",
    url: "/assets/projects/image-4.jpg",
    tech: ["ReactJS", "JavaScript", "CSS", "Photoshop"],
  },
  {
    name: "Portfolio Website",
    desc: "A personal portfolio showcasing projects, skills, and experience.",
    url: "/assets/projects/image-5.jpg",
    tech: ["NextJS", "FramerMotion", "HTML", "TailwindCSS"],
  },
  {
    name: "E-commerce Platform",
    desc: "A scalable e-commerce solution with product management and payment integration.",
    url: "/assets/projects/image-6.jpg",
    tech: ["ReactJS", "JavaScript", "TailwindCSS", "Figma"],
  },
  {
    name: "Task Manager",
    desc: "A task-tracking app with drag-and-drop functionality and progress tracking.",
    url: "/assets/projects/image-7.jpg",
    tech: ["ReactJS", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Chat Application",
    desc: "A real-time chat app with private and group messaging features.",
    url: "/assets/projects/image-8.jpg",
    tech: ["NextJS", "JavaScript", "TailwindCSS", "Figma"],
  },
  {
    name: "Recipe Finder",
    desc: "An app to search, filter, and save recipes with an interactive UI.",
    url: "/assets/projects/image-9.jpg",
    tech: ["ReactJS", "TailwindCSS", "JavaScript", "Photoshop"],
  },
  {
    name: "Weather Dashboard",
    desc: "A weather forecast dashboard displaying real-time data from multiple cities.",
    url: "/assets/projects/image-10.jpg",
    tech: ["ReactJS", "JavaScript", "CSS", "Figma"],
  },
];

//Pricing Plans
export const pricingPlans = [
  {
    title: "Basic",
    pricing: "$10 - $20",
    features: [
      "Access to standard features",
      "Email support",
      "10 project limits",
      "Basic analytics dashboard",
    ],
    recommended: "Freelancers and small businesses",
  },
  {
    title: "Premium",
    pricing: "$70 - $100",
    features: [
      "Access to all features",
      "24/7 premium support",
      "Unlimited projects and users",
      "Custom analytics reports",
      "Dedicated account manager",
      "Integration with third-party tools",
    ],
    recommended: "Large enterprises and organizations",
  },
  {
    title: "Standard",
    pricing: "$30 - $50",
    features: [
      "Access to all standard features",
      "Priority email support",
      "Unlimited projects",
      "Advanced analytics dashboard",
      "Team collaboration tools",
    ],
    recommended: "Growing teams and mid-sized businesses",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

export const copyRightIcon = <CopyrightLineIcon />;

//Q & A
export const questions = [
  {
    question: "What services do you offer?",
    answer:
      "I offer end-to-end web development services, including frontend development, backend integration, responsive design, and custom web applications. I specialize in Next.js, React, TypeScript, and Tailwind CSS.",
  },
  {
    question: "Do you provide custom solutions tailored to my business needs?",
    answer:
      "Absolutely! I work closely with clients to understand their unique requirements and deliver custom solutions that align with their business goals and target audience.",
  },
  {
    question: "How do you ensure the quality of your work?",
    answer:
      "I follow industry best practices, write clean and maintainable code, and conduct thorough testing. I also collaborate with clients throughout the project to ensure their vision is accurately implemented.",
  },
  {
    question: "Can you build responsive and mobile-friendly websites?",
    answer:
      "Yes, I use Tailwind CSS and other responsive design techniques to ensure that websites look and function perfectly on all devices, from desktops to smartphones.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on the complexity and scope. However, I always provide a detailed project plan and milestones, ensuring timely delivery without compromising quality.",
  },
  {
    question: "Do you offer support and maintenance after project completion?",
    answer:
      "Yes, I offer ongoing support and maintenance to ensure your website remains updated, secure, and functional as your business evolves.",
  },
  {
    question: "What is your approach to SEO and performance optimization?",
    answer:
      "I implement SEO best practices, optimize website performance through code efficiency, and ensure fast loading times to enhance user experience and search engine rankings.",
  },
  {
    question: "Can you integrate third-party services and APIs?",
    answer:
      "Yes, I have experience integrating various third-party services and APIs, such as payment gateways, cloud storage, and authentication providers like NextAuth.js.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "I maintain transparent and regular communication through tools like Slack, email, and project management platforms, ensuring you are always updated on the project's progress.",
  },
  {
    question: "Do you work with existing codebases or only new projects?",
    answer:
      "I can work on both existing codebases and new projects. I ensure seamless integration and code refactoring to improve existing systems if needed.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing depends on the project's complexity and requirements. I offer flexible pricing models, including fixed-rate, hourly, or milestone-based payments.",
  },
  {
    question: "How do you handle revisions and feedback?",
    answer:
      "I encourage client feedback throughout the development process and offer multiple revision cycles to ensure the final product meets your expectations.",
  },
  {
    question: "Do you provide design services as well?",
    answer:
      "While my primary focus is development, I collaborate with designers or can implement your provided designs with pixel-perfect accuracy using modern UI frameworks.",
  },
  {
    question: "What kind of clients have you worked with?",
    answer:
      "I have worked with startups, small businesses, and large enterprises across various industries, delivering tailored solutions that meet diverse business needs.",
  },
  {
    question: "How can I get started with you on a project?",
    answer:
      "You can contact me through my website's contact form or email. We will discuss your project requirements, goals, and next steps during an initial consultation.",
  },
  {
    question: "Do you provide documentation for your projects?",
    answer:
      "Yes, I provide comprehensive documentation to help you understand the code, architecture, and functionality of your project for future reference or updates.",
  },
  {
    question: "How do you ensure data security in your projects?",
    answer:
      "I follow best practices for data security, including secure authentication, data encryption, and compliance with privacy standards to protect your sensitive information.",
  },
  {
    question: "Can you migrate an existing website to a new technology stack?",
    answer:
      "Yes, I can help migrate your existing website to modern technologies like Next.js or React, ensuring improved performance, scalability, and maintainability.",
  },
  {
    question: "What kind of testing do you perform?",
    answer:
      "I conduct unit testing, integration testing, and end-to-end testing to ensure that your application is reliable, bug-free, and performs well under various scenarios.",
  },
  {
    question: "Do you offer training or guidance after project delivery?",
    answer:
      "Yes, I provide training sessions and detailed walkthroughs to help you or your team understand and manage the application effectively after delivery.",
  },
];

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";

export const questionArrow = <ArrowDropDownLineIcon />;

//Navbar
import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  { id: "about", name: "About", icon: <UserLineIcon /> },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",
    name: "Questions",
    icon: <QuestionAnswerLineIcon />,
  },
];
