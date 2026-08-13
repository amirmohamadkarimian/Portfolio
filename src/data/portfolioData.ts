import React from 'react';
import {
  ServiceCard,
  TimelineItem,
  TechSkill,
  SoftSkill,
  ProjectItem,
  BlogArticle,
} from '../types/portfolio';

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'web-design',
    title: 'Web Application Design',
    count: '40+ Projects',
    iconBgClass: 'icon-teal',
    iconSvg: React.createElement(
      'svg',
      {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      React.createElement('rect', { x: '2', y: '3', width: '20', height: '14', rx: '2', ry: '2' }),
      React.createElement('line', { x1: '8', y1: '21', x2: '16', y2: '21' }),
      React.createElement('line', { x1: '12', y1: '17', x2: '12', y2: '21' })
    ),
  },
  {
    id: 'react-dev',
    title: 'Frontend & React Dev',
    count: '35+ Web Apps',
    iconBgClass: 'icon-yellow',
    iconSvg: React.createElement(
      'svg',
      {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      React.createElement('rect', { x: '5', y: '2', width: '14', height: '20', rx: '2', ry: '2' }),
      React.createElement('line', { x1: '12', y1: '18', x2: '12.01', y2: '18' })
    ),
  },
  {
    id: 'ui-ux',
    title: 'UI/UX & Design Systems',
    count: '25+ Design Systems',
    iconBgClass: 'icon-coral',
    iconSvg: React.createElement(
      'svg',
      {
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      },
      React.createElement('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' })
    ),
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'exp-1',
    company: 'Senior Frontend Engineer',
    date: 'Sep 2023 — Present',
    role: 'Lead Frontend & Next.js Architect',
    description:
      'Architecting modern React & Next.js web applications, building component design systems with Tailwind CSS and TypeScript, and optimizing Web Vitals for maximum performance and conversion.',
    nodeClass: 'node-teal',
  },
  {
    id: 'exp-2',
    company: 'Frontend UI Engineer',
    date: 'Jan 2021 — Aug 2023',
    role: 'UI/UX & React Specialist',
    description:
      'Designed and developed responsive web interfaces, interactive data dashboards, state management pipelines using Redux Toolkit, and cross-browser accessible web apps.',
    nodeClass: 'node-coral',
  },
  {
    id: 'exp-3',
    company: 'Web Developer & Designer',
    date: 'Feb 2019 — Dec 2020',
    role: 'Full-Stack Web Developer',
    description:
      'Crafted custom client web applications, JavaScript utilities, API integrations, and collaborative Figma prototyping for digital products.',
    nodeClass: 'node-yellow',
  },
];

export const TECH_SKILLS_DATA: TechSkill[] = [
  {
    id: 'skill-react',
    name: 'React & Next.js',
    description: 'App Router, SSR/SSG, Server Components, Custom Hooks',
    badgeText: 'Advanced',
    iconBgClass: 'icon-teal-bg',
    iconSvg: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('circle', { cx: '12', cy: '12', r: '2' }),
      React.createElement('path', { d: 'M12 2v20M2 12h20' })
    ),
  },
  {
    id: 'skill-ts',
    name: 'TypeScript & JS (ES6+)',
    description: 'Strict Typing, Generics, Async/Await, ES Modules',
    badgeText: 'Advanced',
    iconBgClass: 'icon-yellow-bg',
    iconSvg: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('path', { d: 'M16 18l6-6-6-6M8 6l-6 6 6 6' })
    ),
  },
  {
    id: 'skill-tailwind',
    name: 'Tailwind CSS & CSS3',
    description: 'Design System Tokens, Responsive Layouts, Animations',
    badgeText: 'Mastery',
    iconBgClass: 'icon-coral-bg',
    iconSvg: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('path', { d: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' })
    ),
  },
  {
    id: 'skill-redux',
    name: 'Redux Toolkit & State',
    description: 'Global State, RTK Query, Context API, Persistence',
    badgeText: 'Advanced',
    iconBgClass: 'icon-navy-bg',
    iconSvg: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('path', { d: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' })
    ),
  },
  {
    id: 'skill-vite',
    name: 'Vite & Tooling',
    description: 'Fast HMR, Bundling Optimization, npm/pnpm, Git',
    badgeText: 'Proficient',
    iconBgClass: 'icon-teal-bg',
    iconSvg: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
    ),
  },
  {
    id: 'skill-vercel',
    name: 'Vercel & Figma',
    description: 'CI/CD Deployment, Edge Functions, Design Handoff',
    badgeText: 'Proficient',
    iconBgClass: 'icon-yellow-bg',
    iconSvg: React.createElement(
      'svg',
      { width: '24', height: '24', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('path', { d: 'M12 2l10 18H2L12 2z' })
    ),
  },
];

export const SOFT_SKILLS_DATA: SoftSkill[] = [
  {
    id: 'soft-time',
    title: 'Time Management',
    description:
      'Structuring development sprints efficiently, estimating milestones accurately, and meeting strict delivery deadlines without sacrificing code quality.',
    iconClass: 'icon-teal',
    iconSvg: React.createElement(
      'svg',
      { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('circle', { cx: '12', cy: '12', r: '10' }),
      React.createElement('polyline', { points: '12 6 12 12 16 14' })
    ),
  },
  {
    id: 'soft-flexibility',
    title: 'Flexibility',
    description:
      'Adapting smoothly to evolving project scope, shifting technical stack requirements, and integrating feedback into iterative UI refactoring.',
    iconClass: 'icon-coral',
    iconSvg: React.createElement(
      'svg',
      { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('path', { d: 'M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67' })
    ),
  },
  {
    id: 'soft-priority',
    title: 'Prioritization',
    description:
      'Distinguishing high-impact features from low-leverage tasks, optimizing core user journeys first, and delivering MVP value rapidly.',
    iconClass: 'icon-yellow',
    iconSvg: React.createElement(
      'svg',
      { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('line', { x1: '12', y1: '20', x2: '12', y2: '10' }),
      React.createElement('line', { x1: '18', y1: '20', x2: '18', y2: '4' }),
      React.createElement('line', { x1: '6', y1: '20', x2: '6', y2: '16' })
    ),
  },
  {
    id: 'soft-resilience',
    title: 'Resilience under Pressure',
    description:
      'Maintaining composure, technical rigor, and problem-solving focus during critical production bugs, tight launch windows, or hotfixes.',
    iconClass: 'icon-navy',
    iconSvg: React.createElement(
      'svg',
      { width: '20', height: '20', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2' },
      React.createElement('path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' })
    ),
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-1',
    category: 'App Design',
    title: 'Food Delivery App',
    cardClass: 'card-yellow',
    image: 'project_mockup_app.png',
    tags: ['React Native', 'Redux Toolkit'],
    mockupType: 'app',
  },
  {
    id: 'proj-2',
    category: 'Web Design',
    title: 'Agency & Portfolio Platform',
    cardClass: 'card-teal',
    image: 'project_mockup_web.png',
    tags: ['Next.js 14', 'TypeScript'],
    mockupType: 'web',
  },
  {
    id: 'proj-3',
    category: 'Brand Identity',
    title: 'Enterprise Component System',
    cardClass: 'card-mint',
    tags: ['Figma Tokens', 'Tailwind CSS'],
    mockupType: 'mint',
  },
  {
    id: 'proj-4',
    category: 'E-Commerce',
    title: 'Next.js Retail Storefront',
    cardClass: 'card-coral',
    tags: ['Vite & React', 'Redux & Stripe'],
    mockupType: 'coral',
  },
];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: 'blog-1',
    category: 'Next.js & Performance',
    categoryTagClass: 'tag-teal',
    date: 'Aug 10, 2026',
    readTime: '5 min read',
    title: 'Architecting High-Performance Next.js 14 Apps with Server Components',
    excerpt:
      'How leveraging React Server Components, streaming SSR, and aggressive caching strategies reduced core bundle sizes by 45% in production.',
    url: '#contact',
  },
  {
    id: 'blog-2',
    category: 'UI/UX & Design Systems',
    categoryTagClass: 'tag-coral',
    date: 'Jul 28, 2026',
    readTime: '7 min read',
    title: 'Building Scalable Design Systems with Tailwind CSS & TypeScript',
    excerpt:
      'A practical guide to structuring design tokens, enforcing strict type-safe prop interfaces, and creating flexible UI component libraries.',
    url: '#contact',
  },
  {
    id: 'blog-3',
    category: 'State Management',
    categoryTagClass: 'tag-yellow',
    date: 'Jul 14, 2026',
    readTime: '4 min read',
    title: 'Mastering Redux Toolkit & RTK Query for Complex Async Workflows',
    excerpt:
      'Streamlining global client state, normalized cache management, and optimistic UI updates without boilerplate overload.',
    url: '#contact',
  },
];
