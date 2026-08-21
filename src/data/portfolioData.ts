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
    title: "Frontend Development",
    count: "",
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
    title: "Responsive Web Design",
    count: "",
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
    title: "Component & UI Systems",
    count: "",
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
    id: "journey-1",
    stage: "Self-Directed Learning",
    date: "2023",
    title: "Web Foundations & JavaScript",
    description:
      "Began learning web development fundamentals — HTML5, modern CSS3, and core JavaScript (ES6+), focusing on semantic markup, responsive design, and interactive UI logic.",
    nodeClass: "node-teal",
  },
  {
    id: "journey-2",
    stage: "Framework Mastery",
    date: "2024",
    title: "React & Component Systems",
    description:
      "Transitioned to React and modern tooling, building scalable component-based applications, custom hooks, and exploring state management patterns.",
    nodeClass: "node-coral",
  },
  {
    id: "journey-3",
    stage: "Modern Web Engineering",
    date: "2025",
    title: "TypeScript, Next.js & Performance",
    description:
      "Adopted TypeScript, Next.js, and Tailwind CSS to ship production-ready projects with strong web performance, clean architecture, and seamless user experiences.",
    nodeClass: "node-yellow",
  },
];

export const TECH_SKILLS_DATA: TechSkill[] = [
  {
    id: "skill-html",
    name: "HTML5",
    description: "Semantic Markup, Accessibility, SEO Best Practices",
    badgeText: "",
    iconBgClass: "icon-html-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        d: "M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.7 4.2l-.2 2.5h-8.8l.2 2.5h8.4l-.7 7.2-4.6 1.4-4.6-1.4-.3-3.6h2.4l.2 1.8 2.3.7 2.3-.7.3-3H6.8l-.8-7.4h11.7z",
        fill: "#E34F26",
      }),
    ),
  },
  {
    id: "skill-css",
    name: "CSS3",
    description: "CSS Grid, Flexbox, Animations, Custom Properties",
    badgeText: "",
    iconBgClass: "icon-css-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        d: "M3 2l1.8 17.5L12 22l7.2-2.5L21 2H3zm14.4 4.5l-.3 2.6H9.8l.2 2.3h6.8l-.8 7.2-4 1.3-4-1.3-.3-3.5h2.5l.2 1.8 1.7.5 1.7-.5.3-2.9H7.3l-.8-7.5h10.9z",
        fill: "#264de4",
      }),
    ),
  },
  {
    id: "skill-js",
    name: "JavaScript",
    description: "Strict Typing, Generics, Async/Await, ES Modules",
    badgeText: "",
    iconBgClass: "icon-js-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("rect", {
        width: "24",
        height: "24",
        rx: "4",
        fill: "#F7DF1E",
      }),
      React.createElement("path", {
        d: "M6.5 17.5c.6.9 1.5 1.5 2.6 1.5 1.5 0 2.4-.8 2.4-2 0-1.3-.9-1.9-2.6-2.6-1.4-.6-2-1.2-2-2.1 0-1.1.9-2 2.3-2 1.1 0 1.9.4 2.5 1.3l-1.4 1c-.3-.5-.6-.7-1.1-.7-.5 0-.9.3-.9.7 0 .5.3.8 1.4 1.2 1.7.7 2.7 1.5 2.7 2.9 0 1.6-1.2 2.8-3 2.8-1.6 0-2.7-.8-3.4-2l1.5-1zm6.9 0c.3.5.7.8 1.4.8.7 0 1.1-.3 1.1-.9V9.5h1.9v8c0 1.9-1.1 2.8-2.9 2.8-1.5 0-2.5-.7-2.9-1.8l1.4-1z",
        fill: "#000000",
      }),
    ),
  },
  {
    id: "skill-tailwind",
    name: "Tailwind CSS",
    description: "Design System Tokens, Responsive Layouts, Animations",
    badgeText: "",
    iconBgClass: "icon-tailwind-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        d: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z",
        fill: "#38BDF8",
      }),
    ),
  },
  {
    id: "skill-redux",
    name: "Redux",
    description: "Global State, RTK Query, Context API, Persistence",
    badgeText: "",
    iconBgClass: "icon-redux-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16.48 3.52c-1.25-.8-2.9-.57-3.9.5-.72-.6-1.68-.94-2.7-.92-2.14.04-3.87 1.75-3.95 3.9-.03.36.01.73.12 1.08C4.55 8.84 3.5 10.33 3.5 12c0 1.85 1.25 3.48 3.06 3.95.12.35.3.68.52.98.98 1.3 2.57 2.07 4.2 2.07 1.15 0 2.25-.4 3.12-1.15 1.03.88 2.45 1.22 3.8.88 1.6-.4 2.87-1.68 3.27-3.28.45-1.8-.3-3.67-1.85-4.63.12-.55.12-1.12 0-1.67-.38-1.78-1.78-3.15-3.54-3.53-.2-.04-.4-.07-.6-.1zm-5.36 1.85c.6 0 1.18.2 1.65.57-.45.54-.78 1.18-.95 1.87-.82.1-1.57.48-2.14 1.08-.05-.43.04-.87.26-1.25.42-.77 1.22-1.27 2.1-1.27h-.92zm-3.2 4.43c.4-.44.92-.74 1.5-.86.13.7.43 1.36.87 1.9-.44.54-1.02.93-1.68 1.12-.4-.6-.56-1.34-.44-2.07l-.25-.09zm4.28 1.6c.46 0 .9.18 1.24.5.33.34.52.8.52 1.27 0 .47-.2.93-.53 1.26-.34.33-.8.52-1.27.52s-.93-.2-1.26-.53c-.34-.33-.53-.8-.53-1.26 0-.47.2-.93.53-1.27.33-.33.8-.5 1.27-.5z",
        fill: "#764ABC",
      }),
    ),
  },
  {
    id: "skill-ts",
    name: "TypeScript",
    description: "Fast HMR, Bundling Optimization, npm/pnpm, Git",
    badgeText: "",
    iconBgClass: "icon-ts-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("rect", {
        width: "24",
        height: "24",
        rx: "4",
        fill: "#3178C6",
      }),
      React.createElement("path", {
        d: "M11.5 9H6V11H7.8V19H9.7V11H11.5V9Z",
        fill: "white",
      }),
      React.createElement("path", {
        d: "M18 11.2C17.3 10.4 16.2 10 15 10C13.2 10 12.1 11 12.1 12.5C12.1 14.8 14.6 14.9 14.6 16.1C14.6 16.7 14.1 17.1 13.3 17.1C12.3 17.1 11.6 16.5 11.2 15.6L9.6 16.6C10.3 18.1 11.6 19 13.3 19C15.4 19 16.6 17.8 16.6 16.1C16.6 13.6 14.1 13.5 14.1 12.5C14.1 12.1 14.5 11.8 15.1 11.8C15.8 11.8 16.4 12.2 16.7 12.8L18 11.2Z",
        fill: "white",
      }),
    ),
  },
  {
    id: "skill-npm",
    name: "NPM",
    description: "CI/CD Deployment, Edge Functions, Design Handoff",
    badgeText: "",
    iconBgClass: "icon-npm-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("rect", {
        width: "24",
        height: "24",
        rx: "4",
        fill: "#CB3837",
      }),
      React.createElement("path", {
        d: "M4 4H20V20H14.67V9.33H9.33V20H4V4Z",
        fill: "white",
      }),
    ),
  },
  {
    id: "skill-graphql",
    name: "REST APIs",
    description: "Apollo Client, Axios, OpenAPI, WebSockets, Async Fetching",
    badgeText: "",
    iconBgClass: "icon-api-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        d: "M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zM4 15a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2z",
        stroke: "#0D7C66",
        strokeWidth: "1.8",
      }),
      React.createElement("circle", {
        cx: "7.5",
        cy: "8",
        r: "1.2",
        fill: "#0D7C66",
      }),
      React.createElement("circle", {
        cx: "7.5",
        cy: "16",
        r: "1.2",
        fill: "#0D7C66",
      }),
      React.createElement("path", {
        d: "M13 8h4M13 16h4",
        stroke: "#0D7C66",
        strokeWidth: "1.8",
        strokeLinecap: "round",
      }),
    ),
  },
  {
    id: "skill-testing",
    name: "React",
    description:
      "React Testing Library, Unit & Integration, E2E Testing, CI/CD",
    badgeText: "",
    iconBgClass: "icon-react-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("ellipse", {
        cx: "12",
        cy: "12",
        rx: "4",
        ry: "9.5",
        stroke: "#00D8FF",
        strokeWidth: "1.4",
      }),
      React.createElement("ellipse", {
        cx: "12",
        cy: "12",
        rx: "4",
        ry: "9.5",
        stroke: "#00D8FF",
        strokeWidth: "1.4",
        transform: "rotate(60 12 12)",
      }),
      React.createElement("ellipse", {
        cx: "12",
        cy: "12",
        rx: "4",
        ry: "9.5",
        stroke: "#00D8FF",
        strokeWidth: "1.4",
        transform: "rotate(120 12 12)",
      }),
      React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "1.8",
        fill: "#00D8FF",
      }),
    ),
  },
  {
    id: "skill-git",
    name: "Git",
    description: "Branching, Merge Strategies, Rebase, Version Control",
    badgeText: "",
    iconBgClass: "icon-git-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        d: "M22.5 10.9L13.1 1.5c-.6-.6-1.7-.6-2.3 0L8.5 3.8l2.9 2.9c.7-.2 1.4 0 2 .5.5.5.7 1.3.5 2l2.8 2.8c.7-.2 1.5 0 2 .5.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.6-.6-.7-1.5-.4-2.2l-2.6-2.6v6.2c.2.2.4.4.5.7.8.8.8 2.2 0 3-.8.8-2.2.8-3 0-.8-.8-.8-2.2 0-3 .3-.3.7-.5 1.2-.5V8.6c-.5 0-.9-.2-1.2-.5-.6-.6-.7-1.5-.4-2.2L6.2 3.3 1.5 8c-.6.6-.6 1.7 0 2.3l9.4 9.4c.6.6 1.7.6 2.3 0l9.3-9.3c.6-.7.6-1.8 0-2.5z",
        fill: "#F05032",
      }),
    ),
  },
  {
    id: "skill-github",
    name: "GitHub",
    description: "Pull Requests, Actions, CI/CD, Open Source Workflow",
    badgeText: "",
    iconBgClass: "icon-github-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      React.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
        fill: "#1b1f23",
      }),
    ),
  },
  {
    id: "skill-vite",
    name: "Vite",
    description: "Fast HMR, Build Tooling, Plugin Ecosystem, ESBuild",
    badgeText: "",
    iconBgClass: "icon-vite-bg",
    iconSvg: React.createElement(
      "svg",
      {
        width: "24",
        height: "24",
        viewBox: "0 0 410 404",
        fill: "none",
      },
      React.createElement("path", {
        d: "M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5246C6.38087 52.1904 12.6802 43.2188 21.0281 44.8108L205.026 79.7304C206.627 80.0358 208.273 80.0358 209.874 79.7304L390.279 44.8108C398.63 43.2188 404.921 52.2016 399.641 59.5246Z",
        fill: "url(#vite_grad1)",
      }),
      React.createElement("path", {
        d: "M292.965 1.5744L156.801 28.1563C154.563 28.5847 152.906 30.4752 152.694 32.7451L138.673 184.691C138.419 187.419 140.714 189.693 143.447 189.41L180.68 185.554C183.713 185.238 186.193 187.811 185.77 190.823L175.057 265.396C174.621 268.47 177.211 271.068 180.265 270.575L203.26 266.779C206.319 266.285 208.914 268.892 208.466 271.969L192.32 374.982C191.717 378.944 197.225 380.921 199.595 377.57L201.368 375.069L312.094 152.095C313.639 149.014 311.186 145.496 307.765 145.851L269.687 149.826C266.645 150.143 264.17 147.553 264.608 144.534L281.009 39.2502C281.447 36.2177 278.956 33.6202 275.905 33.953L263.318 35.2916C260.267 35.6245 257.776 33.0274 258.214 29.9949L265.044 -13.7028C265.497 -16.7979 262.912 -19.4292 259.827 -18.9874L293.003 -1.56837C296.039 -1.27094 297.868 1.81217 296.671 4.60437L294.598 -0.186944C293.399 -2.98 290.011 -3.49 288.224 -0.972L292.965 1.5744Z",
        fill: "url(#vite_grad2)",
      }),
      React.createElement("defs", null,
        React.createElement("linearGradient",
          { id: "vite_grad1", x1: "205.065", y1: "43.8975", x2: "205.065", y2: "394.628", gradientUnits: "userSpaceOnUse" },
          React.createElement("stop", { stopColor: "#41D1FF" }),
          React.createElement("stop", { offset: "1", stopColor: "#BD34FE" }),
        ),
        React.createElement("linearGradient",
          { id: "vite_grad2", x1: "234.33", y1: "4.00005", x2: "207.05", y2: "372.657", gradientUnits: "userSpaceOnUse" },
          React.createElement("stop", { stopColor: "#FFEA83" }),
          React.createElement("stop", { offset: "0.0833", stopColor: "#FFDD35" }),
          React.createElement("stop", { offset: "1", stopColor: "#FFA800" }),
        ),
      ),
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
