import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    weepitch,
    drivestore,
    car,
    stock,
    MemoryGame,
    medijini,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web & Web 3.0 Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Founder",
      company_name: "WheelsOnDeals",
      icon: car,
      iconBg: "#383E56",
      date: "August 2018 - March 2020",
      points: [
        "Started a Self-Driving Car Rental Business in Siliguri, It had 3 Cars (BMW-X1,Honda-City,Swift-Ritz)",
        "Our customer were mostly tourist, college student. ",
        "A good profit was earned during the seasonal months and it was mainly used in adding bikes to our business and also in providing discount and coupons to our regular customers.",
        "The venture was closed due to regulations and accidents.",
      ],
    },
    {
      title: "Stock Market Analysis",
      company_name: "Stocks & Cryptocurrency",
      icon: stock,
      iconBg: "#E6DEDD",
      date: "2021 - Present",
      points: [
        "Most of my profits were used in trading . I started with exploring the blockchain technology and later learned about the various trading strategies which were used in my journey.",
      "Trading in Indian Stock market happened after the major crash that happened in 2022 in the cryptocurrency and then i learned about stocks to diversify my portfoli0.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Medijini",
      icon: medijini,
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    points: [
      "Worked on a project to Design the E2E AI based Recommendation Model for the customers.",
      "Learned about the company requirements by going through the data of past search and purchases made by the clients.",
      "Built a fresh dataset and used prebuilt python library like sklearn to train my model.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Memory Game",
      description:
        "Web-based game that allows users to practise their memory skills.It is a game that is built purely using html,css,js. It is a simple game where user has to match the cards.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: MemoryGame,
      source_code_link: "https://github.com/KeshavDev15/MemoryGame",
      website_url : "https://keshavdev15.github.io/MemoryGame/"
    },
    {
      name: "WEEPITCH",
      description:
        "Web Application that lets users pitch an idea about their Startup, and lets the interested investors meet them through reading about their detailed plan.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weepitch,
      source_code_link: "https://github.com/KeshavDev15/wePitch",
      website_url : "https://weepitch.in"
    },
    {
      name: "Drive Store",
      description:
        "A complete storage solution web app, where users can create and share their account and upload their all kinds of documents, video,music and many more types. ",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "appwrite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: drivestore,
      source_code_link: "https://github.com/KeshavDev15/driveStore",
      website_url : "https://drivestore.in"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };