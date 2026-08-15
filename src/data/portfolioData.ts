import React from "react";
import {
  ServiceCard,
  TimelineItem,
  TechSkill,
  SoftSkill,
  ProjectItem,
  BlogArticle,
} from "../types/portfolio";

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: "web-design",
    title: "Web Application Design",
    count: "7+ Projects",
    iconBgClass: "icon-teal",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("rect", {
        x: "2",
        y: "3",
        width: "20",
        height: "14",
        rx: "2",
        ry: "2",
      }),
      React.createElement("line", { x1: "8", y1: "21", x2: "16", y2: "21" }),
      React.createElement("line", { x1: "12", y1: "17", x2: "12", y2: "21" }),
    ),
  },
  {
    id: "react-dev",
    title: "Frontend & React Dev",
    count: "5+ Web Apps",
    iconBgClass: "icon-yellow",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("rect", {
        x: "5",
        y: "2",
        width: "14",
        height: "20",
        rx: "2",
        ry: "2",
      }),
      React.createElement("line", {
        x1: "12",
        y1: "18",
        x2: "12.01",
        y2: "18",
      }),
    ),
  },
  {
    id: "ui-ux",
    title: "UI/UX & Design Systems",
    count: "3+ Design Systems",
    iconBgClass: "icon-coral",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("path", {
        d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      }),
    ),
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "exp-1",
    company: "Maptify",
    date: "Personal Project",
    role: "Lead Frontend & Next.js Architect",
    description:
      "Architecting modern React & Next.js web applications, building component design systems with Tailwind CSS and TypeScript, and optimizing Web Vitals for maximum performance and conversion.",
    nodeClass: "node-teal",
  },
  {
    id: "exp-2",
    company: "Banky",
    date: "Personal Project",
    role: "UI/UX & React Specialist",
    description:
      "Designed and developed responsive web interfaces, interactive data dashboards, state management pipelines using Redux Toolkit, and cross-browser accessible web apps.",
    nodeClass: "node-coral",
  },
  {
    id: "exp-3",
    company: "Task Manager",
    date: "Personal Project",
    role: "Frontend Web Developer",
    description:
      "Crafted custom client web applications, JavaScript utilities, API integrations, and collaborative Figma prototyping for digital products.",
    nodeClass: "node-yellow",
  },
];

export const TECH_SKILLS_DATA: TechSkill[] = [
  {
    id: "skill-html&css",
    name: "HTML5 & CSS3",
    description: "App Router, SSR/SSG, Server Components, Custom Hooks",
    badgeText: "Advanced",
    iconBgClass: "icon-teal-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("circle", { cx: "12", cy: "12", r: "2" }),
      React.createElement("path", { d: "M12 2v20M2 12h20" }),
    ),
  },
  {
    id: "skill-js",
    name: "JavaScript",
    description: "Strict Typing, Generics, Async/Await, ES Modules",
    badgeText: "Advanced",
    iconBgClass: "icon-yellow-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", { d: "M16 18l6-6-6-6M8 6l-6 6 6 6" }),
    ),
  },
  {
    id: "skill-tailwind",
    name: "Tailwind CSS ",
    description: "Design System Tokens, Responsive Layouts, Animations",
    badgeText: "Mastery",
    iconBgClass: "icon-coral-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", {
        d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      }),
    ),
  },
  {
    id: "skill-redux",
    name: "Redux",
    description: "Global State, RTK Query, Context API, Persistence",
    badgeText: "Advanced",
    iconBgClass: "icon-navy-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", {
        d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",
      }),
    ),
  },
  {
    id: "skill-ts",
    name: "TypeScript",
    description: "Fast HMR, Bundling Optimization, npm/pnpm, Git",
    badgeText: "Proficient",
    iconBgClass: "icon-teal-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("polygon", {
        points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
      }),
    ),
  },
  {
    id: "skill-npm",
    name: "NPM",
    description: "CI/CD Deployment, Edge Functions, Design Handoff",
    badgeText: "Proficient",
    iconBgClass: "icon-yellow-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", { d: "M12 2l10 18H2L12 2z" }),
    ),
  },
  {
    id: "skill-graphql",
    name: "REST APIs",
    description: "Apollo Client, Axios, OpenAPI, WebSockets, Async Fetching",
    badgeText: "Advanced",
    iconBgClass: "icon-teal-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("circle", { cx: "18", cy: "5", r: "3" }),
      React.createElement("circle", { cx: "6", cy: "12", r: "3" }),
      React.createElement("circle", { cx: "18", cy: "19", r: "3" }),
      React.createElement("line", {
        x1: "8.59",
        y1: "13.51",
        x2: "15.42",
        y2: "17.49",
      }),
      React.createElement("line", {
        x1: "15.41",
        y1: "6.51",
        x2: "8.59",
        y2: "10.49",
      }),
    ),
  },
  {
    id: "skill-testing",
    name: "React",
    description:
      "React Testing Library, Unit & Integration, E2E Testing, CI/CD",
    badgeText: "Proficient",
    iconBgClass: "icon-navy-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
      React.createElement("polyline", { points: "9 12 11 14 15 10" }),
    ),
  },
  {
    id: "skill-git",
    name: "Git & GitHub",
    description:
      "Semantic Markup, ARIA Standards, WCAG 2.1, SEO Best Practices",
    badgeText: "Mastery",
    iconBgClass: "icon-coral-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("polyline", { points: "16 18 22 12 16 6" }),
      React.createElement("polyline", { points: "8 6 2 12 8 18" }),
      React.createElement("line", { x1: "12", y1: "2", x2: "12", y2: "22" }),
    ),
  },
  {
    id: "skill-perf",
    name: "Web Performance",
    description:
      "Core Web Vitals, Code Splitting, Asset Bundling, Lighthouse 100",
    badgeText: "Advanced",
    iconBgClass: "icon-yellow-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      React.createElement("polyline", {
        points: "23 6 13.5 15.5 8.5 10.5 1 18",
      }),
      React.createElement("polyline", { points: "17 6 23 6 23 12" }),
    ),
  },
];

export const SOFT_SKILLS_DATA: SoftSkill[] = [
  {
    id: "soft-time",
    title: "Time Management",
    description:
      "Structuring development sprints efficiently, estimating milestones accurately, and meeting strict delivery deadlines without sacrificing code quality.",
    iconClass: "icon-teal",
    iconSvg: React.createElement(
      "svg",
      {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
      React.createElement("polyline", { points: "12 6 12 12 16 14" }),
    ),
  },
  {
    id: "soft-flexibility",
    title: "Flexibility",
    description:
      "Adapting smoothly to evolving project scope, shifting technical stack requirements, and integrating feedback into iterative UI refactoring.",
    iconClass: "icon-coral",
    iconSvg: React.createElement(
      "svg",
      {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", {
        d: "M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67",
      }),
    ),
  },
  {
    id: "soft-priority",
    title: "Prioritization",
    description:
      "Distinguishing high-impact features from low-leverage tasks, optimizing core user journeys first, and delivering MVP value rapidly.",
    iconClass: "icon-yellow",
    iconSvg: React.createElement(
      "svg",
      {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("line", { x1: "12", y1: "20", x2: "12", y2: "10" }),
      React.createElement("line", { x1: "18", y1: "20", x2: "18", y2: "4" }),
      React.createElement("line", { x1: "6", y1: "20", x2: "6", y2: "16" }),
    ),
  },
  {
    id: "soft-resilience",
    title: "Resilience under Pressure",
    description:
      "Maintaining composure, technical rigor, and problem-solving focus during critical production bugs, tight launch windows, or hotfixes.",
    iconClass: "icon-navy",
    iconSvg: React.createElement(
      "svg",
      {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
      },
      React.createElement("path", {
        d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      }),
    ),
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    category: "Maptify",
    title: "Food Delivery App",
    cardClass: "card-yellow",
    image: "project_maptify.png",
    tags: ["React Native", "Redux Toolkit"],
    mockupType: "app",
  },
  {
    id: "proj-2",
    category: "Banky",
    title: "Agency & Portfolio Platform",
    cardClass: "card-teal",
    image: "project_mockup_web.png",
    tags: ["Next.js 14", "TypeScript"],
    mockupType: "web",
  },
  {
    id: "proj-3",
    category: "watch Land",
    title: "Enterprise Component System",
    cardClass: "card-mint",
    tags: ["Figma Tokens", "Tailwind CSS"],
    mockupType: "mint",
  },
  {
    id: "proj-4",
    category: "24hr Story Feature",
    title: "Next.js Retail Storefront",
    cardClass: "card-coral",
    tags: ["Vite & React", "Redux & Stripe"],
    mockupType: "coral",
  },
];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: "blog-1",
    category: "Web Design",
    categoryTagClass: "tag-teal",
    date: "Aug 15, 2026",
    readTime: "5 min read",
    title: "Responsive Web Design: Creating Websites for Every Device",
    excerpt:
      "The way people access websites has changed dramatically. Users browse the web from smartphones, tablets, laptops, and large desktop screens. A website that works well on only one device is no longer enough.",
    url: "https://dev.to/amirmohamad_87cc8fe6136bb/responsive-web-design-creating-websites-for-every-device-18e5",
  },
  {
    id: "blog-2",
    category: "Web Development",
    categoryTagClass: "tag-coral",
    date: "Aug 15, 2026",
    readTime: "7 min read",
    title: "Why Clean Code Matters in Web Development",
    excerpt:
      "A practical guide to structuring design tokens, enforcing strict type-safe prop interfaces, and creating flexible UI component libraries.",
    url: "https://dev.to/amirmohamad_87cc8fe6136bb/why-clean-code-matters-in-web-development-n8h",
  },
  {
    id: "blog-3",
    category: "Frontend Development",
    categoryTagClass: "tag-yellow",
    date: "Aug 15, 2026",
    readTime: "4 min read",
    title:
      "The Future of Frontend Development: Building Better Web Experiences",
    excerpt:
      "Streamlining global client state, normalized cache management, and optimistic UI updates without boilerplate overload.",
    url: "https://dev.to/amirmohamad_87cc8fe6136bb/the-future-of-frontend-development-building-better-web-experiences-4698",
  },
];
