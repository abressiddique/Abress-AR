import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imageMetaverse from "@/public/imageMetaverse.png";
import imageAppleWebsite from "@/public/imageAppleWebsite.png";
import zapeir_ss from "@/public/zapier.png";
import imageCandyCrush from "@/public/imageCandyCrush.png";
import imageSnakeLadders from "@/public/imageSnakeLadders.png";
import imageLudo from "@/public/imageLudo.png";
import imageAwwwards from "@/public/imageAwwwards.png";
import ecom from "@/public/merns.png";
import imageHooBank from "@/public/imageHooBank.png";
import imageBrainwave from "@/public/imageBrainwave.png";
import exchange from "@/public/exchange.png";
import imageecom from "@/public/nextjs-ecom.png";
import imagepaytm from "@/public/paytm-clone.png";
import imagefood from "@/public/food-using-react.png";
import imagegym from "@/public/gym-app-react.png";
import imagemedium from "@/public/medium.png";
import imageChess from "@/public/imageChess.png";
import abresEcomImage from "@/public/ecomabres.png";
import abresAdminImage from "@/public/abresstoreadmin.png";
import chatAppImage from "@/public/chatapp.png";
import imageJobPortal from "@/public/imageJobPortal.png";
import imageGiffy from "@/public/imageGiffy.png";
import docboooking from "@/public/docbooking.png";
import spotify from "@/public/spotify.png"
import imageforverstore from "@/public/ig-webstie.png"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc IT",
    location: "Mahendra Pratap Sharada Prasad Singh College, Mumbai University",
    description:
      "Completed a Bachelor of Science in Information Technology, building strong foundations in software development, problem-solving, and technical project execution.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Full Stack Developer",
    location: "New Sky Foundation, Mumbai",
    description:
      "Contributed to web development projects, collaborating with teams to deliver solutions on time and improve operational workflows. Gained experience coordinating tasks and managing small project deliverables.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2019 – February 2022",
  },
  {
    title: "Co-Founder & Full Stack Developer",
    location: "Abres Store",
    description:
      "Co-founded Abres Store, a B2B & B2C women’s clothing brand. Led technology, operations, and logistics while managing the platform built with Next.js, Tailwind CSS, and AWS. Oversaw project planning and execution, aligning tech initiatives with business goals.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2022 – December 2022",
  },
  {
    title: "MCA",
    location:
      "LATE BHAUSAHEB HIRAY S.S. Trust’s Institute of Computer Application, Mumbai University",
    description:
      "Completed a Master of Computer Applications, focusing on advanced software engineering, database management, and system design. Developed skills in project planning, team collaboration, and technical leadership.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Full Stack Developer",
    location: "Fusion Web Dynamics, Mumbai",
    description:
      "Managed multiple end-to-end projects in MERN and Next.js, coordinating teams and ensuring timely delivery. Acted as a bridge between clients and development teams, handling planning, execution, and quality assurance of web solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2023 – November 2023",
  },
  {
    title: "Chief Technology Officer",
    location: "Manal Apparels Pvt. Ltd.",
    description:
      "Leading all IT and technology initiatives as Chief Technology Officer. Responsible for project management across all tech projects, aligning IT strategy with business goals, overseeing cross-functional teams, and ensuring efficient, timely execution of high-impact projects.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 – Present",
  },
] as const;



export const projectsData = [
  {
    title: "Giffy Clone",
    description:
      "A lightweight GIF search and discovery application powered by the Giphy API. Built with React and React Router, featuring a clean UI with Tailwind CSS.",
    tags: ["React", "Giphy API", "React Router", "Tailwind CSS", "Vite"],
    imageUrl: imageGiffy, // Replace with the actual image variable
    repository: "https://giffy-clone.netlify.app/",
  },
  {
    title: "Doctor Appointment Booking System",
    description:
      "A MERN stack-based platform with role-based dashboards, real-time scheduling, and email notifications for seamless doctor-patient appointment management.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    imageUrl: docboooking,
    repository: "https://github.com/abressiddique/doc-appointment",
  },
  {
    title: "Apple Website Clone",
    description:
      "A stunning Apple website clone built with React, Three.js, and GSAP animations. Features smooth animations and an interactive 3D experience.",
    tags: ["React", "Three.js", "GSAP", "Vite", "Tailwind CSS"],
    imageUrl: imageAppleWebsite, // Replace with the actual image variable
    repository: "https://iphone-doc.vercel.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify-inspired music streaming web app developed with the MERN stack. Includes user login, playlists, music playback, and responsive design, replicating core Spotify features.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS"],
    imageUrl: spotify, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/spotify-clone-merns", // Replace with your GitHub repo
  },
  {
    title: "Forever Website ",
    description:
      "An e-commerce site for the Forever clothing brand, built using the MERN stack. Supports user authentication, cart functionality, order tracking, and admin product management dashboard.",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    imageUrl: imageforverstore, // Replace with the actual image variable
    repository: "https://ecommerce-frontend-eight-xi.vercel.app/", // Replace with your GitHub repo
  },
  
  {
    title: "Job Portal Platform",
    description:
      "A feature-rich job portal built with Next.js, integrating authentication via Clerk, real-time database management using Supabase, and a sleek UI with Tailwind CSS.",
    tags: ["Next.js", "Clerk", "Supabase", "Tailwind CSS", "Stripe", "MongoDB"],
    imageUrl: imageJobPortal, // Replace with the actual image variable
    repository: "https://nextjs-job-portal-2024.vercel.app/",
  },

  {
    title: "E-Commerce Platform - Abres Store",
    description:
      "Built an end-to-end e-commerce platform for Abres Store with product listings, authentication, shopping cart, and payment integration, deployed on AWS for high availability.",
    tags: ["Next.js", "Tailwind CSS", "AWS", "Zustand", "TypeScript"],
    imageUrl: abresEcomImage, // Replace with the actual image variable
    repository: "https://www.linkedin.com/in/abressiddique//",
  },
  
 
  {
    title: "Metaverse Experience",
    description:
      "A futuristic Metaverse-inspired website built with Next.js and Framer Motion. Features immersive animations and a sleek, modern UI.",
    tags: ["Next.js", "Framer Motion", "React", "Tailwind CSS"],
    imageUrl: imageMetaverse, // Replace with the actual image variable
    repository: "https://metaverse-sage-psi.vercel.app/",
  },
  {
    title: "Awwwards-Inspired Gaming Website",
    description:
      "A visually stunning gaming website inspired by Awwwards, built with React, GSAP for animations, and Tailwind CSS for styling. Features smooth transitions and a modern UI.",
    tags: ["React", "GSAP", "Tailwind CSS", "Vite", "React Icons"],
    imageUrl: imageAwwwards, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/ui-ux-gaming-/",
  },
  {
    title: "Brainwave - Modern UI/UX Website",
    description:
      "A modern and interactive UI/UX website built with React, featuring parallax effects using React Just Parallax, and a responsive design powered by Tailwind CSS.",
    tags: [
      "React",
      "React Just Parallax",
      "Tailwind CSS",
      "Vite",
     
    ],
    imageUrl: imageBrainwave, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/brainwave/",
  },
  {
    title: "HooBank - Modern Banking UI/UX",
    description:
      "A sleek and modern banking website built with React and Tailwind CSS, featuring a responsive design and smooth user experience. Designed to showcase modern UI/UX principles.",
    tags: ["React", "Tailwind CSS", "Vite", "Responsive Design"],
    imageUrl: imageHooBank, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/ui-ux/",
  },
  {
    title: "Chess Game",
    description:
      "A fully functional chess game built with React, featuring a chessboard powered by `react-chessboard` and game logic handled by `chess.js`. Designed with a clean and responsive UI using Tailwind CSS.",
    tags: ["React", "chess.js", "Tailwind CSS", "Vite"],
    imageUrl: imageChess, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/chess-vite-/",
  },

  {
    title: "Admin Dashboard - Abres Store",
    description:
      "Built a Next.js & TypeScript admin dashboard for Abres Store with product management, real-time inventory, and sales analytics.",
    tags: ["Next.js", "TypeScript", "Zustand", "AWS", "Tailwind CSS"],
    imageUrl: abresAdminImage, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/AbresStore-Admin.git",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Built a full-stack chat application with MERN stack, featuring real-time messaging powered by Socket.io and a responsive UI for an engaging user experience.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io"],
    imageUrl: chatAppImage, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/chat-app.git",
  },
  {
    title: "Zapier-like Platform",
    description:
      "An automation platform using Next.js and Apache Kafka for integrating services and automating workflows.",
    tags: ["Next.js", "Apache Kafka", "TypeScript", "Prisma", "Tailwind"],
    imageUrl: zapeir_ss,
    repository: "https://github.com/abressiddique/zapier-project.git",
  },
  {
    title: "E-commerce Website",
    description:
      "A MERN stack e-commerce site with a custom admin section for product and order management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind"],
    imageUrl: ecom,
    repository: "https://github.com/abressiddique/ecommerce-merns.git",
  },
  {
    title: "Next.js E-commerce App",
    description:
      "A feature-rich Next.js e-commerce application featuring product listings, user authentication, shopping cart functionality, and an admin dashboard. .",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "TypeScript"],
    imageUrl: imageecom, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/ecommerce-next-js.git",
  },
  {
    title: "Comprehensive Trading Platform",
    description:
      "A trading platform for real-time trading and market data visualization, with frontend and backend components.",
    tags: ["Next.js", "Redis", "TypeScript", "Prisma", "Tailwind"],
    imageUrl: exchange,
    repository: "https://github.com/abressiddique/EXCHANGE-FULL-STACK.git",
  },
  {
    title: "Paytm Clone",
    description:
      "A comprehensive platform that integrates payment processing, bank webhooks, and merchant and user applications using Next.js, Express.js, and TypeScript.",
    tags: ["Next.js", "Express.js", "TypeScript", "Recoil", "Tailwind CSS"],
    imageUrl: imagepaytm, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/paytm_clone.git",
  },
  {
    title: "Medium Clone",
    description:
      "A full-stack blogging platform that mimics Medium's functionality, featuring a backend service using Hono and Prisma, and a frontend built with React and Vite, allowing users to create and read articles.",
    tags: ["Next.js", "Prisma", "Tailwind", "TypeScript", "Cloudflare Workers"],
    imageUrl: imagemedium, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/medium-clone.git",
  },
  {
    title: "Food App using React",
    description:
      "A recipe app built with React, allowing users to browse, search, and save their favorite recipes, as well as add items to their cart.",
    tags: ["React", "Tailwind", "Node.js"],
    imageUrl: imagefood, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/food-app.git",
  },
  {
    title: "Swoley Fit",
    description:
      "Swoley Fit is a modern fitness app built with React and Vite. It allows users to track workouts, routines, and nutrition while utilizing Tailwind CSS for styling and ESLint for code quality.",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "MongoDB"],
    imageUrl: imagegym, // Replace with the actual image variable
    repository: "https://github.com/abressiddique/gym-website.git",
  },
  {
    title: "Candy Crush Clone",
    description:
      "A simplified clone of the popular Candy Crush game, built with vanilla JavaScript, HTML, and CSS. Features grid-based gameplay, matching logic, and score tracking.",
    tags: ["HTML", "CSS", "JavaScript", "Game Development", "Grid Logic"],
    imageUrl: imageCandyCrush, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/candy-crush/",
  },
  {
    title: "Snake & Ladders Game",
    description:
      "A classic Snake & Ladders game built with vanilla JavaScript, HTML, and CSS. Features interactive gameplay, dice rolling, and dynamic board updates.",
    tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Game Development"],
    imageUrl: imageSnakeLadders, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/snakes-and-laders/",
  },
  {
    title: "Ludo Game",
    description:
      "A multiplayer Ludo game implemented using vanilla JavaScript, HTML, and CSS. Includes dice rolling, player turns, and win conditions.",
    tags: ["HTML", "CSS", "JavaScript", "Game Logic", "DOM Manipulation"],
    imageUrl: imageLudo, // Replace with the actual image variable
    repository: "https://abressiddique.github.io/ludo-js/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Python",
  "Data Structures & Algorithms (DSA)",
  "Object-Oriented Programming (OOP)",
  "MongoDB",
  "Express.js",
  "React.js",
  "Redux",
  "Node.js",
  "Next.js",
  "State Management (Recoil, Context API)",
  "Custom Hooks",
  "NextAuth Authentication",
  "SSR",
  "SSG",
  "Responsive Design with Tailwind CSS",
  "Prisma ORM (PostgreSQL)",
  "REST APIs",
  "PostgreSQL",
  "Redis",
  "Apache Kafka",
  "Webhooks",
  "Middleware",
  "Global Error Handling",
  "JWT",
  "Axios",
  "Serverless Functions",
  "Auth Using Cookies",
  "Singleton Pattern",
  "Horizontal Scaling",
  "Vertical Scaling",
  "CAP Theorem",
  "Docker",
  "Postman",
  // AI/ML & Research Additions
  "Machine Learning",
  "AI Concepts",
  "Prompt Engineering",
  "Natural Language Processing (Basics)",
  "Quantum Computing",
  "Research Writing",
] as const;

